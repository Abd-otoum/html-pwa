const staticCarShop = "car-shop-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "./image/Toyota_Corolla.jpeg",
  "image/Honda_Civic.jpeg",
  "image/Ford_Mustang.webp",
  "image/Chevrolet_Camaro.jpeg",
  "image/BMW_Series_3.jpg",
  "image/Mercedes_Benz_C_Class.jpeg",
  "image/Tesla_Model_3.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCarShop).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })