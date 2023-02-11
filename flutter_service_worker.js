'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8f75b60de04bc9587a73873bf3889a9a",
"assets/assets/images/bevvy.png": "cc08e274cb0b0a8a362d0f85b0c4b386",
"assets/assets/images/cashmama.png": "da6206f17bf36fc635eb8c6b25d1ce3d",
"assets/assets/images/profile_photo.png": "c197704fd5ec4af4bfdb38a737adafa0",
"assets/assets/images/profile_rectangle.png": "5c49ae2ddba951d2e58c60ab6b9b9d75",
"assets/assets/images/projectBarko.png": "23bc696efe67e35f8bddd06868583445",
"assets/assets/images/projectMore.png": "a8e7a1d6540dd4c39b6d61e9deaa1363",
"assets/assets/photos/1.png": "5934f99a887045c9a45e0033c8a3ac5a",
"assets/assets/photos/2.png": "a445f036ea2a40b3a31166354c4d59fe",
"assets/assets/photos/3.png": "71a85dac945e704c3ee82305f177cf7c",
"assets/assets/photos/4.png": "53fde97bfec36f88681a0cfbb1488e9c",
"assets/assets/photos/5.png": "ab3c07bd7a7e42333de7ce44dc71a79e",
"assets/assets/photos/6.png": "ebaa950538ff18755bb4b62e8999af37",
"assets/assets/photos/7.png": "6b5e18e32b0dca3cb2dc67bc86a2e2ef",
"assets/assets/photos/8.png": "84a27e4a349a9a80b2765062e527446d",
"assets/assets/photos/9.png": "617e99dcb3b4004a00f650c91875cd27",
"assets/assets/svgs/designStrategy.svg": "f1b06904afe578e2ea372a066d845fa6",
"assets/assets/svgs/linkedinIcon.svg": "509d8e175d390d799da37613d4f274ae",
"assets/assets/svgs/mailIcon.svg": "55e6be6fc0dc5138d2398b0215238174",
"assets/assets/svgs/ms_logo.svg": "e0432ba8ab9bafbdae91d7776f7ebeb1",
"assets/assets/svgs/tIcon.svg": "0efa5d2c4f711d37e256fc8c8bafe6d3",
"assets/assets/svgs/uxDesign.svg": "b8536784baf9add6e0852f9c2e68aa29",
"assets/assets/svgs/websiteDesign.svg": "633e3a09c096c89cb0c4e08da67bbd14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "14682a2699289ef6e9365dd0c30b1507",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "06d2f94d6cd464b7957d709b67221b58",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "c32f4d4c6291e133ca0b9602f7bd61e4",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "be2dbe34eabd7866b0e42f9512656112",
"icons/Icon-512.png": "7b3b6b7f486a9b3f2af51f5edc1ac40f",
"icons/Icon-maskable-192.png": "be2dbe34eabd7866b0e42f9512656112",
"icons/Icon-maskable-512.png": "7b3b6b7f486a9b3f2af51f5edc1ac40f",
"index.html": "e9c5f374c8b7d7600e5eb39f62c7ccd7",
"/": "e9c5f374c8b7d7600e5eb39f62c7ccd7",
"main.dart.js": "1f69d6037647797116680eaf393a3df0",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"version.json": "980547175e325fe622a3362b84d55b6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
