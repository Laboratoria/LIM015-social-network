export const loginEmail = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// propiedad que usuario esta activo//
export const currentUser = () => firebase.auth().currentUser;
