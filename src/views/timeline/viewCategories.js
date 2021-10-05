import { getAllCategories, getPostByCategory } from '../../db/firestore.js';
import { loadViewPost, getObjectAllPosts } from './viewPosts.js';
import { alerts } from '../../lib/alerts.js';
const allCategories = () => {
    const objectCategories = [];
    return getAllCategories()
        .then(response => {
            response.forEach(doc => {
                objectCategories.push({
                    idCategory: doc.id,
                    nameCategory: doc.data().category,
                    imagen: doc.data().imagen,
                    totalPosts: doc.data().totalPosts
                })
            });
            window.localStorage.setItem('allCategories', JSON.stringify(objectCategories)); //Almacenamos en local para usarlo en post
            return objectCategories;
        });
}

const loadViewCategory = async() => {
    const categories = document.querySelector('#categories');
    const allCategoriesCourse = await allCategories().then(response => response);
    allCategoriesCourse.forEach(element => {
        const figureCategory = document.createElement('figure');
        figureCategory.classList.add('category');
        /*  <img class="categoryIcon" src="../../images/svg/categorias/${ element.imagen }" alt="logo-categories> */
        figureCategory.innerHTML = `
        <img class="categoryIcon categoryName" src="../../images/svg/categorias/${ element.imagen }" alt="logo-categories" data-id=${element.idCategory} data-total=${element.totalPosts}>
        <div class="content-category">
            <span class="text-category categoryName" id="textCategory-${element.idCategory}" data-id=${element.idCategory} data-total=${element.totalPosts}> ${ element.nameCategory } </span>
            <p class="text-muted" id="category-${element.idCategory}">  ${ element.totalPosts } post</p>
        </div>
        `
        categories.appendChild(figureCategory);
    });
}
const addEventShowCategories = () => {
    const spanAllCategories = document.querySelector('#span-all-categories');
    spanAllCategories.addEventListener('click', () => {
        getObjectAllPosts(); //Entonces volvemos a Cargar Todos los Posts - 'Ver Todos'
        console.log(spanAllCategories, 'spanAllCategories preueba 1')
    });

    const allCategoriesName = document.querySelectorAll('.categoryName');
    allCategoriesName.forEach(span => {
        span.addEventListener('click', async(e) => {
            console.log(span, 'event click')
            const idSpanCategory = e.target.dataset.id;
            const totalPosts = e.target.dataset.total;
            const spanCategory = document.querySelector('#textCategory-' + idSpanCategory);
            const textCategory = spanCategory.innerHTML;
            const objectPosts = [];
            const idUserAuth = localStorage.getItem('iduser');
            const allUsers = JSON.parse(window.localStorage.getItem('allUsers'));
            await getPostByCategory(idSpanCategory)
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const userByPost = allUsers.find(element => element.idUser === doc.data().idUser);
                        objectPosts.push({
                            idPost: doc.id,
                            idUser: doc.data().idUser,
                            nameUser: userByPost.nameUser,
                            photoUser: userByPost.photoUser,
                            contentPost: doc.data().contentPost,
                            datePost: doc.data().datePost.toDate().toDateString(),
                            nameImage: doc.data().nameImage,
                            arrLikes: doc.data().arrLikes,
                            publicPosts: doc.data().publicPosts,
                            totalComments: doc.data().totalComents,
                            image: doc.data().image,
                            idCategory: doc.data().idCategory,
                            nameCategory: textCategory,
                            urlImage: doc.data().urlImage,
                            arrComments: doc.data().arrComments

                        })
                    })

                    if (objectPosts.length == 0) {
                        alerts('info', 'No hay posts para mostrar')
                    } else {
                        const dataPublic = objectPosts.filter(element => element.publicPosts == 'true' || element.idUser == idUserAuth);
                        const containerPost = document.querySelector('#container-posts');
                        if (dataPublic.length == 0) {
                            alerts('info', 'Los ' + objectPosts.length + ' posts son privados.')
                        } else {
                            const totalPrivate = parseInt(totalPosts) - dataPublic.length;
                            console.log(totalPrivate, 'totalPrivate');
                            if (totalPrivate > 0) { //esto quiere decir que total de posts puede que halla mas de privado.
                                alerts('info', 'No se mostraran ' + totalPrivate + ' por que son privados');
                            }
                            containerPost.innerHTML = "";
                            loadViewPost(dataPublic, containerPost);
                        }
                    }


                })
        })
    });

}

export { loadViewCategory, addEventShowCategories }