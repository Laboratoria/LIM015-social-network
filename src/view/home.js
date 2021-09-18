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
  const htmlHome = /*html*/`
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
        const date = new Date().toLocaleString('es-ES');
        const userId = user.uid;
        const userPhoto = user.photoURL;
        const likes = [];
        await savePost(usernamePost, userPost, date, userId, userPhoto, likes);
        homePost.reset();
        postArea.focus();
      } catch (error) {
        console.log(error)
      }
    });
  }

  const setTemplateListPosts = (data, user) => {
    postListContainer.innerHTML = "";
    const newSection = document.createElement("section");
    data.forEach((doc) => {
      const postText = doc.data();
      postText.id = doc.id;
      newSection.innerHTML += /*html*/`
      <section class="postAreaUser">
      <div class="home__imgUser" id="userImg" >
        <img class="postUserImage" width="150" src="${postText.userPhoto}"> 
      </div>
        <div>${postText.username}</div>
        <div>${postText.date}</div>
        <p>compartió</p>
      </div>
      <section>
      
      <div class="post__inputtext">
        <textarea class="post__input" rows="4" cols="50" id="text-${postText.id}" data-id="${postText.userId}"
          readonly>${postText.userPost}</textarea>
        <button hidden class="cancelEdit">Descartar</button>  
      </div>
      
      <div class="home__like"> me gusta</div>  
      ${(postText.userId === user.uid) ?
          `<div class="btns-edit-delete" name="${postText.userId}" data-id-post="${postText.userId}">
          <button class="btn-edit" data-id="${postText.id}"> editar</button>
          <button class="btn-delete" data-id="${postText.id}"> eliminar</button>  
        </div>` : ''}
      `;
      postListContainer.appendChild(newSection);
    })
    // Función que elimina el post
    const btnDelete = document.querySelectorAll(".btn-delete");
    btnDelete.forEach( (btn) => btn.addEventListener("click", async (e) => {
      await deletePosts(e.target.dataset.id);
     
    }));
    
    // Función que edita el post
    const btnEdit = postListContainer.querySelectorAll(".btn-edit");
    btnEdit.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idTextPost = e.target.dataset.id;
        const contentTextPost = document.getElementById(`text-${idTextPost}`);
        contentTextPost.removeAttribute("readonly");
        btn.innerText = "Guardar";
        console.log(contentTextPost.value);
        updatePost(idTextPost, { post: contentTextPost.value });
        contentTextPost.focus();
      });
    });
  };




  return divHome;
};

export { viewHome };
