
const readCategory = () => {
    const categories = document.querySelector('#categories');
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    db.collection("categories")
    .get()
    .then( response => {
    response.forEach( doc => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      const figureCategory = document.createElement('figure');
      figureCategory.classList.add('category');
      figureCategory.innerHTML = `
        <img src="../../images/svg/categorias/${ doc.data().imagen }" alt="logo-categories">
        <div class="content-category">
            <h4> ${ doc.data().category } </h4>
            <p class="text-muted">  ${ doc.data().totalPosts } post</p>
        </div>
      `
      categories.appendChild(figureCategory);
    });
});
 
}

export { readCategory }