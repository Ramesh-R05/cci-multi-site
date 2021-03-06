import '@babel/polyfill';
import 'picturefill';

import React from 'react';
import ReactDOM from 'react-dom';
import batchedUpdatePlugin from 'fluxible-addons-react/batchedUpdatePlugin';
import { createElementWithContext } from 'fluxible-addons-react';
import fluxibleConfigPlugin from 'fluxible-plugin-context-config';
import app from './app';
import adConfig from './config/ads';

window.React = React; // For chrome dev tool support

app.plug(fluxibleConfigPlugin());
app.plug(batchedUpdatePlugin());

adConfig.init();

app.rehydrate(window.App, (err, context) => {
    if (err) {
        throw err;
    }

    const mountNode = document.getElementById('app');
    const userAgent = window.navigator.userAgent;
    ReactDOM.hydrate(createElementWithContext(context, { userAgent }), mountNode, () => {});
});
