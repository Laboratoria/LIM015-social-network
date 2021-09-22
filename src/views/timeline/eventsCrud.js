import {deletePostFs} from '../../db/firestore.js'
import { alerts } from "../../lib/alerts.js";
export const addEventsCrud = () =>{
    const btnsDelete = document.querySelectorAll('.btn-delete');
    const modalDelete = document.querySelector('.modal-delete');
    const btnCerrarModal = document.querySelector('.btn-cerrar-modal-delete');/* cerrar */
    btnCerrarModal.addEventListener('click', () => { 
      modalDelete.classList.remove('revelar') 
    });
    btnsDelete.forEach((btn) => {
      console.log(btn)
      btn.addEventListener('click', (e) => {
          console.log('click');
          modalDelete.classList.add('revelar')
          const idPosts = e.target.dataset.id;
          deletePosts(idPosts);
      });

    });
    function deletePosts(idPosts){
      const confirmDelete = document.querySelector('#confirm-delete');
      confirmDelete.addEventListener('click',() =>{
      const nodoPadre = document.querySelector('#container-posts');
      const nodoHijo = document.querySelector('#post-'+idPosts);  
      deletePostFs(idPosts).then(()=>{
        nodoPadre.removeChild(nodoHijo);
        modalDelete.classList.remove('revelar')//oculta el modal
        alerts('success', 'Eliminado con exito')
      }).catch((err)=>{
        modalDelete.classList.remove('revelar')//oculta el modal
        alerts('error', 'Hubo un error ' + err)
      })
     
      })  
    } 
}