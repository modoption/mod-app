importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDXY3ZTUpPAi2iL3Y_XvQReqneomTbYbd0",
  authDomain: "mod-options-lmql3k.firebaseapp.com",
  projectId: "mod-options-lmql3k",
  storageBucket: "mod-options-lmql3k.firebasestorage.app",
  messagingSenderId: "764195037121",
  appId: "1:764195037121:web:2cae80f08af37921f3d940"
});

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  var title = payload.notification.title;
  var body = payload.notification.body;
  self.registration.showNotification(title, {
    body: body,
    icon: '/mod-app/icon-192.png',
    vibrate: [200, 100, 200]
  });
});
