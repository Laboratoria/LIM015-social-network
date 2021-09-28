/* eslint no-undef: "off"*/
// Register User, donde 0 es el id.uid.
const db = firebase.firestore();

//guardamos la info de un nuevo user en firestore 
const saveUser = (infoUser) => {
    db.collection("users").doc(infoUser[0]).set({
        "email": infoUser[1],
        "nameuser": infoUser[2],
        "photouser": infoUser[3],
        "photocover": "default.png", //portada
        "description": "Cuéntanos un poco sobre ti",
    })
}

//extrae todos los usuarios, categorias y Post
const getAllUsers = () => db.collection("users").get();
const getAllCategories = () => db.collection("categories").get();
const getAllPosts = () => db.collection("posts").orderBy('datePost', 'asc').get();//add if where public posts === true|| where idUser 
const getPost = (id) => db.collection("posts").doc(id).get();
const deletePostFs = (id) => db.collection('posts').doc(id).delete();
const datePost = () => firebase.firestore.Timestamp.now();
const savePost = (object) => db.collection('posts').add(object);
const updatePost = (id, object) => firebase.firestore().collection('posts').doc(id).update(object);
export { savePost, saveUser, getAllUsers, getAllCategories, getAllPosts, db, deletePostFs, datePost, updatePost, getPost }