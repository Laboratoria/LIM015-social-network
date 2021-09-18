import { animationPopularPost } from './animation.js';
import { modal } from './content-modal.js';
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
            
            <span class="spanArrow">
                <i class="fas fa-chevron-circle-left designIcon-left"></i></i>
            </span>

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
            <span class="spanArrow">
                <i class="fas fa-chevron-circle-right designIcon-right"></i></i>
            </span>
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
                    <h3> Crear publicación </h3>
                    <button class="btn btn-cerrar-modal"> X </button> 
                </section>

                <section class="body-modal">

                    <section class="select-group">
                        <section class="user-info-textarea"> </section>
                        
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

                    <form action="#" class="form" id="form-create-post">
                        <section class="textarea-group">
                            <textarea class="textarea-post" id="post-user" row="4"></textarea>
                        </section>

                        <section class="emoji-group" id="emoji-group"> </section>

                        <section class="reaction-post-group">
                            <section class="image-upload">
                                <label for="file-input">
                                    <i class="fas fa-images"></i>
                                </label>
                                <input type="file" id="file-input" name="file-input" accept="image/*">
                            </section>
                            <img src="../images/svg/carita.png" class="smile" alt="icon-face" width="20" height="20">
                        </section>
                        
                        <button type="submit" class="btn btn-create-post" id="share-post"> Publicar </button>
                    </form>

                </section>
            </section>
        </section>
    </section>
    `;
    /** Modal para crear nuevo post **/
    modal(viewTimeLine)
    /** Leer el archivo subido en input file **/
    const inputFile = viewTimeLine.querySelector('#file-input');
    inputFile.addEventListener('change', () => {
        let uploadImage;
        if (inputFile.files && inputFile.files[0]) {
            uploadImage = inputFile.files[0].name;
            console.log(uploadImage)
        }
    
    })

    /* CARRUSEL DEL POPULAR POSTS */
    animationPopularPost(viewTimeLine)

    return viewTimeLine;
}