import  {viewHeader} from '../view/header.js'
const header = viewHeader()

const viewProfile =()=>{
  

    const htmlProfile = `
      
    <div>${header}</div>
    <section class="imgUser">
        <img src="" alt="photoUser">
    </section>
    <section class="profileUser">
         <span class="editProfile"><i class="fas fa-edit"></i></span>          
        <h2> Aqui va el nombre</h2>
        <h3>Aqui va el nombre del emprendimiento</h3>
        <div class="informationUser">
            <i class="fas fa-phone-square-alt"></i>
            <p>984170771</p>
        </div>
        <div class="informationUser">
            <i class="fas fa-at"></i>
             <p>orihuelaramirezam@gmail.com</p>
        </div>
        <div class="informationUser">
            <i class="fas fa-map-marker-alt"></i>
            <p>Ayacucho, Perú</p>
        </div>
        <div class="informationUser">
            <h3>Mi emprendimiento</h3>
            <p>aqui va una pequeña intro de su emprendimiento</p>
        </div>
    </section>
       
    `;
       
    const divProfile=document.createElement('div');
    divProfile.innerHTML=htmlProfile;

    return divProfile;
}

export  {viewProfile}