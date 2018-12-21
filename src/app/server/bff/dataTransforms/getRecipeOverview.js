import recipeServingsTransform from './recipeServings';
import recipeCookingTimeTransform from './recipeCookingTime';

export default function getRecipeOverview(entity = {}) {
    const { recipeCookingTime, recipeServings } = entity;

    if (!entity) {
        return [];
    }

    return [recipeCookingTimeTransform(recipeCookingTime), recipeServingsTransform(recipeServings)].reduce((accum, val) => {
        const values = [...accum];

        if (val && val.length >= 1 && Array.isArray(val)) {
            values.push(...val);
        }

        if (val && !Array.isArray(val)) {
            values.push(val);
        }

        return values;
    }, []);
}
