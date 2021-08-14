const auth = firebase.auth();
// Login
export const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const userInformation = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
    };
    localStorage.setItem('user', JSON.stringify(userInformation));
    return userCredential;
  } catch (error) {
    throw Error(error.message);
  }
};
// Email Verification
export const sendEmailVerification = async () => {
  try {
    const sendingEmail = await auth.currentUser.sendEmailVerification();
    return sendingEmail;
  } catch (error) {
    throw Error(error.message);
  }
};
// Tracking User conexion
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(' User signed in ');
    const uid = user.uid;
    console.log(uid);
  } else {
    console.log('User signed out ');
  }
});
// Tracking User conexion
// export const trackingUser = async () => {
//   try {
//     const tracking = await auth.onAuthStateChanged((user)
//     const uid = user.uid
//     console.log(uid);
//     return user;
//   } catch (error) {
//     throw Error = error.message;
//   }
// }
// signup
export const signUp = async (email, password) => {
  try {
    const userCredentialforSignUp = await auth.createUserWithEmailAndPassword(email, password);
    const userSignUpInfo = {
      name: userCredentialforSignUp.user.displayName,
      email: userCredentialforSignUp.user.email,
      photoURL: userCredentialforSignUp.user.photoURL,
    };
    localStorage.setItem('user', JSON.stringify(userSignUpInfo));
    return userCredentialforSignUp;
  } catch (error) {
    throw Error(error.message);
  }
};

// Google Authentication
export const googleAuth = async () => {
  try {
    const provider = await new firebase.auth.GoogleAuthProvider();
    const popUpGoogleAuth = await auth.signInWithPopup(provider);
    const googleUserInfo = {
      name: popUpGoogleAuth.user.displayName,
      email: popUpGoogleAuth.user.email,
      photoURL: popUpGoogleAuth.user.photoURL,
    };
    localStorage.setItem('user', JSON.stringify(googleUserInfo));
    return popUpGoogleAuth;
  } catch (error) {
    throw Error(error.message);
  }
};

// Facebook Authentication
export const facebookAuth = async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const popUpFbAuth = auth.signInWithPopup(provider);
    return popUpFbAuth;
  } catch (error) {
    throw Error(error.message);
  }
};
// Log out
export const logOutPage = async () => {
  await auth.signOut();
};
