import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/firebase-auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCT2EFv1QZFDol2q4KK9bQEKTr_tlnFA4",
    authDomain: "quicktaksapp.firebaseapp.com",
    projectId: "quicktaksapp",
    storageBucket: "quicktaksapp.appspot.com",
    messagingSenderId: "565565399841",  
    appId: "1:565565399841:web:efa29e929e6955ca2e9460"
}

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()

export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        const result = await app.auth().signInWithPopup(provider)
        return result
    }    
}

// async function getUsers(db){
//     const usersCol = collection(db, 'users')
//     const userSnapshot = await getDocs(usersCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     return userList;
// }