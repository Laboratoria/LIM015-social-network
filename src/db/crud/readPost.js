const readPost = () => { //retorna la promesa de la linea 6 - informacion de cada usurio
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    const usersfb = () => {

        const objectUser = []; //array de objetos cada obj es un usuario

        return db.collection("users")
            .get()
            .then(response => {
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
                return objectUser;
            })
    }


    const posts = async() => {
        const objectPosts = [];
        const allUsers = await usersfb().then(response => response);
        // const allCategoriesCourses = localStorage.getItem('allCategories');
        const allCategoriesCourses = JSON.parse(window.localStorage.getItem('allCategories'));
        return db.collection("posts")

            .get()
            .then(response => {
                return response.forEach(doc => {
                    const userprueba = allUsers.find(element => element.idUser === doc.data().idUser)
                    // console.log(userprueba)
                    const categoryprueba = allCategoriesCourses.find(element => element.idCategory == doc.data().idCategory)
                    objectPosts.push({
                        idPost: doc.id,
                        idUser: doc.data().idUser,
                        nameUser: userprueba.nameUser,
                        photoUser: userprueba.photoUser,
                        contentPost: doc.data().contentPost,
                        datePost: doc.data().datePost,
                        nameImage: doc.data().nameImage,
                        totalComments: doc.data().totalComents,
                        totalLikes: doc.data().totalLikes,
                        image: doc.data().image,
                        idCategory: doc.data().idCategory,
                        nameCategory: categoryprueba.nameCategory,
                    })
                    return objectPosts;
                });
                return objectPosts;
            });


    }

    const renderPost = async () => {
        document.querySelector('body').style = 'backgorund:#f7f7f7;'
        const allPosts = await posts().then(response => response);
        const containerPost = document.querySelector('#container-posts');
        allPosts.forEach(element => {
            const post = document.createElement('div');
            post.classList.add('post');
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
                        <button class="btn btn-primary" id="btn-${element.idPost}" type="button"> <i class="fas fa-pen"></i> </button> 
                        <span class="badge badge-secondary">${element.nameCategory}</span>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <p class="content-paragraph"> ${element.contentPost} </p>
                ${(element.image == true ) ? 
                    `<img src="../images/post/${element.nameImage}" class="content-image"> </img> ` : ``}
            </div>
            <div class="post-footer footer">
                <div class="footer-reactions reactions">
                    <button type="button" class="btn-post btn-notlike"><i class="far fa-heart"></i> <span class="count-reaction">3</span></button>
                    <button type="button" class="btn-post btn-notcomment btn-comment"><i class="far fa-comment-dots"></i> <span class="count-reaction"></span>3</span></button>
                    <button type="button" class="btn-post btn-notsave"><i class="far fa-bookmark"></i> <span class="count-reaction"></span>3</span></button>
                </div>
                <div class="footer-comments comments"> </div>
            </div>
            `
            containerPost.appendChild(post);
        });
        
    }
    renderPost()

    
}

export { readPost }