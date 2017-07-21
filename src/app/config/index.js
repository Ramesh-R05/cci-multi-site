import logger from '../../logger';
import mergeWith from 'lodash.mergewith';
import path from 'path';

function load(f) {
    const absolute = path.resolve(`./app-${process.env.APP_KEY}/config`, f);
    const relative = path.relative('.', absolute);
    const loaded = require(absolute).default; // eslint-disable-line global-require, import/no-dynamic-require
    logger.info(`${relative} loaded`);
    return loaded;
}

const environment = (process.env.APP_ENV || process.env.NODE_ENV || 'local').toLowerCase();

const configApi = {
    get(configPath, defaultValue = '') {
        return configPath.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, this) || defaultValue;
    },
    isFeatureEnabled(feature) {
        return this.get(`features.${feature}.enabled`, false);
    }
};

const env = {
    APP_DEBUG: process.env.APP_DEBUG
};

const config = load('./config');

const environmentConfig = load(`./environments/${environment}`);

export default mergeWith(
    env,
    configApi,
    config,
    environmentConfig,
    (objValue, srcValue) => Array.isArray(objValue) ? srcValue : undefined
);
