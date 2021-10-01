/* eslint no-undef: "off"*/
// Register User, donde 0 es el id.uid.
const db = firebase.firestore();

//guardamos la info de un nuevo user en firestore 
const saveUser = (infoUser) => {
    db.collection("users").doc(infoUser[0]).set({
        "email": infoUser[1],
        "nameuser": infoUser[2],
        "photouser": infoUser[3],
        "photocover": "https://firebasestorage.googleapis.com/v0/b/prueba-marga.appspot.com/o/covers%2Fcoverspace.jpg?alt=media&token=75538f66-b3f3-4836-b4f2-96c41c3b1704", //portada
        "description": "Pronto una genial descripción",
    })
}

//extrae todos los usuarios, categorias y Post
const getAllUsers = () => db.collection("users").get();
const getAllCategories = () => db.collection("categories").get();
const getAllPosts = () => db.collection("posts").orderBy('datePost', 'asc').get(); //add if where public posts === true|| where idUser 
const getPost = (id) => db.collection("posts").doc(id).get();
const getPostUser = (id) => db.collection("posts").where("idUser", "==", id).get();
const deletePostFs = (id) => db.collection('posts').doc(id).delete();
const datePost = () => firebase.firestore.Timestamp.now();
const savePost = (object) => db.collection('posts').add(object);
const updatePost = (id, object) => db.collection('posts').doc(id).update(object);
const updateProfileUser = (id, object) => db.collection('users').doc(id).update(object);
const getComments = (id) => db.collection("posts").where("idUser", "==", id).get();


export {
    savePost,
    saveUser,
    getAllUsers,
    getAllCategories,
    getAllPosts,
    db,
    deletePostFs,
    datePost,
    updatePost,
    getPost,
    getPostUser,
    getComments,
    updateProfileUser
}