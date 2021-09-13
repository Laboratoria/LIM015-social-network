export const initialization = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyArJDNhJXShcMtXkp_PsOCvJXz6MDygWvs",
    authDomain: "pets-lovers-561e8.firebaseapp.com",
    projectId: "pets-lovers-561e8",
    storageBucket: "pets-lovers-561e8.appspot.com",
    messagingSenderId: "392181922252",
    appId: "1:392181922252:web:1b63378406472e287c8569",
    measurementId: "G-2KVQK63381",
  };
  firebase.initializeApp(firebaseConfig);
};

initialization();

export const auth = firebase.auth();
