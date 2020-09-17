/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

/*
  dependencies
*/

import { precacheAndRoute } from 'workbox-precaching';


registerRoute(
    ({ url }) => url.href.startsWith('http'),

    new StaleWhileRevalidate()
);

/*
  config
*/

precacheAndRoute(self.__WB_MANIFEST);