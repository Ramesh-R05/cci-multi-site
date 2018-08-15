import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React } = Context;
import proxyquire, { noCallThru } from 'proxyquire';
import { shallow } from 'enzyme';
noCallThru();

const FeedStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();
const AdStub = Context.createStubComponent();
const CollectionStub = Context.createStubComponent();

(AdStub.pos = {}), (AdStub.pos.outside = 'outSide');

const CollectionContent = proxyquire('../../../app/components/collection/collectionContent', {
    react: React,
    '@bxm/article/lib/components/feed/feed': FeedStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub,
    '@bxm/ad/lib/google/components/ad': AdStub,
    './collection': CollectionStub
}).default;

describe('CollectionContent', () => {
    let wrapper;

    const props = {
        menuSliderClassName: '',
        content: {},
        hero: {},
        feedTitle: ''
    };

    before(() => {
        wrapper = shallow(<CollectionContent {...props} />);
    });

    it('shoud render Feed component', () => {
        expect(wrapper.find(FeedStub).exists()).to.equal(true);
    });

    it('shoud render StickyAd component', () => {
        expect(wrapper.find(StickyAdStub).exists()).to.equal(true);
    });

    it('shoud render Ad component', () => {
        expect(wrapper.find(AdStub).exists()).to.equal(true);
    });

    it('shoud render Collection component', () => {
        expect(wrapper.find(CollectionStub).exists()).to.equal(true);
    });
});
