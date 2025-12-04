importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  const firebaseConfig = {
  apiKey: "AIzaSyAWVllyvpOvS5mDs4IVnHtZXuTvDwGT0Z8",
  authDomain: "habibah-a1416.firebaseapp.com",
  projectId: "habibah-a1416",
  storageBucket: "habibah-a1416.firebasestorage.app",
  messagingSenderId: "166211722150",
  appId: "1:166211722150:web:229159150cb95dbd140d67",
  measurementId: "G-ZXTWQ13DCZ"
};

const messaging = firebase.messaging();

// Listener notifikasi ketika web ditutup / background
messaging.onBackgroundMessage(function (payload) {
  console.log("Background message received:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "icon.png"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
