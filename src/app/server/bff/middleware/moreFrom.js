import get from 'lodash/object/get';
import { teaserTitleTransformer } from '../dataTransforms';

export default async function moreFrom(req, res, next) {
    try {
        const { config } = req.app.locals;

        if (get(req, 'data.leftHandSide') && config.isFeatureEnabled('moreFrom')) {
            const { leftHandSide = {} } = req.data;
            const { moreFrom: moreFromConfig } = config.features;

            if (!leftHandSide.data) {
                leftHandSide.data = [];
            }

            req.data = {
                ...req.data,
                leftHandSide: {
                    ...leftHandSide,
                    data: leftHandSide.data.slice(0, leftHandSide.data.length - 4)
                },
                moreFrom: {
                    title: moreFromConfig && moreFromConfig.title,
                    items: leftHandSide.data
                        .slice(leftHandSide.data.length - 4, leftHandSide.data.length)
                        .map(article => teaserTitleTransformer(article, config)),
                    options: moreFromConfig && moreFromConfig.options
                }
            };
        }

        next();
    } catch (error) {
        next(error);
    }
}
