'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1c7683458418ef9f389ae55788e6b65f",
"assets/AssetManifest.bin.json": "4c937d55f46c5ac00ee762d04cd9616c",
"assets/AssetManifest.json": "9bb5a8edd485413bbdc94e17f708fe13",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a4cd815c554f904fe50ed8d24d2e926f",
"assets/NOTICES": "dc629cafc67acfb132057298db15de6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"efiWeb/.git/COMMIT_EDITMSG": "7c897c2167f77748644493434066ae04",
"efiWeb/.git/config": "eaea72b45c57ba70d759a40f35bbd033",
"efiWeb/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"efiWeb/.git/FETCH_HEAD": "c6de4540bc192c0df6d7e355e3c9aa3d",
"efiWeb/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"efiWeb/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"efiWeb/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"efiWeb/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"efiWeb/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"efiWeb/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"efiWeb/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"efiWeb/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"efiWeb/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"efiWeb/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"efiWeb/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"efiWeb/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"efiWeb/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"efiWeb/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"efiWeb/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"efiWeb/.git/index": "c218b19ffb28ed812fbb0c35b2f238cf",
"efiWeb/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"efiWeb/.git/logs/HEAD": "4fc94ca722bf1ce2bfe5bab7fa362196",
"efiWeb/.git/logs/refs/heads/main": "4fc94ca722bf1ce2bfe5bab7fa362196",
"efiWeb/.git/logs/refs/remotes/origin/HEAD": "9d3fe975c5daa838285164a231e3ca03",
"efiWeb/.git/logs/refs/remotes/origin/main": "decb55e7af8066b0ae16f69134fc536a",
"efiWeb/.git/objects/01/fe301fde37e6d91ecf8b0c9c3e4e0211b00b3e": "9bd41a3d8e20b6f869a8b21614c9f0a7",
"efiWeb/.git/objects/02/3f94cc1015263d54eac0ce763b953c093eabf9": "649b0ced1983bffaa004f89ccbc7fa1a",
"efiWeb/.git/objects/05/a17f0f5fd5591416ba53ac87e6a1a89b95ab2d": "cb18afe262a7343e177bc4e001203eca",
"efiWeb/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"efiWeb/.git/objects/08/f667fba01ac384eac456f037b526d025f81902": "502537804100a459261e427e6df79e42",
"efiWeb/.git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
"efiWeb/.git/objects/0f/23d56ecfe2817f597c028fe5ecacfdfd53b8d0": "0e3b878ca50f38c1a570ccf208927738",
"efiWeb/.git/objects/0f/586af66835fba22420e88acefd18e59b6ef9be": "7b18493ed7d331b3dd239f393f7aa05c",
"efiWeb/.git/objects/13/7136a3108fd54286d44932733b303f15824c3b": "6a0330c61417e1d005ab622400a9f088",
"efiWeb/.git/objects/14/c1bbf2da48f949e3e184dff537f0a60b4605a3": "487f244679c5bcfe0bb5a72cefb2feb4",
"efiWeb/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"efiWeb/.git/objects/1c/e9e5df9b35ecde14998eb2bc5a9a71c5979f49": "aca974d0462206df158b66baa6ef5324",
"efiWeb/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"efiWeb/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"efiWeb/.git/objects/20/e816990e70dc014d2257c36a83d348f85c73f4": "d24d375007ba8dc1459bcc3ee326ce2c",
"efiWeb/.git/objects/23/33ece61b269dc7e3b9621eed4630d2f63bdc8e": "fc59786997e7098b05e18636610dbbbd",
"efiWeb/.git/objects/23/a27425627102547fcfa6bb52630715aa2ee332": "b9f4900ec4fe3f734595ce048142badd",
"efiWeb/.git/objects/3c/724cec21a9e07ed1423028ae1bf490668596d2": "dce9ed8de915bd1c30e941fd954e4f1f",
"efiWeb/.git/objects/3d/a74d3c89aad25742ca6c321f519218654bc7cb": "745308c8a9b7f59fa208836e6e58bfe0",
"efiWeb/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"efiWeb/.git/objects/46/b87e3c957a436b5df8bcef3dbbff825ccd1825": "77cf131f5a8607f4bf5024c3a4502a05",
"efiWeb/.git/objects/49/d8828d5e69ce63ef9a745416c793bb78c2835d": "a66d8a412dbde6da0c18684af86347e5",
"efiWeb/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"efiWeb/.git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
"efiWeb/.git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
"efiWeb/.git/objects/60/bb68cf52e08da18952c9d0691929c45c1a3fb5": "976304d6e248e707cf36c09c1d27a0f2",
"efiWeb/.git/objects/63/6612f7d4a924dc450ab38c2686d61dc52fc754": "5692f50400690f5982967b4e66d57e3f",
"efiWeb/.git/objects/6b/bd72844241f3a8d3323c14797c9c78d1f5e8f7": "ea025df6c5ef04b17bbe9e5b689826ad",
"efiWeb/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"efiWeb/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"efiWeb/.git/objects/6f/b17fb5f1178269b11f0f87345fc2ad1588e7fc": "fb7e157531c9d2406d8f82ddc8e9b722",
"efiWeb/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"efiWeb/.git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
"efiWeb/.git/objects/74/7d2bdfedba1d013d258e9c813d769cf50878c7": "d471144563ecd1dbd442328f98c78a25",
"efiWeb/.git/objects/76/27de5e338fb4f7a549991343e2430e3a5f412c": "f240659471978ba6364e5a41c00de4de",
"efiWeb/.git/objects/77/203e3f848f47de069877eb4206f7bb7a632b75": "d3dc61af76b6cfa3583b4d105d635ad0",
"efiWeb/.git/objects/77/7cecc553bc9643ad758e6c3d79064b8df820ec": "b4d6e3b20b0db45395e848f2a425fc83",
"efiWeb/.git/objects/7c/8c9c7cf281739027931f8d6f401929a66dad34": "02e4d45ed5ea5891b448f1ab96dd72c8",
"efiWeb/.git/objects/7f/55b0531892bcece9708b67327e5e500edb2fb0": "17f67a0a98f5d40041736b0735638738",
"efiWeb/.git/objects/85/15a41eea6fea6e060ebc0d63ff691b37ed35d5": "57a34ae4b48b0b728f6915164f626227",
"efiWeb/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"efiWeb/.git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
"efiWeb/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"efiWeb/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"efiWeb/.git/objects/91/46bd77fa7efbad6a5f4b248fb72e3aefccb0f6": "aa0d183310d91b51f2d3fcf77168cde1",
"efiWeb/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"efiWeb/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"efiWeb/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"efiWeb/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"efiWeb/.git/objects/b7/c6d1241cf34110b8dee39b4ce26ffd4aec503e": "d04cb66efb9b347071b38518a5de8ebe",
"efiWeb/.git/objects/b8/1d1df9ea937aa4a305e3f972a255ddeae7f4d2": "1cea739738cbdf72a8306d8a4b302bf6",
"efiWeb/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"efiWeb/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"efiWeb/.git/objects/c0/122df16b433e9870f2b45b9db5001e77ee9fb4": "fd34eb5dbc7886d13b66744a3984cd1f",
"efiWeb/.git/objects/c1/88e1665c27ea58bdbf70364560a87fc5544e88": "135ca10a7e03b7cb23489e08c1b2b14b",
"efiWeb/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"efiWeb/.git/objects/ca/9c323efd8d91040ad05fe4aa01edfb6dd8a78a": "b67b1944be76bfa1735dd3294155cfc9",
"efiWeb/.git/objects/d2/d04de50d1111cf6f9b08c5325571692632bd3b": "1c159ddf23519039d99f9f1ce68147dd",
"efiWeb/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"efiWeb/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"efiWeb/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"efiWeb/.git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
"efiWeb/.git/objects/e6/9feabd447d95a59118a3a535b8e8e1116897ae": "57cf1f311ccca5834592a4b7fb741b8e",
"efiWeb/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"efiWeb/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"efiWeb/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"efiWeb/.git/objects/f5/1311ba14dacf6e5492694e56163bd61a4e7398": "8adf59c00f88fc1a0af1dcaac1519052",
"efiWeb/.git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
"efiWeb/.git/ORIG_HEAD": "82fbc2154c0151172be8ecd00e02d31f",
"efiWeb/.git/refs/heads/main": "1f2c09246942f1b8817dca05dde458bd",
"efiWeb/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"efiWeb/.git/refs/remotes/origin/main": "1f2c09246942f1b8817dca05dde458bd",
"efiWeb/assets/AssetManifest.bin": "1c7683458418ef9f389ae55788e6b65f",
"efiWeb/assets/AssetManifest.bin.json": "4c937d55f46c5ac00ee762d04cd9616c",
"efiWeb/assets/AssetManifest.json": "9bb5a8edd485413bbdc94e17f708fe13",
"efiWeb/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"efiWeb/assets/fonts/MaterialIcons-Regular.otf": "a4cd815c554f904fe50ed8d24d2e926f",
"efiWeb/assets/NOTICES": "dc629cafc67acfb132057298db15de6f",
"efiWeb/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"efiWeb/assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"efiWeb/assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"efiWeb/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"efiWeb/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"efiWeb/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"efiWeb/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"efiWeb/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"efiWeb/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"efiWeb/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"efiWeb/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"efiWeb/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"efiWeb/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"efiWeb/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"efiWeb/CNAME": "f66858d9660e441447869f3b8180f645",
"efiWeb/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"efiWeb/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"efiWeb/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"efiWeb/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"efiWeb/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"efiWeb/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"efiWeb/index.html": "899d01fa7a914a7baacde035af15e5d9",
"efiWeb/main.dart.js": "e83fde11a26152e5aaff8f6622a361ac",
"efiWeb/manifest.json": "0c2bcb30cfbb986202b05891f6c1dc47",
"efiWeb/version.json": "8b41c867fbb317e2649f37d7a2e42bf0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4cf41aa95d730d639f30bf2612db14c1",
"/": "4cf41aa95d730d639f30bf2612db14c1",
"main.dart.js": "a3cdde69706436f342f4ad6b167606f9",
"manifest.json": "0c2bcb30cfbb986202b05891f6c1dc47",
"version.json": "8b41c867fbb317e2649f37d7a2e42bf0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
