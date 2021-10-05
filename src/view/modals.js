import {deletePosts} from "../firebase/fb-firestore.js";


const modalProfile = () => {
    const ContentModalProfile = /*html*/`
    <section class="modalContent modalContent--verification">
        <div class="headerModal">
        <span class="closeModal">&times;</span>
        </div>
        <div class="bodyModal">
            <div class="logo">
             <img  alt="makipuraLogo" class="logoModalProfile"  src="./img/logoMobilPrueba.png" >
            </div>
            <form action="" class="form_modalProfile form_modalProfile">
            <div class=" profileInputs">
             <label for="userName"> Nombres y apellidos </label>
             <input type="text" class="inputs" name="userName" id="userName" placeholder="Ingrese sus nombres y apellidos" required>
             </div>
             <div class="profileInputs">
             <label for="starUpName">Nombre del emprendimiento</label>
             <input type="text=" class= "inputs" name="starUpName" id="starUpName" placeholder="Ingrese el nombre de su emprendimiento">
             </div>

             <label for="" class="informLabel"> Contacto</label>
             <div class="inputContacto">
                <div class="inputContacto_inputsLabels">
                <label for="phoneUser"> Celular:</label>
                <input type="number" class="inputs" name="phoneOfUser" id="phoneOfUser" placeholder="123456789">
                </div>

                <div class=" inputContacto_inputsLabels">
                <label for="emailUser">Correo:</label>
                <input type="text" class="inputs" name="emailOfUser" id="emailOfUser" placeholder="ejemplo@gmail.com">
                </div>
                
                <div class=" inputContacto_inputsLabels">
                <label for="addressUser">Ubicación</label>
                <input type="text" class="inputs" name="addressOfUser" id="addressOfUser" placeholder="Lince, Lima">
                </div>

             </div>
             <label for="informationStarUp" class="informLabel" >Información</label>
             <textarea name="informationStarUp" id="informationStarUp"  class=" inputs textareaProfileModal" cols="30" rows="5"></textarea>
             
             <div class="btnModalProfile">
             <button class="button button--second " id="closeModalProfile">Cancelar</button>
             <button class="button button--main " id="saveModalProfile">Guardar</button>
            </div>

            </form>
         </div>
    </section>`
    const sectionModalProfile=document.createElement('section');
    sectionModalProfile.classList.add('modalContainer');
    sectionModalProfile.classList.add('modalContainerProfile');

    
    sectionModalProfile.innerHTML=ContentModalProfile;

    const closeModal=sectionModalProfile.querySelector('.closeModal');
    console.log(closeModal);

    closeModal.addEventListener('click', () => {
        sectionModalProfile.style.display="none"; 
        window.open("#/profile", "_self"); 
        
    })

    return sectionModalProfile;

}






const modalRegisterVerification = (email) => {
     const modalContent  = /*html*/`
     <div class="modalContent modalContent--verification">
        <span class="closeModal">&times;</span>
        <h1>¡Solo te falta un paso para terminar tu registro!</h1>
        <p>Hemos enviado un correo a:</br><span>${email}</span></p>
        <p>Por favor revise su correo y haga click en el link dentro del mensaje.</p>  
     </div>
     `
    const modalContainer=document.createElement('section');
    modalContainer.classList.add('modalContainer');
    modalContainer.classList.add('modalContainer--verification');
    modalContainer.innerHTML=modalContent;

    const closeModal=modalContainer.querySelector('.closeModal');
    closeModal.addEventListener('click', () => {
        window.open("#", "_self");   
    })

    return modalContainer;
}



const modalDelete = (selection) => {
    console.log("mostrando modal");
    
    const modalContentDelete  = /*html*/`
    <div class="modalContent modalContent--verification">
       <span class="closeModal">&times;</span>
       <h1>¿Estás seguro de eliminar tu post?</h1>
       <div class="btnOpcionDelete">
       <button class="btn-post btnOpcionModal " id='btn-No'  >No</button>
       <button class="btn-post  btnOpcionModal" id='btn-Yes'  >SI</button>
       </div>
        </div>
    `
   const modalContainerDelete=document.createElement('section');
   modalContainerDelete.classList.add('modalContainer');
   modalContainerDelete.classList.add('modalContainer--verification');
   modalContainerDelete.innerHTML=modalContentDelete;

   const closeModal=modalContainerDelete.querySelector('.closeModal');
   const btnNo= modalContainerDelete.querySelector('#btn-No');

   const btnYes= modalContainerDelete.querySelector('#btn-Yes');

   closeModal.addEventListener('click', () => {
    modalContainerDelete.style.display="none";
   })

   btnNo.addEventListener('click', () => { 
    modalContainerDelete.style.display="none";
   });

   btnYes.addEventListener('click',async () => { 
       console.log("eliminado comentario");
    await deletePosts(selection)
    modalContainerDelete.style.display="none";
   });

   return modalContainerDelete;
}





export {modalProfile, modalRegisterVerification,modalDelete};