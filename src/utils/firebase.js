import firebase from 'firebase'
// import admin from 'firebase-admin'

var firebaseConfig = {
    apiKey: "AIzaSyBT-SpdTAcpHyuZ9Nq18tIGmlPhtAAPTek",
    authDomain: "intergolive-2020.firebaseapp.com",
    databaseURL: "https://intergolive-2020.firebaseio.com",
    projectId: "intergolive-2020",
    storageBucket: "intergolive-2020.appspot.com",
    messagingSenderId: "298048867529",
    appId: "1:298048867529:web:048272d06987451d141118",
    measurementId: "G-EXVVTVQ3B4"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseFirestore = firebase.database();
// export const firebaseAuth = firebase.auth();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
