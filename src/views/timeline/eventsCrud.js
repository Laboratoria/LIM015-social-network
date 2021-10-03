import { getCategory, savePost, datePost, deletePostFs, updatePost, updateCategory, getPost } from "../../db/firestore.js";
import { saveImageFile, getPhotoURL } from "../../db/storage.js";
import { alerts, btnProcess } from "../../lib/alerts.js";
import { loadViewPost } from "./viewPosts.js";

//Agregamos evento para enviar Post
const addEventFormPost = () => {

    const formPost = document.querySelector('#form-create-post');
    const inputIdPost = document.querySelector('#input-idpost');
    const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
    const selectCategory = document.querySelector('#select-categories');
    const inputTextarea = document.querySelector('#post-user');
    const imageUpload = document.querySelector('#file-input');
    const sectionNameImgUpload = document.querySelector('.name-image-upload');
    const selectPublic = document.querySelector('#select-public');

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
                publicPosts: selectPublic.value,
            }
            //Lo siguiente es verificar si es guardar un nuevo post o editar, 
            //si el Input del IdPost es Vacio, entonces es crear
        if (inputIdPost.value == "") {
            //retorna un array con la info para la imagen
            const dataUploadImage = await uploadImage('create');
            objectPost.idUser = idUserAuth;
            objectPost.image = dataUploadImage[0];
            objectPost.nameImage = dataUploadImage[1];
            objectPost.urlImage = dataUploadImage[2];
            objectPost.arrComments = [];
            objectPost.arrLikes = [];
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
            deletePosts(idPosts, '#container-posts');
        });
    });

    function deletePosts(idPosts) {
        const confirmDelete = document.querySelector('#confirm-delete');
        const nodoPadre = document.querySelector("#container-posts");
        const nodoHijo = document.querySelector('#post-' + idPosts);

        confirmDelete.addEventListener('click', () => {
            deletePostFs(idPosts).then(() => {
                const inputCategory = document.querySelector('#input-category-' + idPosts);
                nodoPadre.removeChild(nodoHijo);
                modalDelete.classList.remove('revelar') //oculta el modal
                updateTotalCategory(inputCategory.value, 'delete');
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


    async function loadDataPosts(idPost) {
        const dataPost = await getPost(idPost).then(response => response.data());
        const selectCategory = document.querySelector('#select-categories');
        const inputTextarea = document.querySelector('#post-user');
        const inputIdPost = document.querySelector('#input-idpost');
        const inputUrl = document.querySelector('#input-urlpost');
        const sectionNameImgUpload = document.querySelector('.name-image-upload');
        const inputNameImage = document.querySelector('#input-nameImage');
        const selectPublic = document.querySelector('#select-public');

        if (dataPost.publicPosts == 'true') {
            selectPublic.value = 'true';
        } else {
            selectPublic.value = 'false';
        }

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
    const idUserAuth = localStorage.getItem('iduser'); //Esto vien de la linea 58 del archivo eventLogin OBTENER EL ID USER
    const infouser = JSON.parse(window.localStorage.getItem('infouser'));
    const selectCategory = document.querySelector('#select-categories');
    const textSelect = selectCategory.options[selectCategory.selectedIndex].text;
    const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts'));
    savePost(object)
        .then((res) => { // Necesitamos el res para obtener el id generado en el firestore
            const objectPost = {
                idPost: res.id,
                idUser: idUserAuth,
                nameUser: infouser.nameuser,
                photoUser: infouser.photouser,
                contentPost: object.contentPost,
                datePost: object.datePost.toDate().toDateString(),
                nameImage: object.nameImage,
                arrComments: [],
                arrLikes: [],
                image: object.image,
                publicPosts: object.publicPosts,
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
            modal.classList.remove('revelar') //Cierra el modal?
            btnProcess(false);
            alerts('success', 'Post Publicado');
            updateTotalCategory(selectCategory.value, 'create');
        })
        .catch((error) => {
            btnProcess(false);
            alerts('error', error)
        });
}

//Funcion Para Editar y Guardar Post en Firestore
const updateObjectPost = (objectPost, idPost) => {

    const modal = document.querySelector('.modal');
    const selectCategory = document.querySelector('#select-categories');
    const textSelect = selectCategory.options[selectCategory.selectedIndex].text;
    const spanDate = document.querySelector('#span-date-' + idPost);
    const spanCategory = document.querySelector('#span-category-' + idPost);
    const paragraphPost = document.querySelector('#paragraph-post-' + idPost);
    const imagePost = document.querySelector('#image-post-' + idPost);
    const spanPublic = document.querySelector('#publicPost-' + idPost)
    const inputCategory = document.querySelector('#input-category-' + idPost);

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
            if (objectPost.publicPosts == 'true') {
                spanPublic.innerHTML = `<i class="fas fa-globe-americas"></i>`;
            } else {
                spanPublic.innerHTML = `<i class="fas fa-lock"></i>`;
            }

            modal.classList.remove('revelar') //Cierra el modal
            btnProcess(false);
            alerts('success', 'Post Editado');
            updateTotalCategory([selectCategory.value, inputCategory.value], 'edit')
            inputCategory.value = selectCategory.value; // Actualizamos el nuevo valor del inputCategory de viewpost linea 77
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
        urlImage = await saveImageFile(nameImage, imageUpload.files[0], 'images')
            .then(() => getPhotoURL(nameImage, 'images'))
            .then((imageURL) => {
                return imageURL;
            });
    } else if (action == 'create') { //entonces crea un post sin imagen
        image = false;
        nameImage = "";
        urlImage = "";
    } else { //entonces edita un post pero sin modificar imagen, o no tenia imagen
        if (inputUrl.value == '') { image = false; } else { image = true; }
        urlImage = inputUrl.value;
        nameImage = inputNameImage.value;
    }
    arrayInfoImage.push(image, nameImage, urlImage);
    return arrayInfoImage;
}

const updateTotalCategory = async(idCategory, action) => { //action es el string donde indica que va eliminar y editar
    const url = window.location.href;
    const path = url.split('#');
    if (action == 'edit') {
        if (idCategory[0] != idCategory[1]) { //posicion 0 = valor del select , posicion 1 = valor de la categoria antes de ser editado
            for (let key in idCategory) {
                const category = await getCategory(idCategory[key]).then((res) => res.data()); //get data para tener el total post
                let totalCategory = category.totalPosts;
                if (key == 0) { totalCategory = parseInt(totalCategory) + 1 } else { totalCategory = parseInt(totalCategory) - 1 }
                updateCategory(idCategory[key], { totalPosts: totalCategory }).then(() => {

                    if(path[1] == '/timeline') {
                        const spanCategory = document.querySelector('#category-' + idCategory[key]);
                        spanCategory.textContent = totalCategory + ' Posts';
                    }

                })
            }
        }
    } else {
        const category = await getCategory(idCategory).then((res) => res.data()); //get data para tener el total post
        let totalCategory = category.totalPosts;
        if (action == 'create') {
            totalCategory = parseInt(totalCategory) + 1;
        } else {
            totalCategory = parseInt(totalCategory) - 1;
        }
        updateCategory(idCategory, { totalPosts: totalCategory }).then(() => {
            if(path[1] == '/timeline') {
                const spanCategory = document.querySelector('#category-' + idCategory);
                spanCategory.textContent = totalCategory + ' Posts';
            }
        })
    }

}
export { addEventFormPost, addEventDeletePost, addEventEditPost, updateTotalCategory, createObjectPost }