// Save post in firestore

const savePost = (username, userPost, date, userId, userPhoto, likes,url) =>
  firebase.firestore().collection("newPosts").add({ 
    username,
    userPost,
    date,
    userId,
    userPhoto,
    likes,
    url,
    });

 // Save user in firestore
 
 const saveUser = (user) =>
  firebase.firestore().collection("Users").add(user);
 

  
// Get Posts from Firestore to HTML on RealTime
 /* const onGetPosts = (callback) =>
  firebase.firestore().collection("newPosts").orderBy('date', 'desc').onSnapshot(callback);*/


const onGetPosts = (callback) =>
  firebase.firestore().collection("newPosts").orderBy('date', 'desc').onSnapshot((query) => {
    const data=[];
    query.forEach((doc) => {
      data.push({
        id:doc.id,
        ...doc.data()
      });
      callback(data);
    })
  })

// Get Users from firestore to HTML on Realtime

const onGetUsers = (callback) =>
  firebase.firestore().collection("Users").orderBy('userName', 'asc').onSnapshot((query) => {
    const data=[];
    query.forEach((doc) => {
      data.push({
        id:doc.id,
        ...doc.data()
      });
      callback(data);
    })
  })

 /* db.collection("cities").where("state", "==", "CA")
  .onSnapshot((querySnapshot) => {
      var cities = [];
      querySnapshot.forEach((doc) => {
          cities.push(doc.data().name);
      });
      console.log("Current cities in CA: ", cities.join(", "));
  });*/


   const infoData = (id, callback) => firebase.firestore().collection('Users').where('userId', '==', id).onSnapshot(posts => {
    console.log("prueba",posts.docs[0].id)
    return posts.docs.map(e => {
        //console.log(e.data().userId);
      const dataUser= {
            ProfileId: posts.docs[0].id,
            userId : e.data().userId,
            userName: e.data().userName,
            userLastname: e.data().userLastname,
            userPhoto: e.data().userPhoto,
            userEmail:e.data().userEmail,
            userPhone:e.data().userPhone,
            userCompany:e.data().userCompany,
            userLocation:e.data().userLocation,
            userDescription:e.data().userDescription,
      }
       console.log(dataUser);
       callback(dataUser)
        })
  })




// Delete published posts
const deletePosts = (id) =>
  firebase.firestore().collection("newPosts").doc(id).delete();

// Get Posts from Firestore to HTML for cancel post
const getPost = (id) => firebase.firestore().collection("newPosts").doc(id).get();

const updatePost = (id, updatedPost) =>
  firebase.firestore().collection("newPosts").doc(id).update(updatedPost);

// Update User Collection
const updateUser = (id, updatedUser) =>
  firebase.firestore().collection("Users").doc(id).update(updatedUser);

export { savePost, saveUser, onGetPosts, deletePosts, updatePost, getPost, onGetUsers, infoData, updateUser };
