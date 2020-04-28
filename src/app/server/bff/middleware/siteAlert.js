import API from '../api';
import logger from '../../../../logger';

export default async function siteAlert(req, res, next) {
    try {
        const homepageData = await API.getEntity('homepage', { throwOnFailedRequest: false });

        const {
            siteAlertTextColour,
            siteAlertBackgroundColour,
            siteAlertBackgroundImage,
            siteAlertButtonColour,
            siteAlertPrimaryText,
            siteAlertSecondaryText,
            siteAlertButtonLink,
            enableSiteAlert
        } = homepageData;

        req.data.siteAlert = {
            styles: {
                textColor: siteAlertTextColour,
                backgroundColor: siteAlertBackgroundColour,
                backgroundImage: siteAlertBackgroundImage && siteAlertBackgroundImage.url ? siteAlertBackgroundImage.url : '',
                buttonColor: siteAlertButtonColour
            },
            primaryText: siteAlertPrimaryText,
            secondaryText: siteAlertSecondaryText,
            link: siteAlertButtonLink,
            isEnabled: enableSiteAlert
        };
        next();
    } catch (error) {
        logger.error(error);
        next(error);
    }
}
