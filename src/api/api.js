import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/firebase-auth'
import { FaCommentsDollar } from "react-icons/fa";



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
    },

    addUser: async (user) => {
        await db.collection('users').doc(user.id).set({
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }, {merge:true})
    },

    addProject: (user, project) => {
        const userDoc = db.collection('users').doc(user.id).collection('projects').add(project, {merge:true})
    },

    getProjects: async userId => {
        const userProjects = await db.collection('users').doc(userId).collection('projects').get()
        return userProjects.docs.map(doc => doc.data())
    }
    
}