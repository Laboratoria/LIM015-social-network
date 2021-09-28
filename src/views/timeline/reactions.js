import { updatePost, getPost } from "../../db/firestore.js";
export const reactionLike = () => {
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
                updatePost(idPost, { arrLikes: newArrayLike });
                imgLike.src = '../images/svg/notlike.png';
            } else {
                //no esta el idUser, entonces le gusta el post
                newArrayLike = [...dataPost.arrLikes, idUserAuth];
                updatePost(idPost, { arrLikes: newArrayLike });
                imgLike.src = '../images/svg/like.png';
            }
            countLike.innerText = newArrayLike.length;

        })
    });


}