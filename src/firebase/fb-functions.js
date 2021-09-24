// SignIn With Email and Password Function
const loginEmail = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// Register With Email and Password Function
const registerEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

// SignIn With Google
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Email verification 
const emailVerification = () => {
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
}

//Actualizar profile 
const updateProfile = (nombre) => {
  const user = firebase.auth().currentUser;
  return user.updateProfile({
    displayName: `${nombre}`,
    photoURL: './img/usuario.png',
  });
};

//Actualizar foto
//const UserPhoto = (photoURL) => firebase.auth().currentUser
//  .updateProfile({ photoURL });

// SignOuts
const signOut = () => firebase.auth().signOut();

export { loginEmail, registerEmail, loginGoogle, signOut, emailVerification, updateProfile};
