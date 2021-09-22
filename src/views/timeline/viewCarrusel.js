const topPopularPosts = () => {
    const objectAllPosts = JSON.parse(window.localStorage.getItem('allPosts'));
    const orderedObject = objectAllPosts.sort((post1, post2) =>  post2.totalLikes - post1.totalLikes );
    const topSix = orderedObject.slice(0, 6) // Extraemos los seis post con más likes
    return topSix;
}

const loadViewPopularPost = () => {
    const orderedObject = topPopularPosts()
    const sliderPost = document.querySelector('.slider');
    console.log(sliderPost)
    orderedObject.forEach(element => {
        const cardPost = document.createElement('figure');
        cardPost.classList.add('card-post')
        cardPost.innerHTML = `
            <div class="head-popularPosts">
                <div class="imgUser">
                    <a href="#">
                    ${(/^(http|https):\/\/[^ "]+$/.test(element.photoUser)) ? 
                    `<img src="${element.photoUser}" alt="" class="post-author-pic">` 
                    : `<img src="../images/profile/${element.photoUser}" class="post-author-pic">`} 
                    </a>
                </div>
                <div class="name-hours">
                    <h5><span class="author-name"><a href="#"> ${element.nameUser} </a></span></h5>
                    <p <span class="post-date">${element.datePost}</span> </p>
                </div>
                <div class="heart-number">
                    <i class="fab fa-gratipay heart"></i>
                    <p> ${element.totalLikes > 0 ? element.totalLikes : ""} </p>
                </div>
            </div>
            <div class="text-content">
                <p class="p-posts"> ${element.contentPost.substring(0, 55)}... </p>
            </div>
            <div class="box-plus">
                <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
            </div>
        `
        sliderPost.appendChild(cardPost);
    })
    return sliderPost;
}

export { loadViewPopularPost  }