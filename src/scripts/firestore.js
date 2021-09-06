// (1) User data !
export const userData = (user) => {
  const db = firebase.firestore();
  let Photo;
  let Name;
  if (user.photoURL != null && user.displayName != null) {
    Photo = user.photoURL;
    Name = user.displayName;
  } else {
    Photo = './images/default-avatar.jpg';
    Name = 'user.name';
  }
  return db.collection('Skyy_Users').doc(user.uid).set({
    username: Name,
    email: user.email,
    photo: Photo,
    photoCover: Photo,
    aboutme: 'add about me',
  });
};

// (2) get user data
export const getUserData = (userId) => firebase.firestore().collection('Skyy_Users').doc(userId).get();

// to add  to firestore
