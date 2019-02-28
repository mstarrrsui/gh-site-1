importScripts("precache-manifest.151da07938fbfb8146ef98beda011bf4.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'images',
    plugins: [new workbox.expiration.Plugin({ maxEntries: 10, purgeOnQuotaError: false })]
  }),
  'GET'
);

