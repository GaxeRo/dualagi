importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAWVllyvpOvS5mDs4IVnHtZXuTvDwGT0Z8",
  authDomain: "habibah-a1416.firebaseapp.com",
  projectId: "habibah-a1416",
  storageBucket: "habibah-a1416.firebasestorage.app",
  messagingSenderId: "166211722150",
  appId: "1:166211722150:web:229159150cb95dbd140d67",
  measurementId: "G-ZXTWQ13DCZ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "icon.png"
  });
});
