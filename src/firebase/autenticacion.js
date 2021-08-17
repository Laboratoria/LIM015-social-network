// autorizacion para registro de firebase

export const userSignUp = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);

export const userSignIn = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// propiedad que usuario esta activo
export const currentUser = () => firebase.auth().currentUser;

export const verifyEmail = () => (
  firebase.auth().currentUser.sendEmailVerification()
);

export const changePasword = (email) => (
  firebase.auth().sendPasswordResetEmail(email)
);

export const leave = () => (
  firebase.auth().signOut()
);
