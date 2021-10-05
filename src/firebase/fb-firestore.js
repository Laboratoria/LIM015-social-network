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
  


  const infoData = (id) => firebase.firestore().collection('Users').where('userId', '==', id).get().then(posts => {
    console.log(posts)
    return posts.docs.map(e => {
        //console.log(e.data().userId);
      const dataUser= {
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
       //console.log(dataUser);
    return dataUser
        })
  })




// Delete published posts
const deletePosts = (id) =>
  firebase.firestore().collection("newPosts").doc(id).delete();

// Get Posts from Firestore to HTML for cancel post
const getPost = (id) => firebase.firestore().collection("newPosts").doc(id).get();

const updatePost = (id, updatedPost) =>
  firebase.firestore().collection("newPosts").doc(id).update(updatedPost);

export { savePost, saveUser, onGetPosts, deletePosts, updatePost, getPost, onGetUsers, infoData };
