const addUser = (userName, email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // user.displayName = userName;
    return user;
  }).catch((error) => {
    console.log(password);
    const errorCode = error.code;
    const errorMessage = error.message;
    return [errorMessage, errorCode];
  });

export default addUser;
