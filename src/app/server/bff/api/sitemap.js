import makeRequest from '../../makeRequest';
import config from '../../../config';
import logger from '../../../../logger';

export default function getSitemap(path) {
    return makeRequest(`${config.services.remote.sitemap}/${path}`)
        .then(res => res)
        .catch(err => {
            logger.error({ msg: 'getSitemap: sitemap error', err });

            return {};
        });
}
