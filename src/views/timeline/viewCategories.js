import { getAllCategories } from '../../db/firestore.js';
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
        figureCategory.innerHTML = `
       <img src="../../images/svg/categorias/${ element.imagen }" alt="logo-categories">
       <div class="content-category">
           <a class="text-category" href="#"> ${ element.nameCategory } </a>
           <p class="text-muted" >  ${ element.totalPosts } post</p>
       </div>
     `
        categories.appendChild(figureCategory);
    })
}

export { loadViewCategory }