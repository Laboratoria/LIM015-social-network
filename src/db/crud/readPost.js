const readPost = () => {
    const containerPost = document.querySelector('#container-posts');
    document.querySelector('body').style = 'backgorund:#f7f7f7;'
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = ` 
            <div class="post-header header">
                <div class="header-left">
                    <a href="#">
                        <img src="../images/post/author-pic.jpg" class="post-author-pic">
                    </a>
                    <div class="post-author author">
                        <span class="author-name"><a href="#">Mark Zuckerberg</a></span>
                    </div>
                    <span class="post-date">10 Agosto, 2021</span>
                </div>

                <div class="header-right">
                    <div class="post-category">
                        <span class="badge badge-secondary">Programacion</span>
                    </div>
                </div>
            </div>

            <div class="post-content">
                <p class="content-paragraph">
                    Alguien ha tomado el curso de MongoDB de cero a experto de Edteam? Cual fue su experiencia, ya que estoy en duda si compralo o no ?
                </p>
                <img src="../images/post/mongo-db.png" class="content-image">
            </div>

            <div class="post-footer footer">

                <div class="footer-reactions reactions">
                    <button type="button" class="btn-post btn-notlike"><i class="far fa-heart"></i> <span class="count-reaction">3</span></button>
                    <button type="button" class="btn-post btn-notcomment btn-comment"><i class="far fa-comment-dots"></i> <span class="count-reaction"></span>3</span></button>
                    <button type="button" class="btn-post btn-notsave"><i class="far fa-bookmark"></i> <span class="count-reaction"></span>3</span></button>
                </div>

                <div class="footer-comments comments">
                    <div class="comments-box box">
                        <div class="box-profile profile">
                            <img src="../images/post/profile-pic.jpg" class="profile-pic">
                        </div>
                        <div class="box-bar bar">
                            <input type="text" placeholder="Escribe un comentario..." class="bar-input">
                        </div>
                        <div class="public-comment">
                            <a href="#" type="submit">Publicar</a>
                        </div>
                    </div>
                    <div class="comments-friend-comment friend-comment">
                        <img src="../images/post/friend-pic.jpg" class="friend-comment-pic">
                        <div class="friend-comment-comment comment">
                            <a href="#" class="comment-author">Justin Miller</a>
                            <span class="comment-content">
                                El contenido está bien estructurado, pero necesita mejorar los esquemas relacionados con los ejemplos, ya que son muy complejos y poco comprensibles para alguien que va iniciando.
                            </span>
                        </div>
                    </div>
                </div>
        </div>
            `
    containerPost.appendChild(post);
}

export { readPost }