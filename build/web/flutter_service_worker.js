'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "eff9bce956305d3e09a69074d21eeee4",
"index.html": "d80d11b19b21ac6ef6fa988838cff131",
"/": "d80d11b19b21ac6ef6fa988838cff131",
"main.dart.js": "0c5337bc22b2739f6be992457228ed79",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b48bf35b6cc68a0dc0f2f5e788c03888",
"assets/AssetManifest.json": "c94b1d3c7af7431242d27842a9c4a619",
"assets/NOTICES": "bd75d90ffcfed327896c9fe8b2fc99e7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e3f44894400e72b09e553293a1473e48",
"assets/fonts/MaterialIcons-Regular.otf": "214c01813fc865df5304340a3869108d",
"assets/assets/1.jpeg": "d155ca1e7e0c82d1a9615a4745a8055f",
"assets/assets/images/cat/1.jpeg": "5b6ec5680ed5ad0534c90f0eb7b59c79",
"assets/assets/images/cat/6.jpeg": "7c3c839fee58f190c3ef3ee3318b461c",
"assets/assets/images/cat/7.jpeg": "6edaa86d52321d264dbbf8d553033fc3",
"assets/assets/images/cat/8.jpeg": "5fe509e6c54e44ecb33273518de4638f",
"assets/assets/images/cat/4.jpeg": "364ce08faaeeb339751c8d235e07a192",
"assets/assets/images/cat/5.jpeg": "26acf414e5e1e7f12d457915bb780a8e",
"assets/assets/images/cat/2.jpeg": "859d2480cfdb8dc2ccd4e8e434be7034",
"assets/assets/images/cat/3.jpeg": "bb1a91df324c716acbf7d5c9507dc068",
"assets/assets/images/dog/10.jpeg": "da689fe5969ab30738d3bb4ca6c3e862",
"assets/assets/images/dog/1.jpeg": "d155ca1e7e0c82d1a9615a4745a8055f",
"assets/assets/images/dog/11.jpeg": "3330a59c5afdf4bbb523d6ba7522087d",
"assets/assets/images/dog/20.jpeg": "6db66702be6be3a2b6bec42919d2928b",
"assets/assets/images/dog/16.jpeg": "3f1b812c7fc78ba94dc29096615ac532",
"assets/assets/images/dog/6.jpeg": "f30bd4851bc4aa499ac161581c3153e5",
"assets/assets/images/dog/7.jpeg": "0d5c830ee2c1c4bcb2fedf099fe3cd7e",
"assets/assets/images/dog/17.jpeg": "df76e66fd81fe33b6d026844b419ed44",
"assets/assets/images/dog/8.jpeg": "4697820cba8245cc1b31801ebbdbb06a",
"assets/assets/images/dog/18.jpeg": "4ea919bff56f3e906f7e8791d58ac928",
"assets/assets/images/dog/4.jpeg": "a451dbcddcd69bcfc1daae24caf9c940",
"assets/assets/images/dog/14.jpeg": "a1287c106f243ddf0c359dd8dc4f06d9",
"assets/assets/images/dog/15.jpeg": "480f641945b2086b8720e060e68af71b",
"assets/assets/images/dog/5.jpeg": "95b0badfafba434c7b64a595cd73d823",
"assets/assets/images/dog/19.jpeg": "73d97179d45e85caacb3702d405a17a6",
"assets/assets/images/dog/9.jpeg": "00157337c39d0fc477dee476cf382f25",
"assets/assets/images/dog/2.jpeg": "3fe4a20448ed056871cc2f0a227ff0cf",
"assets/assets/images/dog/12.jpeg": "df930224627be75b8be01961468d469f",
"assets/assets/images/dog/13.jpeg": "62790bce6b379d9f221b4397bcbc1b6b",
"assets/assets/images/dog/3.jpeg": "3173299e450d8c7e1fed539c4545b7af",
"assets/assets/icons/moon.svg": "b5691d356866d48a9047f3dd557158e0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
