const loadViewModal = () => {
    const viewModal = document.querySelector('#modal-contenido');
    viewModal.innerHTML = `
        <section class="content-modal">
            <section class="head-modal">
                <span> </span>
                <h3 id="title-modal"> </h3>
                <button class="btn btn-cerrar-modal"> X </button> 
            </section>
            
            <section class="body-modal">
                <form action="#" class="form" id="form-create-post">
                    <input type="hidden" id="input-idpost">
                    <input type="hidden" id="input-urlpost">
                    <input type="hidden" id="input-nameImage">
                    <section class="select-group">
                        <section class="user-info-textarea"> </section>
                        
                        <select name="select" class="select" id="select-categories" required>
                            <option value="" id="" disabled="true" selected> Seleccione categoría... </option>
                            <option value="1" id="1"> Programación </option>
                            <option value="2" id="2"> Idiomas </option>
                            <option value="3" id="3"> Manualidades </option>
                            <option value="4" id="4"> Diseño Gráfico </option>
                            <option value="5" id="5"> Educación </option>
                            <option value="6" id="6"> Ventas </option>
                            <option value="7" id="7"> Animación </option>
                            <option value="8" id="8"> Soft Skills </option>
                            <option value="9" id="9"> Otros </option>
                        </select>
                    </section>
                    <select name="select" id="select-public" class="dropdownModal">
                    <option value='true'> &#xf0ac; </option>
                    <option value='false'> &#xf023; </option>
                    </select>

                    <section class="textarea-group">
                        <textarea class="textarea-post" id="post-user" row="4" required></textarea>
                    </section>
                    <section class="emoji-group" id="emoji-group"> </section>
                    <section class="reaction-post-group">
                        <section class="image-upload">
                            <label for="file-input">
                                <i class="fas fa-images"></i>
                            </label>
                            <input type="file" id="file-input" name="file-input" accept="image/*">
                            <section class="name-image-upload"> </section>

                        </section>
                        <img src="../images/svg/carita.png" class="smile" alt="icon-face" width="20" height="20">
                    </section>
                    <button type="submit" class="btn btn-create-post" id="share-post"> Publicar </button>
                </form>
            </section>
        </section>
    `;
}

export { loadViewModal }