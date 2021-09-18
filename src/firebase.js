/* eslint-disable no-undef */
const resetPassword = (emailLogin) => firebase.auth().sendPasswordResetEmail(emailLogin); //CALLBACK

const loginGoogle = () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();//function of google
    const loginwithGoogle = firebase.auth().signInWithPopup(providerGoogle);
    return loginwithGoogle;
}

export {
    resetPassword,
    loginGoogle
}