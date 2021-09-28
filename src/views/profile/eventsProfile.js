// import { loadViewPost } from "../timeline/viewPosts.js";
const loadUserPosts = (objectDataPosts) => {
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const objectUserPosts = objectDataPosts.filter(post => post.idUser === infouser.idUser);
    // const containerUserPosts = document.querySelector('#container-posts-user')
    console.log(objectUserPosts)
    // const otracosa = loadViewPost(objectUserPosts)
}

export { loadUserPosts }