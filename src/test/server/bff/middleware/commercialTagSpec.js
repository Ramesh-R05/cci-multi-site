import proxyquire,  {noCallThru } from 'proxyquire';

noCallThru();

let makeRequestStub = () => {}
const tagsToQueryStub = tags => tags;
const expectCommercialTag = [
    { tagsDetails: [ {fullName: 'aaa'} ] }
]

const commercialTagMiddleware = proxyquire('../../../../app/server/bff/middleware/commercialTag', {
    '../../makeRequest': url => makeRequestStub,
    '../helper/tagsToQuery': tagsToQueryStub
}).default;

describe('CommercialTag middleware', () => {
    let next;
    let reqStub;
    beforeEach(() => {
        next = sinon.spy();
        reqStub = {
            app: { locals: { 
                config: {
                    site:{ prefix: 'awwfood'},
                    services: { remote: { commercialtagsections: 'whatever url' }}
                }}
            }
        }
    });

    it('Input argument will have property isFoodSite with correct value', () => {
        const foodReqStub = { ...reqStub };
        commercialTagMiddleware(foodReqStub, {}, next);
        expect(foodReqStub.data.isFoodSite).to.eq(true);

        const noneFoodReqStub = { ...reqStub };
        noneFoodReqStub.app.locals.config.site.prefix = 'now';
        commercialTagMiddleware(noneFoodReqStub, {}, next);
        expect(noneFoodReqStub.data.isFoodSite).to.eq(false);
    })

    it('Input argument will not get propery commercialTag, if remote return errors', () => {
        makeRequestStub = Promise.reject({status: 404});
        const foodReqStub = { ...reqStub };
        commercialTagMiddleware(foodReqStub, {}, next);
        expect(typeof foodReqStub.data.commercialTag === 'undefined').to.eq(true);
    })

    it('Input argument will get propery commercialTag, if there is commercialTag returned', () => {
        makeRequestStub = Promise.resolve(expectCommercialTag);
        const reqCopy = { ...reqStub };
        commercialTagMiddleware(reqCopy, {}, next);
        makeRequestStub.then(data => {
            expect(foodReqStub.data.commercialTag).to.deep.eq(['aaa'])
        })
    })
});