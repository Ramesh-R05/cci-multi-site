import filter from 'lodash/collection/filter';
import get from 'lodash/object/get';
import logger from '../../../../logger';
import API from '../api';

function processModules(moduleArgs, modules) {
    const moduleList = {};

    moduleArgs.forEach(arg => {
        const moduleFilteredConfig = filter(modules.data, { moduleName: arg });
        const moduleConfig = moduleFilteredConfig[0];

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
            moduleList[arg] = moduleFilteredConfig.map(module => {
                const originUrl = `/${module.url.split('/').pop()}` || '';
                const url = originUrl === '/magcover' ? '' : originUrl;

                let isSiteMagCover = !!module.moduleTitle;
                const newModuleObj = { ...module };

                if (newModuleObj.moduleTitle === 'null') {
                    delete newModuleObj.moduleTitle;
                }

                if (moduleFilteredConfig.length === 1) {
                    isSiteMagCover = true;
                }

                return { ...newModuleObj, isSiteMagCover, url };
            });
        } else {
            moduleList[arg] = get(moduleConfig, 'moduleManualContent.data', []);
        }
    });

    return moduleList;
}

export default async function pageModules(req, res, next) {
    try {
        req.data = {};
        const section = (req.query && req.query.section) || 'home';
        req.data = await API.getModules(
            ['headernavigation', 'hamburgernavigation', 'footer', 'mustread', 'promoted', 'hero', `${section}theme`, 'magcover', `${section}hero`],
            processModules
        );
    } catch (error) {
        logger.error(error);
    }

    next();
}
