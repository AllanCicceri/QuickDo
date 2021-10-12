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
        // const avatar = await fetch(`https://graph.facebook.com/v2.8/${result.additionalUserInfo.id}?fields=picture.type(small)&access_token=${result.accessToken}`)
        return result
    },
    fbAvatar: async (faceInfo) => {
        const url = `https://graph.facebook.com/v2.8/${faceInfo.additionalUserInfo.profile.id}?fields=picture.type(small)&access_token=${faceInfo.credential.accessToken}`
        const result = await fetch(url)
        return  result
    }
}

// async function getUsers(db){
//     const usersCol = collection(db, 'users')
//     const userSnapshot = await getDocs(usersCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     return userList;
// }