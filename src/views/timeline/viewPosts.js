import { getAllPosts } from '../../db/firestore.js';
const allPosts = () => {
        const objectPosts = [];
        const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21
        const allCategoriesCourses = JSON.parse(window.localStorage.getItem('allCategories'));
        return getAllPosts()
            .then(response => {
                response.forEach(doc => {
                    const userprueba = allUsers.find(element => element.idUser === doc.data().idUser);
                    const categoryprueba = allCategoriesCourses.find(element => element.idCategory == doc.data().idCategory);
                    objectPosts.push({
                        idPost: doc.id,
                        idUser: doc.data().idUser,
                        nameUser: userprueba.nameUser,
                        photoUser: userprueba.photoUser,
                        contentPost: doc.data().contentPost,
                        datePost: doc.data().datePost.toDate().toDateString(),
                        nameImage: doc.data().nameImage,
                        totalComments: doc.data().totalComents,
                        totalLikes: doc.data().totalLikes,
                        image: doc.data().image,
                        idCategory: doc.data().idCategory,
                        nameCategory: categoryprueba.nameCategory,
                        urlImage: doc.data().urlImage
                    })
                });
                window.localStorage.setItem('allPosts', JSON.stringify(objectPosts));
                return objectPosts;
            });
    }
    //Función inicial conectada en loadComponents
const getObjectAllPosts = async() => {
    const objectDataPosts = await allPosts().then(response => response)
    loadViewPost(objectDataPosts)
}

const loadViewPost = (objectDataPosts) => {
        const containerPost = document.querySelector('#container-posts');
        const idUserAuth = localStorage.getItem('iduser');//Esto vien de la linea 58 del archivo eventLogin
        objectDataPosts.forEach(element => {
                    const post = document.createElement('div');
                    post.classList.add('post');
                    post.id = `post-${element.idPost}`;
                    post.innerHTML = ` 
        <div class="post-header header">
            <div class="header-left">
                <a href="#">
                    ${(/^(http|https):\/\/[^ "]+$/.test(element.photoUser)) ? 
                    `<img src="${element.photoUser}" alt="" class="post-author-pic">` 
                    : `<img src="../images/profile/${element.photoUser}" class="post-author-pic">`} 
                </a>
                <div class="post-author author">
                    <span class="author-name"><a href="#"> ${element.nameUser} </a></span>
                </div>
                <span class="post-date">${element.datePost}</span>
            </div>
            <div class="header-right">
                <div class="post-category">
                    ${idUserAuth == element.idUser ? `<img class="btn btn-edit" width="22px" height="22px" data-id="${element.idPost}" src="../images/svg/edit.png">
                     <img class="btn btn-delete" data-id="${element.idPost}" src="https://user-images.githubusercontent.com/77282012/120018025-389c9c80-bfac-11eb-9d7d-0a68441eca20.png">`:``}
                    <span class="badge badge-secondary">${element.nameCategory}</span>
                </div>
                
            </div>
        </div>
        <div class="post-content">
            <p class="content-paragraph"> ${element.contentPost} </p>
            ${(element.image == true ) ? `<img src="${element.urlImage}" class="content-image"/>` : ``}
        </div>
        <div class="post-footer footer">
            <div class="footer-reactions reactions">
                <button type="button" class="btn-post btn-notlike" data-link="${element.idPost}" > <img class="img-heart" src=""></button>
                <button type="button" class="btn-post btn-notcomment"><i class="far fa-comment-dots"></i> <span class="count-reaction">${element.totalComments}</span></button>
                <button type="button" class="btn-post btn-notsave"><i class="far fa-bookmark"></i> <span class="count-reaction"></span>  </span></button>
            </div>
            <div class="footer-comments comments"> </div>
        </div>
        `

        const theFirstChild = containerPost.firstChild;
        containerPost.insertBefore(post, theFirstChild) //renderiza en el hijo anterior del primero 
       /*  console.log(element.idPost);
        console.log(element.totalLikes) */

        /* const classLikes = document.querySelector('#btn-like');
       
        console.log(classLikes)
        classLikes.addEventListener('click', () =>{
           
            const result = document.querySelector(`post-${element.idPost}`);
            console.log(result);
        })
 */
    });
}

export { loadViewPost, allPosts, getObjectAllPosts }