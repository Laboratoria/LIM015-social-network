// import  {viewHeader} from '../View/header.js'
// const header = viewHeader();
const viewHome =()=>{

    const htmlHome=
    `<div>
    <nav> </nav> 
    Este es inicio</div>

<section id="home" class="home">

   <section id="homeProfile" class="home__profile">
      <div id="home-imgUser" class="home__imgUser">
        
      </div>
  
      <div  id="name" class="home__nameuser" > ver perfil </div>
    </section>
  
  
    </section id="HomeShare">
      <div id="imputshare">
      <input id="inputShare"class="HomeShare__input" "type="text" placeholder="¿ Que desea compartir ?">
      </div>
      
      <button id=""buttonShare"" class="buttonShare" > compartir</button>
    <section>
  
  
    </section id="ShareEver">
      <div id="people" class="home__imgUser"></div>
  
      <div   id="name" class="home__nameuser" > compartio </div>
      <div id="dateshare"> 3 septiembre </div>
  
      <div id="imputshare" class="HomeShare__input">
      <input type="text" placeholder="¿ Que desea compartir ?">
      </div>
  
      <div id="likeShareIcon" class="home__like"> me gusta</div>
      <div id="editShare"  class="home__edit> editar</div>
      <div id="removeShare" class="home__remove> eliminar</div>
      <div id="saveShare" class="home__save"> guardar</div>
  
  
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