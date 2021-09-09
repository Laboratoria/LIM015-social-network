// import  {viewHeader} from '../View/header.js'
// const header = viewHeader();
const viewHome =()=>{

    const htmlHome=
    `<div>
    <nav></nav> 
    Este es inicio</div>

<section id="home" class="home">

   <section id="homeProfile" class="home__profile">
      <div id="home-imgUser" class="home__Profile--imgUser">
        
      </div>
  
      <div  id="name" class="homeProfile-name" > ver perfil </div>
    </section>
  
  
    </section id="HomeShare">
      <div id="imputshare">
      <input type="text" placeholder="¿ Que desea compartir ?">
      </div>
      
      <button> compartir</button>
    <section>
  
  
    </section id="HomeShareEver">
      <div id="people" class="imgUserHome"></div>
  
      <div   id="name" > compartio </div>
      <div id="dateshare"> 3 septiembre </div>
  
      <div id="imputshare">
      <input type="text" placeholder="¿ Que desea compartir ?">
      </div>
  
      <div id="likeShareIcon"> me gusta</div>
      <div id="editShare"> editar</div>
      <div id="removeShare"> eliminar</div>
      <div id="saveShare"> guardar</div>
  
  
    <section>
        
   </section>
  
  </section>
    `
    
    
    ;
    

    const divHome=document.createElement('div');
    divHome.innerHTML=htmlHome;

    return divHome;

}


export  {viewHome}