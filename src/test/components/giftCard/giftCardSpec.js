import { betterMockComponentContext } from '@bxm/flux';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
import { shallow } from 'enzyme';
import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const GiftCard = proxyquire('../../../app/components/giftCard/giftCard', {}).default;

describe('GiftCard', () => {
    const DEFAULT_URL = 'gift-card-large';
    const DEFAULT_BUTTON_TEXT = 'Buy Now';

    const context = {
        config: {
            site: {
                host: 'https://someurl.com'
            }
        }
    };

    describe('when brand prop is passed into component', () => {
        describe('imageUrl is set using site host', () => {
            const brandStub = {
                id: 'gt'
            };
            const expectedImageUrl = `${context.config.site.host}/assets/images/gift-card.png`;
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it(`has set the src correctly`, () => {
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

            it(`has the url value set in brand object`, () => {
                expect(wrapper.find('.gift-card-button a').prop('href')).to.equal(brandStub.giftCard.url);
            });
        });

        describe('when brand does not contain giftCard url', () => {
            const brandStub = {
                id: 'gt'
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it(`has the url value set in brand object`, () => {
                expect(wrapper.find('.gift-card-button a').prop('href')).to.equal(DEFAULT_URL);
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

            it(`has the buttonText value set in brand object`, () => {
                expect(wrapper.find('.button--link').text()).to.equal(brandStub.giftCard.buttonText);
            });
        });

        describe('when brand does not contain buttonText', () => {
            const brandStub = {
                id: 'gt'
            };
            const wrapper = shallow(<GiftCard brand={brandStub} />, { context });

            it(`has the buttonText value set in brand object`, () => {
                expect(wrapper.find('.button--link').text()).to.equal(DEFAULT_BUTTON_TEXT);
            });
        });
    });
});
