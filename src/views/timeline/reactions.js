import {updateLikes} from '../../db/firestore.js';

export const reactionLike = () =>{
    const idLikes = document.querySelectorAll('#idLike');         
    idLikes.forEach((btn) => {
        btn.classList.remove('btn-like');
        let flag = false;
        btn.addEventListener('click', (e) =>{
            const idPosts = e.target.dataset.id;
            console.log('id post:...', idPosts)
            let arrLikes = e.target.dataset.arrlikes;
            let converterArrLikes = arrLikes.split(',');
            console.log(converterArrLikes)
            let userId = e.target.dataset.iduser;
            console.log('userId', userId);
            let totalLike100 = converterArrLikes.length;
            

            if (flag == false) {
               flag = true;
                btn.classList.add('btn-like');
                const result = idPosts.indexOf(userId);
                    if (result === -1) {
                        converterArrLikes.push(userId);
                        
                        updateLikes(idPosts, converterArrLikes, totalLike100);
                        
                    } 
               
                //funcion de fb add +1 
            }else{
                flag = false;
                //console.log('remove style')
                btn.classList.remove('btn-like');
                //funcion de fb add -1 
                /* if (result !== -1) {
                    valueLike = valueLike - 1;
                    console.log('result de value DISlike:', valueLike);
                    
                } */
                
            }
            //console.log(valueLike)
                     
      
      

        })
    });
    
}
