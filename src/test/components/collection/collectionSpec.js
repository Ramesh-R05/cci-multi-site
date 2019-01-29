import { betterMockComponentContext } from '@bxm/flux';
import proxyquire, { noCallThru } from 'proxyquire';
import { shallow } from 'enzyme';
import moreFrom from '../../mocks/moreFrom';
import recipeEntityMock from '../../mocks/recipe';

noCallThru();

const Context = betterMockComponentContext();
const { React } = Context;

const ContentBodyStub = Context.createStubComponent();
const NewsletterSignupStub = Context.createStubComponent();
const HeaderStub = Context.createStubComponent();
const FooterStub = Context.createStubComponent();
const BrandLogoStub = Context.createStubComponent();
const OutbrainStub = Context.createStubComponent();
const RevContentStub = Context.createStubComponent();
const FeedCarouselStub = Context.createStubComponent();
const ListStub = Context.createStubComponent();
const MoreFromStub = Context.createStubComponent();

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
    '@bxm/article/lib/components/article/moreFrom': MoreFromStub,
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
        collectionRecipeEntities: [],
        moreFrom
    };

    beforeEach(() => {
        wrapper = shallow(<Collection {...props} />, { context: contextConfigStub });
    });

    it('should render Header component', () => {
        expect(wrapper.find(HeaderStub).exists()).to.equal(true);
    });

    it('should render ContentBody component', () => {
        expect(wrapper.find(ContentBodyStub).exists()).to.equal(true);
    });

    it('should render NewsletterSignup component', () => {
        expect(wrapper.find(NewsletterSignupStub).exists()).to.equal(true);
    });

    it('should render Footer component', () => {
        expect(wrapper.find(FooterStub).exists()).to.equal(true);
    });

    it('should render FeedCarousel component, when feedCarousel feature is enabled', () => {
        expect(wrapper.find(FeedCarouselStub).exists()).to.equal(true);
    });

    it('should render Outbrain component, when outbrain feature is enabled', () => {
        expect(wrapper.find(OutbrainStub).exists()).to.equal(true);
    });

    it('should render RevContent component, when revContent feature is enabled', () => {
        expect(wrapper.find(RevContentStub).exists()).to.equal(true);
    });

    it('should render MoreFrom component, when showRevContent feature is enabled', () => {
        expect(wrapper.find(MoreFromStub).exists()).to.equal(true);
    });

    it('should not render List, when collectionRecipeEntities prop is empty', () => {
        expect(wrapper.find(ListStub).exists()).to.equal(false);
    });

    it.skip('should render collectionRecipeEntities list, when collectionRecipeEntities prop is not empty', () => {
        const newProps = {
            ...props,
            collectionRecipeEntities: [recipeEntityMock]
        };

        wrapper = shallow(<Collection {...newProps} />, { context: contextConfigStub });
        expect(wrapper.find(ListStub).exists()).to.equal(true);
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

        it('should not render FeedCarousel component, when FeedCarousel feature is disabled', () => {
            expect(wrapper.find(FeedCarouselStub).exists()).to.equal(false);
        });

        it('should not render Outbrain component, when outbrain feature is disabled', () => {
            expect(wrapper.find(OutbrainStub).exists()).to.equal(false);
        });

        it('should not render RevContent component, when revContent feature is disabled', () => {
            expect(wrapper.find(RevContentStub).exists()).to.equal(false);
        });

        it('should not render MoreFrom component, when moreFrom feature is disabled', () => {
            expect(wrapper.find(MoreFromStub).exists()).to.equal(false);
        });
    });
});
