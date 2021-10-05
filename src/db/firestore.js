/* eslint no-undef: "off"*/
// Register User, donde 0 es el id.uid.
/* const db = firebase.firestore(); */

//guardamos la info de un nuevo user en firestore 
const saveUser = (infoUser) => {
    firebase.firestore().collection("users").doc(infoUser[0]).set({
        "email": infoUser[1],
        "nameuser": infoUser[2],
        "photouser": infoUser[3],
        "photocover": "https://firebasestorage.googleapis.com/v0/b/prueba-marga.appspot.com/o/covers%2Fcoverspace.jpg?alt=media&token=75538f66-b3f3-4836-b4f2-96c41c3b1704", //portada
        "description": "Pronto una genial descripción",
    })
}

//extrae todos los usuarios, categorias y Post
const getAllUsers = () => firebase.firestore().collection("users").get();
const getUser = (id) => firebase.firestore().collection("users").doc(id).get();
const getAllCategories = () => firebase.firestore().collection("categories").get();
const getCategory = (id) =>firebase.firestore().collection("categories").doc(id).get(); //obtiene el id
const getAllPosts = () => firebase.firestore().collection("posts").orderBy('datePost', 'asc').get();
const getPost = (id) => firebase.firestore().collection("posts").doc(id).get(); 
const getPostUser = (id) => firebase.firestore().collection("posts").where("idUser", "==", id).get();
const deletePostFs = (id) => firebase.firestore().collection('posts').doc(id).delete();
const datePost = () => firebase.firestore.Timestamp.now();
const getTopTenUsers = () => firebase.firestore().collection("users").limit(7).get()
const savePost = (object) => firebase.firestore().collection('posts').add(object);
const updatePost = (id, object) => firebase.firestore().collection('posts').doc(id).update(object);
const updateProfileUser = (id, object) => firebase.firestore().collection('users').doc(id).update(object);
const updateCategory = (id, object) => firebase.firestore().collection('categories').doc(id).update(object);
const getComments = (id) => firebase.firestore().collection("posts").where("idUser", "==", id).get();
const getPostByCategory = (id) => firebase.firestore().collection("posts").where("idCategory", "==" ,id).get();

export {
    savePost,
    saveUser,
    getAllUsers,
    getAllCategories,
    getAllPosts, 
  /*   db, */ 
    deletePostFs, 
    datePost, 
    updatePost, 
    getPost, 
    getPostUser,
    updateProfileUser,
    getUser,
    getCategory,
    getComments,
    updateCategory,
    getPostByCategory,
    getTopTenUsers
}