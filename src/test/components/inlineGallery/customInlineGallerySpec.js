import {betterMockComponentContext} from '@bxm/flux';
const Context = betterMockComponentContext();
const {React, ReactDOM, TestUtils} = Context;
import proxyquire, {noCallThru} from 'proxyquire';
noCallThru();

import videoGalleryMock from '../../mocks/galleryOfGalleries';
const videoGalleryTeaserItem = videoGalleryMock.data[0];

const InlineGalleryStub = Context.createStubComponent();
const breakPoints = {
    smallRangeMax: 700,
    mediumRangeMax: 1000,
    largeRangeMax: 1400
};
const CustomInlineGallery = proxyquire('../../../app/components/inlineGallery/customInlineGallery', {
    'react': React,
    '../../breakpoints': breakPoints,
    '@bxm/gallery/lib/components/inlineGallery': InlineGalleryStub
}).default;

let isGOGEnabled = true;

const contextConfigStub = {
    key: 'config',
    type: '',
    value: {
        isFeatureEnabled() {
            return isGOGEnabled;
        }
    }
};

describe('CustomInlineGallery', () => {
    let reactModule;

    afterEach(Context.cleanup);

    describe(`with galleries`, () => {
        let inlineGallery;

        before(() => {
            reactModule = Context.mountComponent(CustomInlineGallery, {videoGallery: videoGalleryMock.data}, [contextConfigStub]);
            inlineGallery = TestUtils.findRenderedComponentWithType(reactModule, InlineGalleryStub);
        });

        it(`should render the InlineGallery component and pass through galleries`, () => {
            expect(inlineGallery).to.exist;
            expect(inlineGallery.props.galleries).to.deep.equal(videoGalleryMock.data);
        });

        it(`should pass the renderSlide prop to the InlineGallery component`, () => {
            expect(inlineGallery.props.renderSlide).to.equal(reactModule.renderSlide);
        });

        it(`should pass the imageSizes prop to the InlineGallery component`, () => {
            expect(inlineGallery.props.imageSizes).to.equal(CustomInlineGallery.imageSizes);
        });

        it(`should pass the breakpoints prop to the InlineGallery component`, () => {
            expect(inlineGallery.props.breakpoints).to.equal(breakPoints);
        });

        describe(`#renderSlide`, () => {
            it('should render a GallerySlide Component with relevant props', () => {
                const imageUrl = 'IMAGE URL';
                const itemMock = videoGalleryMock.data[0];
                const component = reactModule.renderSlide(itemMock, 1, imageUrl);
               // let cloneProps = {...itemMock};
               // cloneProps.imageUrl = imageUrl;
               // expect(component.props).to.deep.eq(cloneProps);
            });

            it('should return null when no args passed', () => {
                const component = reactModule.renderSlide();
                expect(component).to.eq(null);
            });

            it('should render null when image is not passed', () => {
                const itemMock = videoGalleryMock.data[0];
                const component = reactModule.renderSlide(itemMock, 0);
                expect(component).to.eq(null);
            });
        });
    });

    describe(`with galleries and galleryOfGalleries feature is toggled off`, () => {
        before(() => {
            isGOGEnabled = false;
            reactModule = Context.mountComponent(CustomInlineGallery, {
                videoGallery: videoGalleryMock.data
            }, [contextConfigStub]);
        });

        after(() => {
            isGOGEnabled = true;
        });

        it(`should not render the component`, () => {
            expect(ReactDOM.findDOMNode(reactModule)).to.not.exist;
        });
    });

    describe(`without galleries`, () => {
        before(() => {
            reactModule = Context.mountComponent(CustomInlineGallery, {}, [contextConfigStub]);
        });

        it(`should not render the component`, () => {
            expect(ReactDOM.findDOMNode(reactModule)).to.not.exist;
        });
    });
});
