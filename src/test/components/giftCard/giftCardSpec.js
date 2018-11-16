import { betterMockComponentContext } from '@bxm/flux';
import { shallow } from 'enzyme';
import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const Context = betterMockComponentContext();
const { React } = Context;

const GiftCard = proxyquire('../../../app/components/giftCard/giftCard', {
    react: React
}).default;

describe('GiftCard', () => {
    const context = {
        config: {
            site: {
                host: 'https://someurl.com'
            }
        }
    };

    const pathToImage = image => `${context.config.site.host}/assets/images/${image}`;

    describe('when brand prop is passed into component', () => {
        describe('imageUrl is set using site host', () => {
            const brandStub = {
                id: 'gt'
            };
            const expectedImageUrl = pathToImage(GiftCard.DEFAULT_IMAGE);
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it('has set the src correctly', () => {
                expect(wrapper.find('.gift-card-image img').prop('src')).to.equal(expectedImageUrl);
            });
        });

        describe('when brand contains giftCard url', () => {
            const brandStub = {
                id: 'gt',
                giftCard: {
                    url: 'http://someurl.jpg'
                }
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it('has the url value set in brand object', () => {
                expect(wrapper.find('.gift-card-button a').prop('href')).to.equal(brandStub.giftCard.url);
            });
        });

        describe('when brand does not contain giftCard url', () => {
            const brandStub = {
                id: 'gt'
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it('has the url value set in brand object', () => {
                expect(wrapper.find('.gift-card-button a').prop('href')).to.equal(GiftCard.DEFAULT_URL);
            });
        });

        describe('when brand contains buttonText', () => {
            const brandStub = {
                id: 'gt',
                giftCard: {
                    buttonText: 'some text'
                }
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it('has the buttonText value set in brand object', () => {
                expect(wrapper.find('.button--link').text()).to.equal(brandStub.giftCard.buttonText);
            });
        });

        describe('when brand contains giftCard image', () => {
            const brandStub = {
                id: 'gt',
                giftCard: {
                    image: 'test-image.png'
                }
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it('has the buttonText value set in brand object', () => {
                const expectedImage = pathToImage(brandStub.giftCard.image);
                expect(wrapper.find('img').props().src).to.equal(expectedImage);
            });
        });

        describe('when brand does not contain buttonText', () => {
            const brandStub = {
                id: 'gt'
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it(`has the default button text from the component statics.`, () => {
                expect(wrapper.find('.button--link').text()).to.equal(GiftCard.DEFAULT_BUTTON_TEXT);
            });
        });
    });
});
