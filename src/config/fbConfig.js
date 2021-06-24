import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyDcV2BKOK_ANc0cJJYo6Emr2IDT9eYfu-E",
        authDomain: "my-note-app-1.firebaseapp.com",
        projectId: "my-note-app-1",
        storageBucket: "my-note-app-1.appspot.com",
        messagingSenderId: "382176870811",
        appId: "1:382176870811:web:34571948e5e88c2496613e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;