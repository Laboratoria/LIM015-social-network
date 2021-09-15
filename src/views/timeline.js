import {animationPopularPost} from './animation.js';
export default () => {
    const viewTimeLine = document.createElement('div');
    viewTimeLine.className = 'container-home';
    viewTimeLine.innerHTML = `
    <section class="container-section-categories">
        <section class="titles-categories">
            <h3>Categorías</h3>
            <h3>Ver Todos</h3>
        </section>
        <section class="categories" id="categories"> </section>             
    </section>

    <section class="container-section-post">
        <section class="container-popular-posts">
            <h2>Popular <span>Posts</span> </h2>
            
            <span class="spanArrow"><i class="fas fa-chevron-circle-left designIcon-left"></i></i></span>
            <section class="popular-posts">
        
                <section class="card-post">
                    <div class="head-popularPosts">
                            <div class="imgUser">
                                <img src="images/imgPopularPosts/Ellipse 1.png" alt="">
                            </div>
                            <div class="name-hours">
                                <h5>Brax Mendez</h5>
                                <p class="horas-Posts">10 horas</p>
                            </div>
                           <div class="heart-number">
                                <i class="fab fa-gratipay heart"></i>
                                <p>45</p>
                            </div>
                    </div>
                        <p class="p-posts">90% de descuento Udemy en Curso de Laravel y MySql...</p>
                    <div class="box-plus">
                        <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
                    </div>
                </section>


                <section class="card-post">
                    <div class="head-popularPosts">
                            <div class="imgUser">
                                <img src="images/imgPopularPosts/popular2.png" alt="">
                            </div>
                            <div class="name-hours">
                                <h5>Elohin Fuentes</h5>
                                <p class="horas-Posts">7 horas</p>
                            </div>
                           <div class="heart-number">
                                <i class="fab fa-gratipay heart"></i>
                                <p>42</p>
                            </div>
                    </div>
                        <p class="p-posts">Curso Gratis de Vue.js en Platzi disponible por 24h...</p>
                    <div class="box-plus">
                        <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
                    </div>
                </section>

                <section class="card-post">
                    <div class="head-popularPosts">
                            <div class="imgUser">
                                <img src="images/imgPopularPosts/popular3.png" alt="">
                            </div>
                            <div class="name-hours">
                                <h5>Anderson H.</h5>
                                <p class="horas-Posts">5 horas</p>
                            </div>
                           <div class="heart-number">
                                <i class="fab fa-gratipay heart"></i>
                                <p>45</p>
                            </div>
                    </div>
                        <p class="p-posts">Curso Taller de Facturación Electronica con PHP y ....</p>
                    <div class="box-plus">
                        <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
                    </div>
                </section>

                <section class="card-post">
                    <div class="head-popularPosts">
                            <div class="imgUser">
                                <img src="images/imgPopularPosts/popular4.png" alt="">
                            </div>
                            <div class="name-hours">
                                <h5>Marta Vega</h5>
                                <p class="horas-Posts">2 horas</p>
                            </div>
                           <div class="heart-number">
                                <i class="fab fa-gratipay heart"></i>
                                <p>32</p>
                            </div>
                    </div>
                        <p class="p-posts">Alguien ha tomado el curso de...</p>
                    <div class="box-plus">
                        <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
                    </div>
                </section>

                <section class="card-post">
                    <div class="head-popularPosts">
                            <div class="imgUser">
                                <img src="images/imgPopularPosts/Ellipse 1.png" alt="">
                            </div>
                            <div class="name-hours">
                                <h5>Brax Mendez</h5>
                                <p class="horas-Posts">10 horas</p>
                            </div>
                           <div class="heart-number">
                                <i class="fab fa-gratipay heart"></i>
                                <p>45</p>
                            </div>
                    </div>
                        <p class="p-posts">90% de descuento Udemy en Curso de Laravel y MySql...</p>
                    <div class="box-plus">
                        <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
                    </div>
                </section>

                <section class="card-post">
                    <div class="head-popularPosts">
                            <div class="imgUser">
                                <img src="images/imgPopularPosts/popular2.png" alt="">
                            </div>
                            <div class="name-hours">
                                <h5>Elohin Fuentes</h5>
                                <p class="horas-Posts">7 horas</p>
                            </div>
                           <div class="heart-number">
                                <i class="fab fa-gratipay heart"></i>
                                <p>42</p>
                            </div>
                    </div>
                        <p class="p-posts">Curso Gratis de Vue.js en Platzi disponible por 24h...</p>
                    <div class="box-plus">
                        <img src="images/imgPopularPosts/plus.png" alt="" class="plus">
                    </div>
                </section>
            </section>   
            <span class="spanArrow"><i class="fas fa-chevron-circle-right designIcon-right"></i></i></span>
        </section>

        <section class="create-publication">
            <button class="btn btn-create-post">Crear Publicación <i class="fas fa-plus-circle"></i> </button>
        </section>

        <section class="container-post" id="container-posts">
        </section>
        </br>
        
    </section>

    <section class="modal hide">
        <section class="backdrop"> 
            <section class="content-modal">

                <section class="head-modal">
                    <span> </span>
                    <span> Crear publicación </span>
                    <button class="btn btn-cerrar-modal"> X </button> 
                </section>

                <section class="body-modal">

                    <section class="select-group">
                        <section class="user-info-textarea">

                        </section>
                        
                        <select name="select" class="select" id="select-categories">
                            <option value="" id="" disabled="true" selected> Seleccione categoría... </option>
                            <option value="programacion" id="1"> Programación </option>
                            <option value="idiomas" id="2"> Idiomas </option>
                            <option value="manualidades" id="3"> Manualidades </option>
                            <option value="disenografico" id="4"> Diseño Gráfico </option>
                            <option value="educacion" id="5"> Educación </option>
                            <option value="ventas" id="6"> Ventas </option>
                            <option value="animacion" id="7"> Animación </option>
                            <option value="skill" id="8"> Soft Skills </option>
                            <option value="otros" id="9"> Otros </option>
                        </select>
                    </section>
                    
                    <section class="textarea-group">
                        <textarea class="textarea-post" id="post-user" row="4"></textarea>
                    </section>

                    <section class="emoji-group">
                        <span class="emoji" id="emoji1"> &#128512; </span> 
                        <span class="emoji" id="emoji2"> &#128513; </span> 
                        <span class="emoji" id="emoji3"> &#128514; </span> 
                        <span class="emoji" id="emoji4"> &#128515; </span> 
                        <span class="emoji" id="emoji5"> &#128516; </span> 
                        <span class="emoji" id="emoji6"> &#128517; </span> 
                        <span class="emoji" id="emoji7"> &#128518; </span> 
                        <span class="emoji" id="emoji8"> &#128519; </span> 
                        <span class="emoji" id="emoji9"> &#128520; </span> 
                        <span class="emoji" id="emoji10"> &#128521; </span> 
                        <span class="emoji" id="emoji11"> &#128522; </span> 
                        <span class="emoji" id="emoji12"> &#128523; </span> 
                        <span class="emoji" id="emoji13"> &#128524; </span> 
                        <span class="emoji" id="emoji14"> &#128525; </span> 
                        <span class="emoji" id="emoji15"> &#128526; </span> 
                        <span class="emoji" id="emoji16"> &#128527; </span> 
                        <span class="emoji" id="emoji17"> &#128528; </span> 
                        <span class="emoji" id="emoji18"> &#128529; </span> 
                        <span class="emoji" id="emoji19"> &#128530; </span> 
                        <span class="emoji" id="emoji20"> &#128531; </span> 
                        <span class="emoji" id="emoji21"> &#128532; </span> 
                        <span class="emoji" id="emoji22"> &#128533; </span> 
                        <span class="emoji" id="emoji23"> &#128534; </span> 
                        <span class="emoji" id="emoji24"> &#128535; </span> 
                        <span class="emoji" id="emoji25"> &#128536; </span> 
                        <span class="emoji" id="emoji26"> &#128537; </span> 
                        <span class="emoji" id="emoji27"> &#128538; </span> 
                        <span class="emoji" id="emoji28"> &#128539; </span> 
                        <span class="emoji" id="emoji29"> &#128540; </span> 
                        <span class="emoji" id="emoji30"> &#128541; </span> 
                        <span class="emoji" id="emoji31"> &#128542; </span> 
                        <span class="emoji" id="emoji31"> &#128543; </span> 
                        <span class="emoji" id="emoji31"> &#128544; </span> 
                        <span class="emoji" id="emoji31"> &#128545; </span> 
                        <span class="emoji" id="emoji31"> &#128546; </span> 
                        <span class="emoji" id="emoji31"> &#128547; </span> 
                        <span class="emoji" id="emoji31"> &#128548; </span> 
                        <span class="emoji" id="emoji31"> &#128549; </span> 
                        <span class="emoji" id="emoji31"> &#128550; </span>                     
                        <span class="emoji" id="emoji31"> &#128551; </span>                     
                    
                    </section>

                    <section class="reaction-post-group">
                        <section class="reaction-post">
                            <button class="btn btn-notlike" id="share-post"> <i class="far fa-heart"></i> </button>
                            <button class="btn btn-notcomment" id="share-post"> <i class="far fa-comment-dots"></i> </button>
                            <button class="btn btn-notsave" id="share-post"> <i class="far fa-bookmark"></i> </button>
                        </section>
                        <img src="../images/svg/carita.png" class="smile" alt="icon-face" width="20" height="20">
                    </section>

                </section>

            <button class="btn btn-create-post" id="share-post"> Publicar </button>

            </section>
        </section>
    </section>
    `;
    const modal = viewTimeLine.querySelector('.modal');
    const btnCreatePost = viewTimeLine.querySelector('.btn-create-post');
    const btnCerrarModal = viewTimeLine.querySelector('.btn-cerrar-modal');
    const btnEmoji = viewTimeLine.querySelector('.smile');
    const emojiGroup = viewTimeLine.querySelector('.emoji-group');
    const emojiList = viewTimeLine.getElementsByClassName('emoji');
    const textarea = viewTimeLine.querySelector('#post-user')

    btnCreatePost.addEventListener('click', openModal);
    btnCerrarModal.addEventListener('click', cerrarModal);
    btnEmoji.addEventListener('click', openEmojiGroup);
    textarea.addEventListener('click', cerrarEmojiGroup);

    function openModal() {
        modal.classList.add('revelar')
    }

    function cerrarModal() {
        modal.classList.remove('revelar')
    }

    /* CARRUSEL DEL POPULAR POSTS */
    let span = viewTimeLine.getElementsByClassName('spanArrow');
    let product = viewTimeLine.getElementsByClassName('card-post');
    animationPopularPost(span, product)


    function openEmojiGroup() {
        emojiGroup.classList.add('show-emojis')
    }

    for (let index = 0; index < emojiList.length; index++) {
        const element = emojiList[index];
        element.addEventListener('click', () => {
            insertEmoji(element.id);
        })
    }
 
    function insertEmoji (idEmoji) {
        const emojiSelected = viewTimeLine.querySelector(`#${idEmoji}`);
        textarea.value += emojiSelected.innerHTML;
    }

    function cerrarEmojiGroup () {
        emojiGroup.classList.remove('show-emojis');
    }

    return viewTimeLine;
}