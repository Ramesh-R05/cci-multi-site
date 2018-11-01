import proxyquire, { noCallThru } from 'proxyquire';

noCallThru();

let makeRequestStub = () => {};
const tagsToQueryStub = tags => tags;
const tagResponseMock = [
    {
        nodeTypeAlias: 'TagSection',
        tagsDetails: [
            {
                fullName: 'tagSectionFullName'
            }
        ]
    },
    {
        nodeTypeAlias: 'CommercialTagSection',
        tagsDetails: [
            {
                fullName: 'CommercialTagFullName1'
            },
            {
                fullName: 'CommercialTagFullName2'
            }
        ]
    }
];
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
            app: {
                locals: {
                    config: {
                        site: { prefix: 'awwfood' },
                        services: { remote: { entity: 'whatever url' } }
                    }
                }
            }
        };
    });

    it('Input argument will have property isFoodSite with correct value', () => {
        const foodReqStub = { ...reqStub };
        commercialTagMiddleware(foodReqStub, {}, next);
        expect(foodReqStub.data.isFoodSite).to.eq(true);

        const noneFoodReqStub = { ...reqStub };
        noneFoodReqStub.app.locals.config.site.prefix = 'now';
        commercialTagMiddleware(noneFoodReqStub, {}, next);
        expect(noneFoodReqStub.data.isFoodSite).to.eq(false);
    });

    it('Input argument will get propery commercialTag, if there is commercialTag returned', done => {
        makeRequestStub = Promise.resolve(tagResponseMock);
        const foodReqStub = { ...reqStub };
        const expectTagSection = [tagResponseMock[0]];
        const expectCommercialTagSection = [tagResponseMock[1]];
        const expectExcludedTags = ['CommercialTagFullName1', 'CommercialTagFullName2'];
        commercialTagMiddleware(foodReqStub, {}, next)
            .then(() => {
                expect(foodReqStub.data.tagSections).to.deep.eq(expectTagSection);
                expect(foodReqStub.data.commercialTagSections).to.deep.eq(expectCommercialTagSection);
                expect(foodReqStub.data.tagsToExclude).to.deep.eq(expectExcludedTags);
                done();
            })
            .catch(e => done());
    });

    it('Input argument will not get propery commercialTag, if remote return errors', done => {
        makeRequestStub = sinon.stub().throws();
        const foodReqStub = { ...reqStub };
        commercialTagMiddleware(foodReqStub, {}, next)
            .then(() => {
                expect(typeof foodReqStub.data.tagSections === 'undefined').to.equal(true);
                expect(typeof foodReqStub.data.commercialTagSections === 'undefined').to.equal(true);
                expect(typeof foodReqStub.data.tagsToExclude === 'undefined').to.equal(true);
                done();
            })
            .catch(e => done());
    });
});
