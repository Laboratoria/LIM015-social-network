import { auth } from '../firebase/fb-config.js'

// SignIn With Email and Password Function 
const loginEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Register With Email and Password Function 
const registerEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// SignIn With Google 
const loginGoogle =  () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return  auth.signInWithPopup(provider)
}

// SignOut
const signOut = () => auth.signOut();

export {
    loginEmail,
    registerEmail, 
    loginGoogle,
    signOut}; 