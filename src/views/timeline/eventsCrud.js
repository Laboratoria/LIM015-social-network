import { savePost, datePost, deletePostFs, updatePost } from "../../db/firestore.js";
import { saveImageFile, getPhotoURL } from "../../db/storage.js";
import { alerts, btnProcess } from "../../lib/alerts.js";
import { loadViewPost } from "./viewPosts.js";

//Agregamos evento para enviar Post
const addEventFormPost = () => {

    const formPost = document.querySelector('#form-create-post');
    const inputIdPost = document.querySelector('#input-idpost');
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const selectCategory = document.querySelector('#select-categories');
    const inputTextarea = document.querySelector('#post-user');
    const imageUpload = document.querySelector('#file-input');
    const sectionNameImgUpload = document.querySelector('.name-image-upload');

    /** Evento en caso de Cambio de Imagen**/
    imageUpload.addEventListener('change', () => {
        if (imageUpload.files && imageUpload.files[0]) {
            sectionNameImgUpload.innerHTML = `<span> ${ imageUpload.files[0].name } </span>`;
        }
    })

    /** Evento para enviar Formulario**/
    formPost.addEventListener('submit', async(e) => {
        e.preventDefault();
        btnProcess(true);
        const objectPost = {
                contentPost: inputTextarea.value,
                datePost: datePost(),
                idCategory: selectCategory.value,
            }
            //Lo siguiente es verificar si es guardar un nuevo post o editar, 
            //si el Input del IdPost es Vacio, entonces es crear
        if (inputIdPost.value == "") {
            //retorna un array con la info para la imagen
            const dataUploadImage = await uploadImage('create');
            objectPost.idUser = infouser.idUser;
            objectPost.totalLikes = 0;
            objectPost.totalComents = 0;
            objectPost.image = dataUploadImage[0];
            objectPost.nameImage = dataUploadImage[1];
            objectPost.urlImage = dataUploadImage[2];
            createObjectPost(objectPost);
        } else {
            const dataUploadImage = await uploadImage('edit');
            objectPost.image = dataUploadImage[0];
            objectPost.nameImage = dataUploadImage[1];
            objectPost.urlImage = dataUploadImage[2];
            updateObjectPost(objectPost, inputIdPost.value)
        }

    });

}

//Evento Eliminar en cada Post 

const addEventDeletePost = () => {
    const btnsDelete = document.querySelectorAll('.btn-delete');
    const modalDelete = document.querySelector('.modal-delete');
    const btnCerrarModal = document.querySelector('.btn-cerrar-modal-delete'); /* cerrar */
    btnCerrarModal.addEventListener('click', () => {
        modalDelete.classList.remove('revelar')
    });
    btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            modalDelete.classList.add('revelar')
            const idPosts = e.target.dataset.id;
            deletePosts(idPosts);
        });

    });

    function deletePosts(idPosts) {
        const confirmDelete = document.querySelector('#confirm-delete');
        const nodoPadre = document.querySelector('#container-posts');
        const nodoHijo = document.querySelector('#post-' + idPosts);

        confirmDelete.addEventListener('click', () => {
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


//Evento Editar en cada Post 

const addEventEditPost = () => {
    const btnsEdit = document.querySelectorAll('.btn-edit');
    const modal = document.querySelector('.modal');
    const btnModal = document.querySelector('#share-post'); /* abrir */
    const titleModal = document.querySelector('#title-modal');

    btnsEdit.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            btnModal.innerText = 'Guardar Cambios';
            titleModal.innerText = 'Editar Post';
            const idPost = e.target.dataset.id;
            loadDataPosts(idPost);
            modal.classList.add('revelar');
        });
    });


    function loadDataPosts(idPost) {
        const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts'));
        const dataPost = objectAllPosts.find(post => post.idPost === idPost)
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

}

//Funcion Para Crear y Guardar Post en Firestore

const createObjectPost = (object) => {
    const modal = document.querySelector('.modal');
    const formPost = document.querySelector('#form-create-post');
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const selectCategory = document.querySelector('#select-categories');
    const textSelect = selectCategory.options[selectCategory.selectedIndex].text;
    const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts'));

    savePost(object)
        .then((res) => { // Necesitamos el res para obtener el id generado en el firestore
            const objectPost = {
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
                urlImage: object.urlImage,
            }
            objectAllPosts.push(objectPost);
            window.localStorage.setItem('allPosts', JSON.stringify(objectAllPosts)); //Agreamos al Local, con el nuevo Obj
            const arrayObjectPost = [objectPost]; //agregamos el obj en un array para darselo a la funcion loadView, ya que este recibe un array
            loadViewPost(arrayObjectPost); //Rendereizamos el Post en la DOM, funcion esta en viewPost linea 37
            addEventEditPost();
            addEventDeletePost(); //agrego de nuevo los eventos
            formPost.reset();
            modal.classList.remove('revelar') //Cierra el modal?
            btnProcess(false);
            alerts('success', 'Post Publicado');
        })
        .catch((error) => {
            btnProcess(false);
            alerts('error', error)
        });
}

//Funcion Para Editar y Guardar Post en Firestore
const updateObjectPost = (objectPost, idPost) => {
    const modal = document.querySelector('.modal');
    const formPost = document.querySelector('#form-create-post');
    const selectCategory = document.querySelector('#select-categories');
    const textSelect = selectCategory.options[selectCategory.selectedIndex].text;
    const spanDate = document.querySelector('#span-date-' + idPost);
    const spanCategory = document.querySelector('#span-category-' + idPost);
    const paragraphPost = document.querySelector('#paragraph-post-' + idPost);
    const imagePost = document.querySelector('#image-post-' + idPost);
    //const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts')); pensar en la noche

    updatePost(idPost, objectPost)
        .then(() => {
            //Actualizamos la DOM con los datos que edito el usuario 
            spanDate.innerText = objectPost.datePost.toDate().toDateString();
            spanCategory.innerText = textSelect;
            paragraphPost.innerText = objectPost.contentPost;
            //Evaluamos si ha agregado una imagen o ha cambiado
            if (objectPost.image) {
                imagePost.src = objectPost.urlImage;
                imagePost.classList.add('content-image');
            }
            formPost.reset();
            modal.classList.remove('revelar') //Cierra el modal
            btnProcess(false);
            alerts('success', 'Post Editado');
        })
        .catch((error) => {
            btnProcess(false);
            alerts('error', error);
        });
}

//Función para cargar y almacenar imagen 
//La cual se encarga de verificar si hay una imagen en el inputFile, 
//de ser asi lo almacenamos en el storage
const uploadImage = async(action) => {
    const imageUpload = document.querySelector('#file-input');
    const inputUrl = document.querySelector('#input-urlpost');
    const inputNameImage = document.querySelector('#input-nameImage');
    const arrayInfoImage = [];
    let image, nameImage, urlImage;
    if (imageUpload.files && imageUpload.files[0]) {
        image = true;
        nameImage = imageUpload.files[0].name;
        urlImage = await saveImageFile(nameImage, imageUpload.files[0])
            .then(() => getPhotoURL(nameImage))
            .then((imageURL) => {
                return imageURL;
            });
    } else if (action == 'create') { //entonces crea un post sin imagen
        image = false;
        nameImage = "";
        urlImage = "";
    } else { //entonces edita un post pero sin modificar imagen, o no tenia imagen
        image = true;
        urlImage = inputUrl.value;
        nameImage = inputNameImage.value;
    }
    arrayInfoImage.push(image, nameImage, urlImage);
    return arrayInfoImage;
}

export { addEventFormPost, addEventDeletePost, addEventEditPost }