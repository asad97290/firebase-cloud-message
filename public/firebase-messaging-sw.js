 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
  apiKey: "AIzaSyBXz_Yqt6c8dVBjp6at5EG1A_pm00r4OWI",
  authDomain: "akru-inc.firebaseapp.com",
  projectId: "akru-inc",
  storageBucket: "akru-inc.appspot.com",
  messagingSenderId: "670600293600",
  appId: "1:670600293600:web:c674bbfc8dca85e4c0f485",
  measurementId: "G-WMJLSSSWKX"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };
   console.log("message:=>",{notificationTitle,notificationOptions})
   
  });