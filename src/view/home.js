import  {header} from '../View/header.js'

const viewHome =()=>{

    const htmlHome=
    `<div>
    <nav>${header}</nav> 
    Este es inicio</div>
    
    
    
<section id="home">

<section id="homeProfile">
  <div id="people">
  </div>

  <div  id="name" > ver perfil </div>
</section>


</section id="HomeShare">
  <div id="imputshare">
  <input type="text" placeholder="¿ Que desea compartir ?">
  </div>
  
  <button> compartir</button>

<section>


</section id="HomeShareEver">
  <div id="people" ></div>

  <div   id="name" > compartio </div>
  <div id="dateshare"> </div>

  <div id="imputshare">
  <input type="text" placeholder="¿ Que desea compartir ?">

  </div>


  <div id="likeShare"> guardar</div>
  <div id="editShare"> editar</div>
  <div id="removeShare"> eliminar</div>

<section>
    
</section>
    
    
    
    
    
    `
    
    
    
    
    
    ;
    

    const divHome=document.createElement('div');
    divHome.innerHTML=htmlHome;

    return divHome;

}


export  {viewHome}