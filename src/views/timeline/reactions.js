import {testLikeAuth} from '../../db/firebase-auth.js'
export const reactionLike = () =>{
    const idLikes = document.querySelectorAll('#idLike');
   /*  const classLikes = document.querySelectorAll('.btn-notlike'); */
  /*   console.log(idLikes)
    const show = classLikes.dataset.show; */
    /* console.log(show ,'showw') */
    /* const showNumberLike = document.querySelector('div');
    const show = showNumberLike.dataset.id; */
            
    idLikes.forEach((btn) => {
       
        
        btn.addEventListener('click', (e) =>{
           /*  const userFound =  */
            const idPosts = e.target.dataset.id;
            console.log(idPosts)
            const show = e.target.dataset.show;
            console.log(show)
            const userFound = show.find(
                (user) => user === testLikeAuth(user),
            );
            console.log(userFound, 'fb.auth')
        })
    });
   /*  showNumberLike.forEach((btn) => { */
           /*  const userFound =  */
            /* const idPosts = e.target.dataset.id;
            console.log(idPosts) */
           /*  const show = e.target.dataset.id;
            console.log(show ,'showw') */
            
       
    /* }); */
    
}
