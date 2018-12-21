import proxyquire, { noCallThru } from 'proxyquire';
import recipeMock from '../../../mocks/recipe';

noCallThru();

const RecipeServingsTransformStub = sinon.stub();
const recipeCookingTimeTransformStub = sinon.stub();

const getRecipeOverview = proxyquire('../../../../app/server/bff/dataTransforms/getRecipeOverview', {
    './recipeServings': RecipeServingsTransformStub,
    './recipeCookingTime': recipeCookingTimeTransformStub
}).default;

const mockEntity = {
    cookingTime: { ...recipeMock.recipeCookingTime },
    servings: { ...recipeMock.recipeServings }
};

const mockFormattedCookingTime = ['50 mins preparation', '40 mins cooking'];
const mockFormattedServings = ['serves 2'];

describe('getRecipeOverview function', () => {
    describe('when passed a valid entity', () => {
        describe('with recipeCookingTime', () => {
            let result;
            const args = {
                recipeCookingTime: mockEntity.cookingTime
            };

            before(() => {
                recipeCookingTimeTransformStub.withArgs(args.recipeCookingTime).returns(mockFormattedCookingTime);
                result = getRecipeOverview(args);
            });

            it('should return an array of formatted recipe cooking time strings', () => {
                expect(result).to.deep.eq([...mockFormattedCookingTime]);
            });
        });
        describe('with recipeServings', () => {
            let result;
            const args = {
                recipeServings: mockEntity.servings
            };

            before(() => {
                RecipeServingsTransformStub.withArgs(args.recipeServings).returns(mockFormattedServings);
                result = getRecipeOverview(args);
            });

            it('should return an array of formatted recipe servings strings', () => {
                expect(result).to.deep.eq([...mockFormattedServings]);
            });
        });
        describe('with both recipeServings and recipeCookingTime', () => {
            let result;
            const args = {
                recipeServings: mockEntity.servings,
                recipeCookingTime: mockEntity.cookingTime
            };

            before(() => {
                recipeCookingTimeTransformStub.withArgs(args.recipeCookingTime).returns(mockFormattedCookingTime);
                RecipeServingsTransformStub.withArgs(args.recipeServings).returns(mockFormattedServings);
                result = getRecipeOverview(args);
            });

            it('should return an array of formatted recipe servings strings and recipe cooking time strings', () => {
                expect(result).to.deep.eq([...mockFormattedCookingTime, ...mockFormattedServings]);
            });
        });
    });
    describe('when passed an invalid entity', () => {
        let result;

        before(() => {
            result = getRecipeOverview({ foo: 'bar' });
        });

        it('should return an empty array', () => {
            expect(result).to.deep.eq([]);
        });
    });
});
