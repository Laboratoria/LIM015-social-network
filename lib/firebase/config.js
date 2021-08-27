const firebaseConfig = {
  apiKey: 'AIzaSyAuqqnOXp8VUKK0X3yloNLt0q21q2-ehMw',
  authDomain: 'lab-petstagram.firebaseapp.com',
  projectId: 'lab-petstagram',
  storageBucket: 'lab-petstagram.appspot.com',
  messagingSenderId: '267857543489',
  appId: '1:267857543489:web:b3a0d392e0c9ea308421c0',
  measurementId: 'G-HGL074B8LZ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const signOut = auth.signOut();
/* export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider(); */
