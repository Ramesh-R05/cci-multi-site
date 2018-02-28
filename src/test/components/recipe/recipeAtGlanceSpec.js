import { shallow, mount } from 'enzyme';
import {betterMockComponentContext} from '@bxm/flux';
const Context = betterMockComponentContext();
const {React, ReactDOM} = Context;
import RecipeAtGlance from '../../../app/components/recipe/recipeAtGlance';

describe(`RecipeAtAGlance Component`, () => {

    let wrapper;
    it("if all data set to be 0, should not render component", () => {
        const recipeAtGlance = {
            recipeCookingTime:{
                times: [
                    {
                        id: "preparation",
                        label:"wash fish and cut vegs",
                        minutes: 0
                    },
                    {
                        id: "cooking",
                        label:"deep fried",
                        minutes: 0
                    },
                    {
                        id: "marinating",
                        label:"",
                        minutes: 0
                    }
                ]
            },
            recipeServings:{
                serveMax: "0",
                serveMin: "0",
                yieldMeasure: "slices",
                yieldQuantity: "0"
            }
        }

        wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
        expect(wrapper.find('.article__at_glance').exists()).to.equal(false);
    })

    describe("when pass in recipeAtGlance.recipeServings prop", () => {
        it('if the prop has serveMax property', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeServings = {serveMax: "4"};
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("Serves 4")
        })

        it('if the prop has serveMin property', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeServings = {serveMin: "2"};
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("Serves 2")
        })

        it('if the prop has both serveMin and serveMax properties', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeServings = {serveMin: "2", serveMax: "4"};
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("Serves 2 - 4")
        })

        it('if the prop has yieldQuantity property', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeServings = {yieldQuantity: "2"};
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("Makes 2")
        })

        it('if the prop has both yieldQuantity and property', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeServings = {yieldQuantity: "2", yieldMeasure: "slices"};
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("Makes 2 slices")
        })

        it('if the prop has serveMin, yieldQuantity and property', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeServings = {serveMin: 5, yieldQuantity: "2", yieldMeasure: "slices"};
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("Serves 5, Makes 2 slices")
        })
    })

    describe("when pass in recipeAtGlance.recipeCookingTime prop", () => {
        it('if the prop has times.preparation property', () => {
            const recipeAtGlance = {};
            recipeAtGlance.recipeCookingTime = {
                times: [{
                            id: "preparation",
                            label:"wash fish and cut vegs",
                            minutes: 128
                        }
                    ]
            }
            wrapper = mount(<RecipeAtGlance recipeAtGlance={recipeAtGlance} />)
            expect(wrapper.html()).contain("2 hrs 8 mins preparation wash fish and cut vegs")
        })
    })

})