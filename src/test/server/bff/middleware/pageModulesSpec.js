import proxyquire, { noCallThru } from 'proxyquire';
import { MiddlewareTestFactory } from '@bxm/unit-test-utils';

noCallThru();

const getModulesStub = sinon.stub();

const pageModulesMiddleware = proxyquire('../../../../app/server/bff/middleware/pageModules', {
    '../api': {
        getModules: getModulesStub
    },
    '../../../../logger': { error() {} }
}).default;

const middlewareTest = MiddlewareTestFactory(pageModulesMiddleware, { baseRequest: { data: {} } });

describe('PageModules middleware', () => {
    describe('when the response is valid', () => {
        let testArgs;
        let result;
        let callMiddleware;

        before(async () => {
            [testArgs, callMiddleware] = await middlewareTest({});

            getModulesStub.resolves({ headernavigation: module });

            result = await callMiddleware();
        });

        it('should set `req.data.headernavigation` to equal the response', () => {
            expect(result.req.data).to.deep.eq({ headernavigation: module });
        });

        it('calls the next middleware', () => {
            expect(testArgs.next).to.be.calledWith();
        });
    });

    describe('when the response returns an error', () => {
        let testArgs;
        let result;
        let callMiddleware;

        before(async () => {
            [testArgs, callMiddleware] = await middlewareTest({});

            getModulesStub.rejects();

            result = await callMiddleware();
        });

        it('does not change `req.data`', () => {
            expect(testArgs.req).to.deep.eq(result.req);
        });

        it('calls the next middleware', () => {
            expect(testArgs.next).to.be.calledWith();
        });
    });
});
