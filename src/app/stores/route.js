import { RouteStore } from 'fluxible-router';
// eslint-disable-next-line import/no-dynamic-require
const routes = require(`../../app-${process.env.APP_KEY}/config/routes`).default;

export default RouteStore.withStaticRoutes(routes);
