import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBHNNGXEHfAUZ1_XAu3KNziOnI_fY9a3E",
  authDomain: "ecommerce-website-15a6c.firebaseapp.com",
  projectId: "ecommerce-website-15a6c",
  storageBucket: "ecommerce-website-15a6c.appspot.com",
  messagingSenderId: "115867910846",
  appId: "1:115867910846:web:f97fdd7813e2d4c2e194ef",
  measurementId: "G-FYE4PTQ4PR"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


