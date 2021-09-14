// import  {viewHeader} from '../view/header.js'
// const header = viewHeader();

//simport {fStore} from '../src/firebase/fb-config.js'  

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
    <form id= "postHome-form"> 
      <div id="boxInputPost">
      <textarea id="postArea"class="HomeShare__input" placeholder="¿ Que desea compartir?" rows="4" cols="50" autofocus></textarea>
      </div>
      <input type="submit" id="buttonPostHome" class="button button--main" value="Compartir">
    </form>
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

    const homePost = divHome.querySelector("#postHome-form");
    const postArea = divHome.querySelector ("#postArea");
    const buttonPost = divHome.querySelector("#buttonPostHome");

   const getPosts = () => firebase.firestore().collection('posts').get();
   
  
   buttonPost.addEventListener('click', async (e)=> {
     
    const hola = await getPosts();
    hola.forEach((doc)=>{
      console.log(doc.data());
    })
    
    
    });


   homePost.addEventListener("submit", async (e) => {
      e.preventDefault();
      const post =postArea.value;
      console.log(post);
      await firebase.firestore().collection('posts').doc().set({
         post,
      });
      homePost.reset();
      //post.focus();
    })

    return divHome;

}


export  {viewHome}