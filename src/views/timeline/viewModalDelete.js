export const loadViewModalDelete = () =>{
    const modalDetele = document.querySelector('#modal-contenido-delete');
    modalDetele.innerHTML=`
    <section class="content-modal-delete">
            <section class="head-modal">
                <span> </span>
                <h3> Advertencia </h3>
                <button class="btn btn-cerrar-modal-delete"> X </button> 
            </section>
            <section class="body-modal">
                    <section class="section-body-delete"> 
                        <div> 
                        <p> ¿Estas seguro de eliminar este posts?, esta accion es irreversible</p>
                        </div>
                    </section>
                   
                    <button type="button" class="btn btn-delete-post" id="confirm-delete"> Eliminar </button>
                    
            </section>
            </br>
        </section>`;
}