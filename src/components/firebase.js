import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC5OZWjTGX5ZpyZVVaTsXf3MOBWejKgY30",
    authDomain: "react-slack-clone-15f87.firebaseapp.com",
    databaseURL: "https://react-slack-clone-15f87.firebaseio.com",
    projectId: "react-slack-clone-15f87",
    storageBucket: "react-slack-clone-15f87.appspot.com",
    messagingSenderId: "536589357291"
};
firebase.initializeApp(config);


export default firebase;