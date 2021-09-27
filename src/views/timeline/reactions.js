import {updateLikes} from '../../db/firestore.js';

export const reactionLike = () =>{
    const allLikes = document.querySelectorAll('.btn-like-main'); 

    allLikes.forEach((btn) => {
        let flag = false;
        btn.addEventListener('click', (e) =>{
            const idPosts = e.target.dataset.id;
            console.log('id post:...', idPosts)
            const totalLikes = document.querySelector('#total-like-' + idPosts);
            let intTotalLikes = parseInt(totalLikes.textContent);

            let arrLikes = e.target.dataset.arrlikes;//firestore te devuelve un obj divido en comas
            console.log(arrLikes,'arrlikes YOVANA')
            let converterArrLikes = arrLikes.split(',');//Para trabajar mejor lo convertimos en un array 
            let filteredArrLikes = converterArrLikes.filter(el => el !="");

            console.log(converterArrLikes, 'CONVERT ')
            let userId = e.target.dataset.iduser;//con esto obtengo el id user
            console.log('userId', userId);
            
            
            if (flag == false) {
               flag = true;
                btn.classList.add('btn-like');
                const result = idPosts.indexOf(userId);//Para verificar que un posts no tien mi like entonces da -1
                    if (result === -1) {
                        intTotalLikes ++;
                        filteredArrLikes.push(userId);
                        console.log(filteredArrLikes,' enviando .. ')
                        updateLikes(idPosts, filteredArrLikes, intTotalLikes);
                    } 
            }else{
                flag = false;
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
