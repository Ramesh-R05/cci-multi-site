import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React } = Context;
import proxyquire, { noCallThru } from 'proxyquire';
import { shallow } from 'enzyme';
noCallThru();

const ContentBodyStub = Context.createStubComponent();
const NewsletterSignupStub = Context.createStubComponent();
const HeaderStub = Context.createStubComponent();
const FooterStub = Context.createStubComponent();
const BrandLogoStub = Context.createStubComponent();
const OutbrainStub = Context.createStubComponent();
const RevContentStub = Context.createStubComponent();
const FeedCarouselStub = Context.createStubComponent();
const ListStub = Context.createStubComponent();

const Collection = proxyquire('../../../app/components/collection/collection', {
    react: React,
    '@bxm/article/lib/components/contentBody/contentBody': ContentBodyStub,
    '@bxm/article/lib/components/article/newsletterSignup': NewsletterSignupStub,
    '@bxm/article/lib/components/article/header': HeaderStub,
    '@bxm/article/lib/components/article/footer': FooterStub,
    '@bxm/article/lib/components/article/brandLogo': BrandLogoStub,
    '@bxm/article/lib/components/article/outbrain': OutbrainStub,
    '@bxm/article/lib/components/article/revContent': RevContentStub,
    '@bxm/article/lib/components/article/feedCarousel': FeedCarouselStub,
    '../teaser/list': ListStub
}).default;

describe('Collection', () => {
    let wrapper;

    const contextConfigStub = {
        config: {
            isFeatureEnabled: () => true,
            get: () => ['bp1', 'bp2'],
            site: { name: 'site name' }
        }
    };

    const props = {
        articleHeaderOrder: [],
        contentBody: [],
        dateCreated: '',
        heroItem: {},
        nodeType: '',
        pageId: '',
        tagsDetails: [{ tag: 'tag1' }],
        title: '',
        url: '',
        siteUrl: '',
        feedItems: [],
        siteName: 'awwfood',
        collectionRecipeEntities: []
    };

    beforeEach(() => {
        wrapper = shallow(<Collection {...props} />, { context: contextConfigStub });
    });

    it('shoud render Header component', () => {
        expect(wrapper.find(HeaderStub).exists()).to.equal(true);
    });

    it('shoud render ContentBody component', () => {
        expect(wrapper.find(ContentBodyStub).exists()).to.equal(true);
    });

    it('shoud render NewsletterSignup component', () => {
        expect(wrapper.find(NewsletterSignupStub).exists()).to.equal(true);
    });

    it('shoud render Footer component', () => {
        expect(wrapper.find(FooterStub).exists()).to.equal(true);
    });

    it('shoud render FeedCarousel component, when showFeedCarousel feature is on', () => {
        expect(wrapper.find(FeedCarouselStub).exists()).to.equal(true);
    });

    it('shoud render Outbrain component, when showOutbrain feature is on', () => {
        expect(wrapper.find(OutbrainStub).exists()).to.equal(true);
    });

    it('shoud render RevContent component, when showRevContent feature is on', () => {
        expect(wrapper.find(RevContentStub).exists()).to.equal(true);
    });

    it('should not render collectionRecipeEntities list, when collectionRecipeEntities prop is empty', () => {
        expect(wrapper.find(ListStub).exists()).to.equal(false);
    });

    it('should render collectionRecipeEntities list, when collectionRecipeEntities prop is not empty', () => {
        const collectionRecipeEntities = ['entity1', 'entity2'];
        wrapper = shallow(<Collection {...{ ...props, collectionRecipeEntities }} />, { context: contextConfigStub });
        expect(wrapper.exists(ListStub)).to.equal(true);
    });

    describe('when features are off', () => {
        const contextFeatureOffStub = {
            config: {
                isFeatureEnabled: () => false,
                get: () => ['bp1', 'bp2'],
                site: { name: 'site name' }
            }
        };

        beforeEach(() => {
            wrapper = shallow(<Collection {...props} />, { context: contextFeatureOffStub });
        });

        it('shoud not render FeedCarousel component, when showFeedCarousel feature is off', () => {
            expect(wrapper.find(FeedCarouselStub).exists()).to.equal(false);
        });

        it('shoud not render Outbrain component, when showOutbrain feature is off', () => {
            expect(wrapper.find(OutbrainStub).exists()).to.equal(false);
        });

        it('shoud not render RevContent component, when showRevContent feature is off', () => {
            expect(wrapper.find(RevContentStub).exists()).to.equal(false);
        });
    });
});
