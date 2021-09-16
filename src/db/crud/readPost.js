import { allCategories } from "./readCategory.js";
const readPost = () => {
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    const usersfb = () => {
        const objectUser = [];
        db.collection("users")
        .get()
        .then( response => {
            response.forEach(doc => {
                objectUser.push({
                    idUser: doc.id,
                    nameUser: doc.data().nameuser,
                    email: doc.data().email,
                    photoUser: doc.data().photouser,
                    photoCover: doc.data().photocover,
                    description: doc.data().description
                });
            })
        })
        return objectUser;
    } 
    
    const posts = () => {
        const objectPosts = [];
        const allUsers = usersfb();
        const allCategoriesCourses = allCategories();
        db.collection("posts")
        .get()
        .then( response => {
            response.forEach( doc => {
                const userprueba =  allUsers.find(element => element.idUser === doc.data().idUser)
                const categoryprueba = allCategoriesCourses.find(element => element.idCategory === doc.data().category)
                objectPosts.push({
                    idPost: doc.id,
                    idUser: doc.data().idUser,
                    nameUser: userprueba.nameUser,
                    photoUser: userprueba.photoUser,
                    contentPost: doc.data().contentPost,
                    datePost: doc.data().datePost,
                    nameImage: doc.data().nameImage,
                    totalComments: doc.data().totalComments,
                    totalLikes: doc.data().totalLikes,
                    image: doc.data().image,
                    idCategory: doc.data().idCategory,
                    nameCategory: categoryprueba.nameCategory,
                })
            });
        });
        return objectPosts;
    }
    console.log(posts())
}

export { readPost }