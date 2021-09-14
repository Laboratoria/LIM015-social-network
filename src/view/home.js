// import  {viewHeader} from '../view/header.js'
// const header = viewHeader();

//import { view404 } from "./Err404";

//simport {fStore} from '../src/firebase/fb-config.js'  

const viewHome =()=>{

  const htmlHome=
        `<section id="home" class="home">

        <section id="homeProfile" class="home__profile">
          <div id="home-imgUser" class="home__imgUser">Aca irá imgUser</div>
          <div id="name" class="home__nameuser"> ver perfil </div>
        </section>

        <section id="postHomeContainer">
          <form id="postHome-form">
            <div id="boxInputPost">
              <textarea id="postArea" class="HomeShare__input" placeholder="¿ Que desea compartir?" rows="4" cols="50"
                autofocus></textarea>
            </div>
            <div>
              <input type="submit" id="buttonPostHome" class="button button--main" value="Compartir"> 
            </div>
          </form>
        </section>

        <section id="postsHomeContainer">
        </section>

      </section>
      `
    ;
    
    const divHome=document.createElement('div');
    divHome.innerHTML=htmlHome;

    const homePost = divHome.querySelector("#postHome-form");
    const postArea = divHome.querySelector ("#postArea");
    const buttonPost = divHome.querySelector("#buttonPostHome");
    const postsContainer = divHome.querySelector("#postsHomeContainer");
    

   const getPosts = () => firebase.firestore().collection('posts').get();
   const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();
   const deletePosts = (id) => firebase.firestore().collection('posts').doc(id).delete();
   const updatePost = (id, updatedPost) => firebase.firestore().collection('posts').doc(id).update(updatedPost);    
  let editStatus = false; 

   homePost.addEventListener("submit", async (e)=> {
     const snapshot = await getPosts();
       postsContainer.innerHTML = '';
       snapshot.forEach( doc => {
         const  postText = doc.data()
         postText.id = doc.id;
          postsContainer.innerHTML += `
          <div id="people" class="home__imgUser">ImgUser</div>

          <div   id="name" class="home__nameuser" > compartió </div>
          <div id="dateshare"> 3 septiembre </div>

          <div id="imputshare" class="HomeShare__input">
            <textarea class="HomeShare__input" rows="4" cols="50" autofocus>${postText.post}</textarea>
          </div>

         <div id="likeShareIcon" class="home__like"> me gusta</div>
         <button  class="btn-edit" data-id="${postText.id }"> editar</button>
         <button  class="btn-delete" data-id="${postText.id }"> eliminar</button>
         <button id="saveShare" class="home__save"> guardar</button>
          `;
          const btnsDelete = postsContainer.querySelectorAll(".btn-delete");
          btnsDelete.forEach (btn =>{
            btn.addEventListener("click", async (e) => {
                await deletePosts(e.target.dataset.id);
            })
          })
          const btnsEdit = postsContainer.querySelectorAll(".btn-edit");
          btnsEdit.forEach (btn =>{
            btn.addEventListener("click", async (e) => {
              //console.log(e.target.dataset.id)  
              const docc =  await getPost(e.target.dataset.id);
               const postEdit = docc.data();
               id = docc.id;
               editStatus = true;
               postArea.value = postEdit.post;
               buttonPost.value = "Guardar";
            })
          })
        })
     });


   homePost.addEventListener("submit", async (e) => {
      e.preventDefault();
      const post =postArea.value;
      console.log(post);
      if (!editStatus){
        await firebase.firestore().collection('posts').doc().set({post});
        homePost.reset();
      } else {
        await updatePost(id, {post:post.value})
      }
        
      //post.focus();
    })

    return divHome;

}


export  {viewHome}