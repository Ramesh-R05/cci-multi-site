import React, { Component, PropTypes } from 'react';

export default class RecipeAtGlance extends Component {
    static displayName = 'RecipeAtGlance';

    static propTypes = {
        recipeAtGlance: PropTypes.object.isRequired
    };

    static getRecipeServings(recipeServings) {
        if (!recipeServings) return '';
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

    static getRecipeCookingTime(recipeCookingTime) {
        const labelAlias = {
            preparation: 'preparation',
            cooking: 'cooking',
            marinating: 'marinating'
        };

        const recipeCookingTimeFiltered = ((recipeCookingTime && recipeCookingTime.times) || []).filter(time => parseInt(time.minutes, 10));

        return recipeCookingTimeFiltered.map((time) => {
            const minInt = parseInt(time.minutes, 10) || 0;
            const hours = Math.floor(minInt / 60);
            const mins = minInt % 60;
            const hourFormated = hours ? `${hours} ${hours > 1 ? 'hrs' : 'hr'} ` : '';
            const minFormated = mins ? `${mins} ${mins > 1 ? 'mins' : 'min'}` : '';
            const timeFormated = `${hourFormated}${minFormated}`;
            return `${timeFormated} ${labelAlias[time.id]}${time.label ? ` ${time.label}` : ''}`;
        });
    }

    getGlanceDetails() {
        let glanceDetails = [];
        const { recipeAtGlance } = this.props;
        const { recipeCookingTime, recipeServings } = recipeAtGlance;
        const getRecipeServingsDetail = RecipeAtGlance.getRecipeServings(recipeServings);
        const getRecipeCookingTimeDtails = RecipeAtGlance.getRecipeCookingTime(recipeCookingTime);

        if (getRecipeServingsDetail) { glanceDetails.push(getRecipeServingsDetail); }
        if (getRecipeCookingTimeDtails.length) { glanceDetails = glanceDetails.concat(getRecipeCookingTimeDtails); }

        if (glanceDetails.length === 0) return null;

        return glanceDetails.map((detail, id) => (<li key={id.toString()}>{detail}</li>));
    }

    render() {
        const { recipeAtGlance } = this.props;
        const glanceDetails = this.getGlanceDetails();
        if (!recipeAtGlance || Object.keys(recipeAtGlance).length === 0 || !glanceDetails) return null;

        return (<ul className="article__at_glance">{glanceDetails}</ul>);
    }
}
