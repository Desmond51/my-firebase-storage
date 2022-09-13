import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDc9atY6-eHd0vZM4nqCg6H6k4W2FDCQQg",
    authDomain: "fir-storage-3bfb2.firebaseapp.com",
    projectId: "fir-storage-3bfb2",
    storageBucket: "fir-storage-3bfb2.appspot.com",
    messagingSenderId: "781882955995",
    appId: "1:781882955995:web:ec8a762e5fd8a93a29d4fe"
  };
  
  // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const storage = getStorage(app)
   export {app, storage}
  