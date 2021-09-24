import { savePost, datePost, deletePostFs, storage } from "../../db/firestore.js";
import { alerts } from "../../lib/alerts.js";
import { loadViewPost } from "./viewPosts.js";

export const createPost =  () => {
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

    formCreatePost.addEventListener('submit', async  (e) => {
        e.preventDefault();
        const textSelect = selectCategory.options[selectCategory.selectedIndex].text;

        const newPost = {
            contentPost: inputTextarea.value,
            datePost: datePost(),
            idCategory: selectCategory.value,
            idUser: infouser.idUser,
            totalLikes: 0,
            totalComents: 0
        }
        if (imageUpload.files && imageUpload.files[0]) {
            const nameImage = imageUpload.files[0].name;
            newPost.image = true;

            const uploadImage = storage().ref('img/'+ nameImage).put(imageUpload.files[0]);
            /* Si vamos a hacer un modal o alert de progress */
            await uploadImage.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Enviando post...' , progress);
            })
            const imagencargada = () =>  uploadImage.snapshot.ref.getDownloadURL().then((downloadURL) => {
                return downloadURL;
            })
            await imagencargada().then(response => newPost.nameImage = response)
            
        } else {
            newPost.nameImage = "";
            newPost.image = false;
        }

        createNewPost(newPost, textSelect)
        modal.classList.remove('revelar') //Cierra el modal?
        formCreatePost.reset();
    });

    const createNewPost = (object, textSelect) => { 
        savePost(object)
        .then((res) => { // Necesitamos el res para obtener el id generado en el firestore
            const objectNewPost = [{
                idPost: res.id,
                idUser: infouser.idUser,
                nameUser: infouser.nameUser,
                photoUser: infouser.photoUser,
                contentPost: object.contentPost,
                datePost: object.datePost.toDate().toDateString(),
                nameImage: object.nameImage,
                totalComments: 0,
                totalLikes: 0,
                image: object.image,
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

export const editPost = () => {
    const btnsEdit = document.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const modal = document.querySelector('.modal');
            const btnModal = document.querySelector('#share-post');/* abrir */
            const titleModal = document.querySelector('#title-modal');
            btnModal.innerText = 'Guardar Cambios';
            titleModal.innerText = 'Editar Post';

            modal.classList.add('revelar');
            console.log('edit', e.target);
            const idPost = e.target.dataset.id;
            loadDataPosts(idPost);
        });

    });
}

function loadDataPosts (idPost) {
    const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts'));
    const dataPost = objectAllPosts.find(post => post.idPost === idPost )
    const selectCategory = document.querySelector('#select-categories');
    const inputTextarea = document.querySelector('#post-user');
    // const imageUpload = document.querySelector('#file-input');

    selectCategory.value = dataPost.idCategory;
    inputTextarea.value = dataPost.contentPost;
    // imageUpload.value = dataPost.nameImage;
}

