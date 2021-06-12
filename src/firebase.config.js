import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCOmCBAoRI6wLFbw6kNDobVPZ-H4SystCk",
    authDomain: "mini-social-media-6660f.firebaseapp.com",
    projectId: "mini-social-media-6660f",
    storageBucket: "mini-social-media-6660f.appspot.com",
    messagingSenderId: "715487927611",
    appId: "1:715487927611:web:3853b410188db7e58fab1e",
    measurementId: "G-8301NHZFPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;