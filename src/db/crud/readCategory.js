 const allCategories = () => {
     // eslint-disable-next-line no-undef
     const db = firebase.firestore();
     const objectCategories = [];
     return db.collection("categories")
         .get()
         .then(response => {
             response.forEach(doc => {
                 objectCategories.push({
                     idCategory: doc.id,
                     nameCategory: doc.data().category,
                     imagen: doc.data().imagen,
                     totalPosts: doc.data().totalPosts
                 })
             });
             localStorage.setItem('allCategories', objectCategories)
             return objectCategories;
         });
 }

 const readCategory = async() => {
     const categories = document.querySelector('#categories');
     const allCategoriesCourse = await allCategories().then(response => response);
     allCategoriesCourse.forEach(element => {
         const figureCategory = document.createElement('figure');
         figureCategory.classList.add('category');
         figureCategory.innerHTML = `
        <img src="../../images/svg/categorias/${ element.imagen }" alt="logo-categories">
        <div class="content-category">
            <h4> ${ element.nameCategory } </h4>
            <p class="text-muted">  ${ element.totalPosts } post</p>
        </div>
      `
         categories.appendChild(figureCategory);
     })
 }

 export { readCategory, allCategories }