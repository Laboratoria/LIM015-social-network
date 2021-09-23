import { db, datePost, deletePostFs } from "../../db/firestore.js";
import { alerts } from "../../lib/alerts.js";
import { loadViewPost } from "./viewPosts.js";

export const createPost = () => {
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const formCreatePost = document.querySelector('#form-create-post');
    const selectCategory = formCreatePost.querySelector('#select-categories');
    const inputTextarea = formCreatePost.querySelector('#post-user');
    const imageUpload = formCreatePost.querySelector('#file-input');
    const modal = document.querySelector('.modal');
    const sectionNameImgUpload = document.querySelector('.name-image-upload');


    imageUpload.addEventListener('change', () => {
        if (imageUpload.files && imageUpload.files[0]) {
            sectionNameImgUpload.innerHTML = `<span> ${ imageUpload.files[0].name } </span>`;
        }
    })

    formCreatePost.addEventListener('submit', (e) => {
        e.preventDefault();
        const textSelect = selectCategory.options[selectCategory.selectedIndex].text;
        /* let time = new Date(datePost()).toDateString(); */
       /*  let time = (new Date(datePost())).toDateString(); */
       /* const time = datePost().toDate().toLocaleTimeString('en-US')
        console.log(time) */
        const newPost = {
            contentPost: inputTextarea.value,
            datePost: datePost(),
            idCategory: selectCategory.value,
            idUser: infouser.idUser,
            totalLikes: 0,
            totalComents: 0
        }
        if (imageUpload.files && imageUpload.files[0]) {
            newPost.nameImage = imageUpload.files[0].name;
            newPost.image = true;
        } else {
            newPost.nameImage = "";
            newPost.image = false;
        }
        createNewPost(newPost, textSelect)
        modal.classList.remove('revelar') //Cierra el modal?
        formCreatePost.reset();
    });

    const createNewPost = (object, textSelect) => {
        db.collection('posts')
            .add(object)
            .then((res) => {
                const objectNewPost = [{
                    idPost: res.id,
                    idUser: infouser.idUser,
                    nameUser: infouser.nameUser,
                    photoUser: infouser.photoUser,
                    contentPost: object.contentPost,
                    datePost: object.datePost,
                    nameImage: "",
                    totalComments: 0,
                    totalLikes: 0,
                    image: false,
                    idCategory: object.idCategory,
                    nameCategory: textSelect,
                }];
                loadViewPost(objectNewPost)
                deletePost();//vuelvo a llamar a la funcionn delete
            })
            .catch((error) => {
                console.log(error)
            });
    }
}


export const deletePost = () => {
    const btnsDelete = document.querySelectorAll('.btn-delete');
    const modalDelete = document.querySelector('.modal-delete');
    const btnCerrarModal = document.querySelector('.btn-cerrar-modal-delete'); /* cerrar */
    btnCerrarModal.addEventListener('click', () => {
        modalDelete.classList.remove('revelar')
    });
    btnsDelete.forEach((btn) => {
        /* console.log(btn) */
        btn.addEventListener('click', (e) => {
            console.log('click');
            modalDelete.classList.add('revelar')
            const idPosts = e.target.dataset.id;
            deletePosts(idPosts);
        });

    });

    function deletePosts(idPosts) {
        const confirmDelete = document.querySelector('#confirm-delete');
        confirmDelete.addEventListener('click', () => {
            const nodoPadre = document.querySelector('#container-posts');
            const nodoHijo = document.querySelector('#post-' + idPosts);
            deletePostFs(idPosts).then(() => {
                nodoPadre.removeChild(nodoHijo);
                modalDelete.classList.remove('revelar') //oculta el modal
                alerts('success', 'Eliminado con exito')
            }).catch((err) => {
                modalDelete.classList.remove('revelar') //oculta el modal
                alerts('error', 'Hubo un error ' + err)
                console.log(err)
            })

        })
    }
}