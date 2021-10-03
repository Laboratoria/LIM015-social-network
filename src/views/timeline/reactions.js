import { updatePost, getPost, getUser } from "../../db/firestore.js";
import { alerts } from "../../lib/alerts.js"
const reactionLike = () => {
    const allLikes = document.querySelectorAll('.likes');

    allLikes.forEach((btn) => {
        btn.addEventListener('click', async(e) => {
            const idPost = e.target.dataset.id;
            const dataPost = await getPost(idPost).then(response => response.data());
            const idUserAuth = localStorage.getItem('iduser');
            const imgLike = document.querySelector("#like-" + idPost);
            const countLike = document.querySelector("#count-like-" + idPost);
            let newArrayLike;
            if (dataPost.arrLikes.includes(idUserAuth)) {
                //si ya esta el idUser, entonces ya no le gusta el post , if ==true
                newArrayLike = dataPost.arrLikes.filter((item) => item !== idUserAuth);
                imgLike.src = '../images/svg/notlike.png';
            } else {
                //no esta el idUser, entonces le gusta el post
                newArrayLike = [...dataPost.arrLikes, idUserAuth];
                imgLike.src = '../images/svg/like.png';
            }
            updatePost(idPost, { arrLikes: newArrayLike });
            countLike.innerText = newArrayLike.length;

        })
    });


}

const addEventComments = () => {
    const allBtnComments = document.querySelectorAll('.btn-comments');
    allBtnComments.forEach((btn) => {
        let flag = false;
        btn.addEventListener('click', async(e) => {
            const idPost = e.target.dataset.id;
            const idUserAuth = localStorage.getItem('iduser');
            const infoUserAuth = await getUser(idUserAuth).then(response => response.data());
            const footerComments = document.querySelector('#footer-comments-' + idPost); //elemento padre comentarios
            if (flag == false) {
                const boxComment = document.createElement('div');
                boxComment.className = 'comments-box box';
                boxComment.innerHTML = `    <div class="box-profile profile">
                                                <img src="${infoUserAuth.photouser}" class="profile-pic">
                                            </div>
                                            <div class="box-bar bar">
                                                <input type="text" id="input-comment-${idPost}" placeholder="Escribe un comentario..." class="bar-input">
                                            </div>
                                            <button class="public-comment" type="button" data-id="${idPost}">Publicar</button>`
                footerComments.appendChild(boxComment);

                //Cargando Comentarios,1ro verificar si hay, 2er paso dividir array-split, segundo paso cargar con un foreach e ir renderizando, por ultimo agregar eventp para publicar, donde se llamaraia a update firestore, y mandamos un objeto con el array
                const dataPost = await getPost(idPost).then(response => response.data());
                const arrayComments = dataPost.arrComments;
            
                if (arrayComments.length > 0) {
                    const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21    
                    // let arrayCommentsUser;
                    arrayComments.forEach(element => {
                        let arrayCommentsUser = element.split('--');
                        const userFriend = allUsers.find(element => element.idUser == arrayCommentsUser[0]);
                        console.log(userFriend)
                        const boxCommentFriends = document.createElement('div');
                        boxCommentFriends.classList.add('comments-friend-comment', 'friend-comment');
                        boxCommentFriends.innerHTML = `
                        <img src="${userFriend.photoUser}" class="friend-comment-pic">
                        <div class="friend-comment-comment comment">
                            <p class="comment-author"> ${userFriend.nameUser} </p>
                            <span class="comment-content"> ${arrayCommentsUser[1]} </span>
                        </div>
                        `
                        footerComments.appendChild(boxCommentFriends);
                    })
                } else {
                    alerts('info', 'Sé el primero en comentar...');
                }
                flag = true;
            } else {
                flag = false;
                footerComments.innerHTML = "";
                console.log('limpiar comentarios', idPost);
            }

        });
    });
}

export { reactionLike, addEventComments }