export const reactionLike = () =>{
    const classLikes = document.querySelectorAll('.btn-notlike');
    classLikes.forEach((btn) => {
        btn.addEventListener('click', (e) =>{
            console.log(btn)
            const idPosts = e.target.dataset.id;
            console.log(idPosts)

        })
    });
}
