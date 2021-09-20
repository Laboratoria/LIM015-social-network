const loadViewModal = () => {
    const viewModal = document.querySelector('#modal-contenido');
    viewModal.innerHTML = `
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
    `;
}

export { loadViewModal }