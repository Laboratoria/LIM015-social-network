import {
  savePost,
  onGetPosts,
  deletePosts,
  updatePost,
} from "../firebase/fb-firestore.js";
/*import {
  currentUser
} from "../firebase/fb-functions.js";*/
const viewHome = () => {
  const htmlHome = /*html*/ `
      <section id="home" class="home">
        <section id="homeProfile" class="home__profile">
         <div id="home__userName" >Aca irá nombre del usuario</div>
          <div id="home-imgUser" class="home__imgUser">
          <img class="imgUser" src="" width="150" alt="usuario">
          </div>
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
      `;
  const divHome = document.createElement("div");
  divHome.innerHTML = htmlHome;

  const homePost = divHome.querySelector("#postHome-form");
  const postArea = divHome.querySelector("#postArea");
  const postNameUser = divHome.querySelector("#home__userName");
  const postPhotoUser = divHome.querySelector(".imgUser");
  const postListContainer = divHome.querySelector("#postsHomeContainer");
  // const getPosts = () => firebase.firestore().collection('posts').get();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      savePostCurrentUser(user);
      postNameUser.innerHTML = user.displayName;
      postPhotoUser.src = user.photoURL;

      onGetPosts((data) => {
        setTemplateListPosts(data, user);
      });
    } else {
      // User is signed out
      // ...
    }
  });

  const savePostCurrentUser = (user) => {
    homePost.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();
        const usernamePost = user.displayName; //verificar donde pasa el nombre del firebase al div
        const userPost = postArea.value;
        const date = new Date().toLocaleString("es-ES");
        const userId = user.uid;
        const userPhoto = user.photoURL;
        const likes = [];
        await savePost(usernamePost, userPost, date, userId, userPhoto, likes);
        homePost.reset();
        postArea.focus();
      } catch (error) {
        console.log(error);
      }
    });
  };

  const setTemplateListPosts = (data, user) => {
    postListContainer.innerHTML = "";
    const newSection = document.createElement("section");
    data.forEach((doc) => {
      const postText = doc.data();
      postText.id = doc.id;
      newSection.innerHTML += /*html*/ `

      <section class="postAreaUser">
        <div class="home__imgUser" id="userImg" >
          <img class="postUserImage" width="150" src="${postText.userPhoto}"> 
        </div>
        <div>
          <div>${postText.username}</div>
          <div>${postText.date}</div>
          <p>compartió</p>
        </div>
         
        <div class="post__inputtext">
          <textarea class="post__input" rows="4" cols="50" id="text-${
            postText.id
          }" data-id="${postText.userId}"readonly>${
        postText.userPost
      }</textarea>         
        </div>
        
        <div class="home__like"> me gusta</div>
        ${
          postText.userId === user.uid
            ? `<div class="btns-edit-delete" name="${postText.userId}" data-id-post="${postText.userId}">
            <button class="btn-edit" data-id="${postText.id}"> editar</button>
            <button class="btn-delete" id='delete-${postText.id}' data-id="${postText.id}"> eliminar</button>
            </div>`
            : ""}           
    </section> `;
      postListContainer.appendChild(newSection);
    });
    // Función que elimina el post
    const btnDelete = postListContainer.querySelectorAll(".btn-delete");
    const btnEdit = document.querySelectorAll(".btn-edit");

    btnDelete.forEach((btn) =>{
      console.log(btn);
      btn.addEventListener("click", async (e) => {
        try {
          await deletePosts(e.target.dataset.id);
        }catch (error){
          console.log(error)
        }
        
      })
    }
    
    );

    // Función que edita el post    
    

const prueba = (btnEdit) =>{
  btnEdit.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      console.log(e.target.innerText );
      try{
        e.preventDefault();
        const idDocPost = e.target.dataset.id;
        const contentTextPost = document.getElementById(`text-${idDocPost}`);
        const btnDeletePost = document.getElementById(`delete-${idDocPost}`);
        contentTextPost.removeAttribute("readonly");
        btn.innerText = 'guardar cambios';
        btnDeletePost.innerText = 'cancelar cambios';
        console.log(e.target.innerText );

        if(e.target.innerText == 'guardar cambios'){
          btn.classList.remove('btn-edit');
          btnDeletePost.removeAttribute('data-id')
          console.log(btn)
          btn.addEventListener('click',async (e) => {
           try{
            e.preventDefault()
            contentTextPost.setAttribute("readonly", true);
            console.log('aqui selecciona guardar cambios')
            btn.innerText = 'editar';
            await updatePost(idDocPost, { userPost: contentTextPost.value});
            if(e.target.innerText == 'editar'){
              contentTextPost.setAttribute("readonly", false);
              btn.classList.add('btn-edit');
              prueba(btnEdit)
            }
           }catch(error){
             console.log(error)
           }
          })
          
        }
        
        // else if (e.target.innerText == 'cancelar cambios'){
        //   const btnCancelPost = document.querySelectorAll('.btn-delete')
        //   console.log('cancelar cambioss')
        //   // firebase.firestore().collection("newPosts").orderBy('date', 'desc').onSnapshot(callback);
        //   // var docRef = db.collection("hola").doc("SIKIV2KVfZKMGC9ZT81u");
        //   btnCancelPost.addEventListener('click' , ()=> {
        //     console.log('soy el boton')
        //     const docRef = firebase.firestore().collection("newPosts").doc(idDocPost);
        //     docRef.get().then((doc)=>{
        //       console.log("userposts:", doc.data().userPost);
        //   })
        // }) 

        // } 
       
        contentTextPost.focus();
      }catch(error){
        console.log(error)
      }
    });
  });
}
 prueba(btnEdit)



  };

  return divHome;
};

export { viewHome };
