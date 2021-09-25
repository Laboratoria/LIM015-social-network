import { savePost, datePost, deletePostFs, updatePost } from "../../db/firestore.js";
import { saveImageFile, getPhotoURL } from "../../db/storage.js";
import { alerts, btnProcess } from "../../lib/alerts.js";
import { loadViewPost } from "./viewPosts.js";




export const createPost = () => {
    const selectCategory = document.querySelector('#select-categories');
    const inputTextarea = document.querySelector('#post-user');
    const inputIdPost = document.querySelector('#input-idpost');
    const inputUrl = document.querySelector('#input-urlpost');
    const formCreatePost = document.querySelector('#form-create-post');
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const imageUpload = document.querySelector('#file-input');
    const modal = document.querySelector('.modal');
    const sectionNameImgUpload = document.querySelector('.name-image-upload');
    const inputNameImage = document.querySelector('#input-nameImage');

    imageUpload.addEventListener('change', () => {
        if (imageUpload.files && imageUpload.files[0]) {
            sectionNameImgUpload.innerHTML = `<span> ${ imageUpload.files[0].name } </span>`;
        }
    })

    formCreatePost.addEventListener('submit', async(e) => {
        e.preventDefault();
        btnProcess(true);
        const textSelect = selectCategory.options[selectCategory.selectedIndex].text;

        const objectPost = {
            contentPost: inputTextarea.value,
            datePost: datePost(),
            idCategory: selectCategory.value,
            idUser: infouser.idUser,
            totalLikes: 0,
            totalComents: 0
        }
        if (imageUpload.files && imageUpload.files[0]) {
            const nameImage = imageUpload.files[0].name;
            objectPost.image = true;
            objectPost.nameImage = nameImage;

            await saveImageFile(nameImage, imageUpload.files[0])
                .then(() => getPhotoURL(nameImage))
                .then((imageURL) => {
                    objectPost.urlImage = imageURL;
                    if (inputIdPost.value == "") { createobjectPost(objectPost, textSelect) } else { updateObjectPost(objectPost, inputIdPost.value, textSelect) }
                });
        } else {
            if (inputIdPost.value == "") { //es un post nuevo sin imagen
                objectPost.nameImage = "";
                objectPost.image = false;
                objectPost.urlImage = "";
                createobjectPost(objectPost, textSelect)
            } else { //editar el post pero no se edita la imagen
                objectPost.urlImage = inputUrl.value;
                objectPost.nameImage = inputNameImage.value;
                updateObjectPost(objectPost, inputIdPost.value, textSelect)
            }
        }
    });

    const createobjectPost = (object, textSelect) => {
        const formCreatePost = document.querySelector('#form-create-post');
        savePost(object)
            .then((res) => { // Necesitamos el res para obtener el id generado en el firestore
                const objectobjectPost = [{
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
                    urlImage: object.urlImage,
                    idCategory: object.idCategory,
                    nameCategory: textSelect,
                }];

                loadViewPost(objectobjectPost);
                editPost();
                deletePost(); //vuelvo a llamar a la funcionn delete
                formCreatePost.reset();
                modal.classList.remove('revelar') //Cierra el modal?
                btnProcess(false);
                alerts('success', 'Post Publicado');
            })
            .catch((error) => {
                alerts('error', error)
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
            })

        })
    }
}

export const editPost = () => {
    const btnsEdit = document.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const modal = document.querySelector('.modal');
            const btnModal = document.querySelector('#share-post'); /* abrir */
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

function loadDataPosts(idPost) {
    const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts'));
    const dataPost = objectAllPosts.find(post => post.idPost === idPost)
        // const imageUpload = document.querySelector('#file-input');
        console.log(dataPost)
    const selectCategory = document.querySelector('#select-categories');
    const inputTextarea = document.querySelector('#post-user');
    const inputIdPost = document.querySelector('#input-idpost');
    const inputUrl = document.querySelector('#input-urlpost');
    const sectionNameImgUpload = document.querySelector('.name-image-upload');
    const inputNameImage = document.querySelector('#input-nameImage');

    inputIdPost.value = idPost;
    selectCategory.value = dataPost.idCategory;
    inputTextarea.value = dataPost.contentPost;
    inputUrl.value = dataPost.urlImage;
    inputNameImage.value = dataPost.nameImage;
    sectionNameImgUpload.innerHTML = `<span> ${ dataPost.nameImage } </span>`;
}

function updateObjectPost(objectPost, idPost, textSelect) {
    const objectUpdatePost = {
        contentPost: objectPost.contentPost,
        datePost: objectPost.datePost,
        nameImage: objectPost.nameImage,
        idCategory: objectPost.idCategory,
        urlImage: objectPost.urlImage,
    }
    updatePost(idPost,objectUpdatePost).then(() => console.log('he editado con exito'))
}