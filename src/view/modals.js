import { deletePosts, infoData, updateUser } from "../firebase/fb-firestore.js";


const modalProfile = () => {
    const sectionModalProfile = document.createElement('section');
    sectionModalProfile.classList.add('modalContainer');
    sectionModalProfile.classList.add('modalContainerProfile');
    const modalUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                infoData(user.uid, (data) => {
                    templateModalProfile(data);
                })
            }
            const templateModalProfile = (userObject) => {
                const idUser = userObject.ProfileId;
                const ContentModalProfile = /*html*/`
                <section class="modalContent modalContent--profile">
                    <div class="headerModal">
                    <span class="closeModal" id="closeMP">&times;</span>
                    </div>
                    <div class="bodyModal">
                        <div class="containerLogoModalProfile">
                         <img  alt="makipuraLogo" class="logoModalProfile"  src="./img/logoMobilPrueba.png" >
                        </div>
                        <form action="" class="form_modalProfile form_modalProfile">
                        <div class=" profileInputs">
                         <label for="userName"> Nombres y apellidos </label>
                         <div class="profileNameAndLastName">
                         <input type="text" class="inputs inputsA" name="userName" id="userNameMP" placeholder="Ingrese sus nombres"  value="${userObject.userName}">
                         <input type="text" class="inputs inputsA" name="userLastName" id="userLastNameMP" placeholder="Ingrese sus apellidos"  value="${userObject.userLastname}">
                         </div>
                         </div>
                         <div class="profileInputs">
                         <label for="starUpName">Nombre del emprendimiento</label>
                         <input type="text=" class= "inputs inputsA" name="starUpName" id="companyNameMP" placeholder="Ingrese el nombre de su emprendimiento" value="${userObject.userCompany}">
                         </div>
            
                         <label for="" class="informLabel"> Contacto</label>
                         <div class="inputContacto">
                            <div class="inputContacto_inputsLabels">
                            <label for="phoneUser"> Celular:</label>
                            <input type="number" class="inputs inputsB" name="phoneOfUser" id="phoneOfUserMP" placeholder="123456789" value="${userObject.userPhone}">
                            </div>
            
                            <div class=" inputContacto_inputsLabels">
                            <label for="emailUser">Correo:</label>
                            <input type="text" class="inputs inputsB" name="emailOfUser" id="emailOfUserMP" placeholder="ejemplo@gmail.com" value="${userObject.userEmail}" readonly>
                            </div>
                            
                            <div class=" inputContacto_inputsLabels">
                            <label for="addressUser">Ubicación</label>
                            <input type="text" class="inputs inputsB" name="addressOfUser" id="addressOfUserMP" placeholder="mi ubicación" value="${userObject.userLocation}">
                            </div>
            
                         </div>
                         <div class="inputsA">
                         <label for="informationStarUp" class="informLabel" >Información</label>
                         <textarea name="informationStarUp" id="informationCompanyMP"  class=" inputs textareaProfileModal " cols="30" rows="5" placeholder="detalla tu emprendimiento">${userObject.userDescription}</textarea>
                         </div>
                         <div class="btnModalProfile">
                         <button class="button button--second " id="cancelMP">Cancelar</button>
                         <button class="button button--main " id="saveMP">Guardar</button>
                        </div>
            
                        </form>
                     </div>
                </section>`
                sectionModalProfile.innerHTML = ContentModalProfile;
                const closeMP = sectionModalProfile.querySelector('#closeMP');
                const cancelMP = sectionModalProfile.querySelector('#cancelMP');
                const saveMP = sectionModalProfile.querySelector('#saveMP');
                cancelMP.addEventListener("click", () => {
                    sectionModalProfile.style.display = "none";
                })
                saveMP.addEventListener("click", async (e) => {
                    try {
                        e.preventDefault()
                        const usernameMP = sectionModalProfile.querySelector('#userNameMP').value;
                        const userLastNameMP = sectionModalProfile.querySelector('#userLastNameMP').value;
                        const companyNameMP = sectionModalProfile.querySelector('#companyNameMP').value;
                        const phoneOfUserMP = sectionModalProfile.querySelector('#phoneOfUserMP').value;
                        //const emailOfUserMP =sectionModalProfile.querySelector('#emailOfUserMP').value;
                        const addressOfUserMP = sectionModalProfile.querySelector('#addressOfUserMP').value;
                        const informationCompanyMP = sectionModalProfile.querySelector('#informationCompanyMP').value;
                        const updatedUser = {
                            userName: usernameMP.toLowerCase(),
                            userLastname: userLastNameMP.toLowerCase(),
                            //userEmail:emailOfUserMP,
                            userPhone: phoneOfUserMP,
                            userCompany: companyNameMP,
                            userLocation: addressOfUserMP,
                            userDescription: informationCompanyMP
                        }
                        console.log(updatedUser);
                        await updateUser(idUser, updatedUser);
                        sectionModalProfile.style.display = "none";
            
                    } catch (error) {
                        console.error(error)
                    }
            
                })
                console.log(closeMP);
                closeMP.addEventListener('click', () => {
                    sectionModalProfile.style.display = "none";
                })
            }
        })
    }
    modalUser()
    return sectionModalProfile;

}



const modalRegisterVerification = (email) => {
    const modalContent = /*html*/`
     <div class="modalContent modalContent--verification">
        <span class="closeModal">&times;</span>
        <h1>¡Solo te falta un paso para terminar tu registro!</h1>
        <p>Hemos enviado un correo a:</br><span>${email}</span></p>
        <p>Por favor revise su correo y haga click en el link dentro del mensaje.</p>  
     </div>
     `
    const modalContainer = document.createElement('section');
    modalContainer.classList.add('modalContainer');
    modalContainer.classList.add('modalContainer--verification');
    modalContainer.innerHTML = modalContent;

    const closeModal = modalContainer.querySelector('.closeModal');
    closeModal.addEventListener('click', () => {
        window.open("#", "_self");
    })

    return modalContainer;
}



const modalDelete = (selection) => {
    console.log("mostrando modal");

    const modalContentDelete = /*html*/`
    <div class="modalContent modalContent--verification">
       <span class="closeModal">&times;</span>
       <h1>¿Estás seguro de eliminar tu post?</h1>
       <div class="btnOpcionDelete">
       <button class="btn-post btnOpcionModal " id='btn-No'  >No</button>
       <button class="btn-post  btnOpcionModal" id='btn-Yes'  >SI</button>
       </div>
        </div>
    `
    const modalContainerDelete = document.createElement('section');
    modalContainerDelete.classList.add('modalContainer');
    modalContainerDelete.classList.add('modalContainer--verification');
    modalContainerDelete.innerHTML = modalContentDelete;

    const closeModal = modalContainerDelete.querySelector('.closeModal');
    const btnNo = modalContainerDelete.querySelector('#btn-No');

    const btnYes = modalContainerDelete.querySelector('#btn-Yes');

    closeModal.addEventListener('click', () => {
        modalContainerDelete.style.display = "none";
    })

    btnNo.addEventListener('click', () => {
        modalContainerDelete.style.display = "none";
    });

    btnYes.addEventListener('click', async () => {
        console.log("eliminado comentario");
        await deletePosts(selection)
        modalContainerDelete.style.display = "none";
    });

    return modalContainerDelete;
}





export { modalProfile, modalRegisterVerification, modalDelete };






