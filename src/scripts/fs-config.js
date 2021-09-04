export default () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDCh_5n6yEuTLnj9ETpIZTzxYlSZFoBQtw',
    authDomain: 'skyy-4de1f.firebaseapp.com',
    projectId: 'skyy-4de1f',
    storageBucket: 'skyy-4de1f.appspot.com',
    messagingSenderId: '841824653653',
    appId: '1:841824653653:web:056db4bc0649bd690bdfdc',
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};

export const auth = firebase.auth();
