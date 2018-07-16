import React from 'react';
import { shallow } from 'enzyme';
import { betterMockComponentContext } from '@bxm/flux';
import proxyquire from 'proxyquire';
proxyquire.noCallThru();

const Context = betterMockComponentContext();
const FeedStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();
const AdStub = Context.createStubComponent();
const RecipeStub = Context.createStubComponent();
const FooterStub = Context.createStubComponent();

const RecipeContent = proxyquire('../../../app/components/recipe/recipeContent', {
    '@bxm/article/lib/components/feed/feed': FeedStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub,
    '@bxm/ad/lib/google/components/ad': AdStub,
    './recipe': RecipeStub
}).default;
const contentMock = {
    id: 1,
    body: 'test',
    tags: [1, 2],
    tagsDetails: [
        {
            name: 'homes:Topic:Garden planner',
            fullName: 'homes_Topic_Garden_planner'
        },
        {
            name: 'homes:Homes navigation:Outdoor',
            fullName: 'homes_Homes_navigation_Outdoor'
        }
    ]
};

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

describe('Component', () => {
    describe('RecipeContent', () => {
        let props;
        let wrapper;

        describe('recipe', () => {
            before(() => {
                props = {
                    content: contentMock,
                    footer: FooterStub
                };

                wrapper = shallow(<RecipeContent {...props} />);
            });

            it('should render recipe', () => {
                expect(wrapper.find(RecipeStub).length).to.be.equal(1);
            });

            it('should render feed', () => {
                expect(wrapper.find(FeedStub).length).to.be.equal(1);
            });

            it('should render sticky ad', () => {
                expect(wrapper.find(StickyAdStub).length).to.be.equal(1);
            });

            it('should render sticky ad with correct props', () => {
                expect(wrapper.find(StickyAdStub).props()).to.deep.eq({
                    adProps: {
                        className: 'ad--section-bottom-leaderboard',
                        displayFor: ['small', 'medium'],
                        sizes: {
                            banner: 'banner',
                            leaderboard: 'leaderboard',
                            billboard: ['billboard', 'leaderboard']
                        },
                        targets: {
                            keyword: ['homes_Topic_Garden_planner', 'homes_Homes_navigation_Outdoor']
                        },
                        lazyLoad: true,
                        isVerticalGallery: false,
                        autoRefreshing: {
                            interval: 30000,
                            idle: 120000
                        },
                        pageLocation: 'outside'
                    },
                    minHeight: 450,
                    stickyAtViewPort: 'mediumRangeMax',
                    stickyDelay: 5500
                });
            });
        });

        describe('when footer is in prop', () => {
            before(() => {
                props = {
                    content: contentMock,
                    footer: FooterStub
                };

                wrapper = shallow(<RecipeContent {...props} />);

                it('should render footer component', () => {
                    expect(wrapper.find(FooterStub).length).to.be.equal(1);
                });
            });
        });

        describe('Teads enabled', () => {
            before(() => {
                props = {
                    content: contentMock,
                    enableTeads: true
                };

                wrapper = shallow(<RecipeContent {...props} />);
            });

            it('should have the correct props to the ad', () => {
                expect(
                    wrapper
                        .find(AdStub)
                        .first()
                        .props()
                ).to.deep.eq({
                    label: { active: false },
                    sizes: 'teads',
                    targets: { keyword: ['homes_Topic_Garden_planner', 'homes_Homes_navigation_Outdoor'] },
                    pageLocation: 'outside'
                });
            });
        });

        describe('Teads disabled', () => {
            before(() => {
                props = {
                    content: contentMock
                };

                wrapper = shallow(<RecipeContent {...props} />);
            });

            it('should not render', () => {
                expect(wrapper.find(AdStub).length).to.be.equal(1);
            });
        });
    });
});
