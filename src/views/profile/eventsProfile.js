import { getPostUser} from "../../db/firestore.js";
import { loadViewPost } from "../timeline/viewPosts.js";
const loadTimelineUser = async () => {
    const objectPosts = [];
    const idUserProfile = window.localStorage.getItem('idUserProfile');
    const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21
    const infoUserProfile = allUsers.find(element => element.idUser === idUserProfile);
    const allCategoriesCourses = JSON.parse(window.localStorage.getItem('allCategories'));
    const containerPostsUser = document.querySelector('#container-posts-user')
    await getPostUser(idUserProfile).then(response => {
        response.forEach(doc => {
            const categoryprueba = allCategoriesCourses.find(element => element.idCategory == doc.data().idCategory);
            objectPosts.push({
                idPost: doc.id,
                idUser: doc.data().idUser,
                nameUser: infoUserProfile.nameUser,
                photoUser: infoUserProfile.photoUser,
                contentPost: doc.data().contentPost,
                datePost: doc.data().datePost.toDate().toDateString(),
                nameImage: doc.data().nameImage,
                arrLikes: doc.data().arrLikes,
                publicPosts : doc.data().publicPosts,
                totalComments: doc.data().totalComents,
                image: doc.data().image,
                idCategory: doc.data().idCategory,
                nameCategory: categoryprueba.nameCategory,
                urlImage: doc.data().urlImage
            })  
        })
        loadViewPost(objectPosts, containerPostsUser)
    });
    // console.log(postsUser)
};

export { loadTimelineUser }