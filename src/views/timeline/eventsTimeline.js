import { signOut } from '../../db/firebase-auth.js';
import { sliderPopularPost } from '../../lib/animation.js';

const addEventsTimeline = () => {
        document.querySelector('#div-body').className = "bodyBackground"; //cambiamos el background del body

        /***Evento para Salir***/
        const btnSalir = document.querySelector('#logout');
        btnSalir.addEventListener('click', () => {
            signOut().then(() => {
                document.querySelector('#div-body').classList.remove('bodyBackground');
                localStorage.clear();
                window.location.href = "";
            })
        });

        /***Eventos para Abrir y Cerrar Modal***/
        const modal = document.querySelector('.modal');
        const btnCreatePost = document.querySelector('.btn-create-post'); /* abrir */
        const btnCerrarModal = document.querySelector('.btn-cerrar-modal'); /* cerrar */
        const sectionNameImgUpload = document.querySelector('.name-image-upload');
        btnCreatePost.addEventListener('click', () => {
            const btnModal = document.querySelector('#share-post'); /* abrir */
            const titleModal = document.querySelector('#title-modal');
            btnModal.innerText = 'Publicar';
            titleModal.innerText = 'Crear Publicación';
            sectionNameImgUpload.innerHTML = ``;
            modal.classList.add('revelar');
        });

        btnCerrarModal.addEventListener('click', () => {
            modal.classList.remove('revelar')
            document.querySelector('#form-create-post').reset();
        });

        /***Renderizar TextArea***/
        const userPost = document.querySelector('.user-info-textarea');
        const placeholderTextarea = document.querySelector('.textarea-post');
        const infouser = JSON.parse(window.localStorage.getItem('infouser')); //extraemos lo que almacenamos en local archivo viewHeaderUser line 29
        userPost.innerHTML = `
        <a href="#/profile" class="user-information">  
            <img class="avatar avatar-sm" src="${/^(http|https):\/\/[^ "]+$/.test(infouser.photoUser)?infouser.photoUser:`../images/profile/`+infouser.photoUser}" alt="img-user"> 
            <span> ${infouser.nameUser} </span> 
        </a>`
        placeholderTextarea.placeholder = `¿Qué quieres compartir hoy, ${infouser.nameUser}... ?`

    
        /***Renderizar y Eventos para Emojis***/
        const emojiGroup = document.querySelector('#emoji-group');
        const btnEmoji = document.querySelector('.smile');
        const textarea = document.querySelector('#post-user')
        btnEmoji.addEventListener('click',() => { emojiGroup.classList.add('show-emojis')});
        textarea.addEventListener('click', () => {emojiGroup.classList.remove('show-emojis')});

        let count = 128512;
        for (let index = 1; index < 49; index++) {
            const spanEmoji = document.createElement('span');
            count = count + 1;
            spanEmoji.id = `emoji${index}`;
            spanEmoji.className = 'emoji';
            spanEmoji.innerHTML = `&#${count};`;
            emojiGroup.appendChild(spanEmoji);
        }
        const emojiList = document.getElementsByClassName('emoji');


        for (let index = 0; index < emojiList.length; index++) {
            const element = emojiList[index];
            element.addEventListener('click', () => {
                insertEmoji(element.id);
            })
        }

        function insertEmoji(idEmoji) {
            const emojiSelected = document.querySelector(`#${idEmoji}`);
            textarea.value += emojiSelected.innerHTML;
        }

    sliderPopularPost();
}

export { addEventsTimeline }