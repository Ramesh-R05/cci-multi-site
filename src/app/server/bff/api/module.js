import get from 'lodash/object/get';
import find from 'lodash/collection/find';
import makeRequest from '../../makeRequest';
import config from '../../../config';
import logger from '../../../../logger';

export default async function getModules(...args) {
    try {
        if (!args.length) return {};

        const moduleNames = args.join(',');
        const modules = await makeRequest(`${config.services.remote.module}/${moduleNames}`);
        const moduleList = {};

        args.forEach(arg => {
            const moduleConfig = find(modules.data, { moduleName: arg });
            if (arg === 'footer') {
                moduleList[arg] = moduleConfig || {};
            } else if (arg === 'promoted') {
                moduleList[arg] = {};
                moduleList[arg].items = get(moduleConfig, 'moduleManualContent.data', []);
                moduleList[arg].title = get(moduleConfig, 'moduleTitle', '');
            } else if (arg && arg.indexOf('theme') >= 0) {
                moduleList.theme = moduleConfig;
            } else if (arg === 'hero') {
                moduleList[arg] = get(moduleConfig, 'moduleManualContent.data[0]', null);
            } else if (arg === 'magcover') {
                moduleList[arg] = moduleConfig;
            } else {
                moduleList[arg] = get(moduleConfig, 'moduleManualContent.data', []);
            }
        });

        return moduleList;
    } catch (error) {
        logger.error(error);
        return {};
    }
}
