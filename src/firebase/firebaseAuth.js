// Aqui todas las funciones que involucran FIREBASE AUTH

// Iniciar sesion con cuenta de Google
export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Cerrar Sesión
export const logout = () => firebase.auth().signOut();
