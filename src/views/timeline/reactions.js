export const reactionLike = () =>{
    const idLikes = document.querySelectorAll('#idLike');         
    idLikes.forEach((btn) => {
        btn.classList.remove('btn-like');
        let flag = false;
        btn.addEventListener('click', (e) =>{
            const idPosts = e.target.dataset.id;
            //extraer el total del posts
            console.log(idPosts)
            let show = e.target.dataset.show;
            let userId = e.target.dataset.iduser;
            if (flag == false) {
               flag = true;
                btn.classList.add('btn-like');

                const result = idPosts.indexOf(userId);
                    if (result === -1) {
                        /* const testLike = idPosts.push(userId)
                        console.log(testLike) */
                    }

                  /*   const result = objPost.likes.indexOf(userObject);
                    if (result === -1) {
                        const testLike = objPost.likes.push(userObject); */
               
                //funcion de fb add +1 
            }else{
                flag = false;
                console.log('remove style')
                btn.classList.remove('btn-like');
                //funcion de fb add -1 
            }
            console.log(show)
            //click add class btn-like 
            //dislike remove btn-like
            //
            
      
      

        })
    });
    
}
