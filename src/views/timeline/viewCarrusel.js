const loadViewPopularPost = () => {
    const popularPost = document.querySelector('#popularPost');
    popularPost.innerHTML = `
     <h2>Popular <span>Posts</span> </h2>
     <section class="popular-posts">
       
     </section>
    `;
}


export { loadViewPopularPost }