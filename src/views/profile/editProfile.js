const loadEditModal = () => {
    return `
    <section class="content-modal content-modal-edit-profile">
        <section class="head-modal">
            <span> </span>
            <h3 id="title-modal"> </h3>
            <button class="btn btn-cerrar-modal"> X </button> 
        </section>

        <section class="body-modal">
            <form action="#" class="form" id="form-edit-profile">

                <section class="container-image-user-profile">
                    <section class="image-upload container-image-upload-user" >
                        <section class="container-preview-image">
                            <img class=" img-user-edit" id="preview-edit-photoUser"/>
                        </section>
                        <label for="file-input-user"> <i class="fas fa-edit"></i> </label>
                        <input type="file" id="input-file-photoUser" name="file-input-user" accept="image/*">
                    </section>
                </section>

                <section class="container-image-cover-profile">
                    <section class="image-upload container-image-upload-cover" >
                        <section class="container-preview-image">
                            <img class="image-preview img-cover-edit" id="preview-edit-photoCover"/>
                        </section>
                        <label for="file-input"> <i class="fas fa-edit"></i> </label>
                        <input type="file" id="input-file-photoCover" class="input-file-photoCover" name="file-input" accept="image/*">
                    </section>
                </section>

                <section class="form-group">
                    <label class="form-label"> Nombre Completo </label>
                    <input id="name-edit" type="text" class="form-input" autocomplete="off">
                    <span id="msg-nameUser" class="msg"></span>
                </section>

                <section class="form-group">
                    <label class="form-label">Correo Electrónico</label>
                    <input id="email-edit" type="email" class="form-input" disabled>
                </section>

                <section class="form-group">
                    <label class="form-label"> Descripción </label>
                    <textarea class="textarea-description" id="textarea-description" row="3" placeholder="¡Cuéntanos más sobre ti, queremos conocerte!" maxlength="70"></textarea>
                </section>

                <section class="group-btn-edit-profile">
                    <button type="reset" id="btn-cancel-edit-profile" class="form-submit btn btn-default"> Borrar todo </button>
                    <button type="submit" id="btn-edit-profile" class="form-submit btn btn-info"> Guardar Cambios</button>
                </section>
                
            </form>
        </section>
    </section>
    `;
}

export { loadEditModal }