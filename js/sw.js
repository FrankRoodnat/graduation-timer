// install service worker
self.addEventListener("install", evt => {
  console.log("service worker has been installed");
});

// activate event
self.addEventListener("activate", evt => {
  console.log("service worker has been activated");
});

this.addEventListener("fetch", function (event) { });
