import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createElementWithContext } from 'fluxible-addons-react';
import app from './app';

const dehydratedState = window.App;

window.React = React; // For chrome dev tool support

if (process.env.DEV_BUILD) {
    /* eslint-disable */
    require(`../app-${process.env.APP_KEY}/breakpoints`);
    /* eslint-enable */
}

app.rehydrate(dehydratedState, (err, context) => {
    if (err) {
        throw err;
    }
    const mountNode = document.getElementById('app');
    const userAgent = window.navigator.userAgent;

    ReactDOM.render(createElementWithContext(context, { userAgent }), mountNode, () => {});
});
