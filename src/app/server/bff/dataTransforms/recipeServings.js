export default function getRecipeServings(recipeServings) {
    if (!recipeServings) {
        return '';
    }

    const { serveMax, serveMin, yieldMeasure, yieldQuantity } = recipeServings;
    const serveMaxInt = parseInt(serveMax, 10);
    const serveMinInt = parseInt(serveMin, 10);
    const yieldQuantityInt = parseInt(yieldQuantity, 10);

    const recipeServingsArr = [];

    if (serveMaxInt && serveMinInt) {
        recipeServingsArr.push(`Serves ${serveMinInt} - ${serveMaxInt}`);
    } else if (serveMaxInt || serveMinInt) {
        recipeServingsArr.push(`Serves ${serveMinInt || serveMaxInt}`);
    }

    if (yieldQuantityInt) {
        recipeServingsArr.push(`Makes ${yieldQuantityInt}${yieldMeasure ? ` ${yieldMeasure}` : ''}`);
    }

    return recipeServingsArr.join(', ');
}
