const modalProfile = () => {
    const ContentModalProfile = `
    <section class="containerModalProfile">
        <div class="headerModal">
            <span><i class="fas fa-times-circle"></i></span>
        </div>
        <div class="bodyModal">
            <div class="logo">
             <img src="" alt="makipuraLogo">
            </div>
            <form action="">
             <label for="userName"> Nombres y apellidos </label>
             <input type="text" class="inputs" name="userName" id="userName" placeholder="Ingrese sus nombres y apellidos" required>
             <label for="starUpName">Nombre del emprendimiento</label>
             <input type="text=" class= "inputs" name="starUpName" id="starUpName" placeholder="Ingrese el nombre de su emprendimiento">
             <div class="inputContacto">
                <label for=""> Contacto</label>
                <label for="phoneUser"> Celular:</label>
                <input type="number" class="inputs" name="phoneOfUser" id="phoneOfUser" placeholder="123456789">
                <label for="emailUser">Correo:</label>
                <input type="text" class="inputs" name="emailOfUser" id="emailOfUser" placeholder="ejemplo@gmail.com">
                <label for="addressUser">Ubicación</label>
                <input type="text" class="inputs" name="addressOfUser" id="addressOfUser" placeholder="Lince, Lima">
                <label for="informationStarUp">Información</label>
                <textarea name="informationStarUp" id="informationStarUp" cols="30" rows="5"></textarea>
             </div>
             <button class="secondButton" id="closeModalProfile">Cancelar</button>
             <button class="mainButton" id="saveModalProfile">Guardar</button>
            </form>
         </div>
    </section>`
    const divProfile=document.createElement('div');
    divProfile.innerHTML=ContentModalProfile;
    return divProfile;
}


export {modalProfile};