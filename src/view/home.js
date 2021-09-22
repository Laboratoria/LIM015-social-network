import {
  savePost,
  onGetPosts,
  deletePosts,
  updatePost,
  getPost,
} from "../firebase/fb-firestore.js";
/*import {
  currentUser
} from "../firebase/fb-functions.js";*/
const viewHome = () => {
  const htmlHome = /*html*/ `
      <section id="home" class="home">
        <section id="homeProfile" class="home__profile">
          <div id="home-imgUser" class="home__imgUser">
            <img class="imgUser homeImgUser" src=""  alt="usuario">
          </div>
         <div class="home__profileBox">
           <h3 id="home__userName" ></h3>
           <p id="name" class="home__userProfile"> ver perfil </p>
         </div>
        </section>
        <section id="postHomeContainer" class="home__postContainer">
          <form id="postHome-form">
            <div id="boxInputPost" class="home__postImput">
              <textarea id="postArea" class="HomeShare__input" placeholder="¿ Que desea compartir?"
                autofocus></textarea>
            </div>
            <div class="home__buttonPost" >
              <input type="submit" id="buttonPostHome" class="button button--main" value="Compartir"> 
            </div>
          </form>
        </section>
        <section id="postsHomeContainer" class="home__PostsContainer">
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
    data.forEach((doc) => {
      const postText = doc.data();
      postText.id = doc.id;
      postListContainer.innerHTML += /*html*/ `
      <section class="postAreaUser">
        <div class="home_postHeader">
          <div class="home__imgUser" id="userImg" >
            <img class="imgUser postImgUser" src="${postText.userPhoto}"> 
          </div>
          <div class="home__nameDate">
            <div><b>${postText.username}</b><span class="textSecundary"> compartió</span></div>
            <div class="textSecundary">${postText.date}</div>
          </div>
        </div>
        <div class="post__inputtext">
          <textarea class="post__input" id="text-${postText.id}" data-id="${postText.userId}"readonly>${postText.userPost
      }</textarea>         
        </div>
        
        <div class="home_likeButtonSection">
          <div class="home__like"> 
            <i class="${postText.likes.includes(user.uid) ? 'fas' : 'far'} fa-heart" data-id="${postText.id}"></i>
            <span>${postText.likes.length ? postText.likes.length : ''} </span>
          </div>
          ${
            postText.userId === user.uid
              ? `<div class=" btns-edit-delete" name="${postText.userId}" data-id-post="${postText.userId}">
              <button class="btn-post btn-edit" data-id="${postText.id}"> editar</button>
              <button class="btn-post btn-delete" id='delete-${postText.id}' data-id="${postText.id}"> eliminar</button>
              <button class="btn-post btn-cancelEdit" id='cancel-${postText.id}' data-id="${postText.id}" hidden>descartar</button>
              </div>`
              : ""}
        </div>
                   
    </section> `;

    });
    // Función que elimina el post
    const btnDelete = postListContainer.querySelectorAll(".btn-delete");
    const btnEdit = document.querySelectorAll(".btn-edit");

    btnDelete.forEach((btn) =>{     
      btn.addEventListener("click", async (e) => {
        try {
          await deletePosts(e.target.dataset.id);
        }catch (error){
          console.log(error)
        }
        
      })
    }
    
    );
    //funcion dar likes
    const iconLikes = postListContainer.querySelectorAll('.fa-heart');
    console.log(iconLikes)
    iconLikes.forEach((icon)=>{
      icon.addEventListener('click' , async (e)=>{
        const idDocPost = e.target.dataset.id;
        let likesArray = await getPost(idDocPost).then((doc)=>{
          console.log(doc.data().likes)
          return  doc.data().likes
        })
           if(!likesArray.includes(user.uid)){
            likesArray.push(user.uid);
             await updatePost(idDocPost,{ likes: likesArray});    
            console.log('si le diste likee')

          }else{
            
            likesArray=likesArray.filter(lik=>lik!==user.uid);
            await updatePost(idDocPost,{ likes: likesArray});
            console.log('todavia no le has dado like')
          }
               
      })
    })
     

    // Función que editar el post    
    const prueba = (btnEdit) =>{
      btnEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try{
            e.preventDefault();
            const idDocPost = e.target.dataset.id;
            const contentTextPost = document.getElementById(`text-${idDocPost}`);
            const btnDeletePost = document.getElementById(`delete-${idDocPost}`);
            const btnCancelPost = document.getElementById(`cancel-${idDocPost}`);
            btnDeletePost.setAttribute('hidden',true);
            btnCancelPost.removeAttribute('hidden');
            // btnCancelPost.style.display='flex';
            contentTextPost.removeAttribute("readonly");
            btn.innerText = 'guardar';
          
            if(e.target.innerText == 'GUARDAR'){
              btn.classList.remove('btn-edit');
              // btnDeletePost.removeAttribute('data-id')
              btn.addEventListener('click',async (e) => {
              try{
                e.preventDefault()
                contentTextPost.setAttribute("readonly", true);
                btn.innerText = 'editar';
                await updatePost(idDocPost, { userPost: contentTextPost.value});
                if(e.target.innerText == 'EDITAR'){
                  contentTextPost.setAttribute("readonly", false);
                  btnDeletePost.setAttribute('hidden', false);
                  btn.classList.add('btn-edit');
                  prueba(btnEdit)
                }
              }catch(error){
                console.log(error)
              }
              })
            }

            btnCancelPost.addEventListener('click', async () => {
              try{
                const idDocPost = e.target.dataset.id;
                await getPost(idDocPost).then((doc)=>{
                contentTextPost.value = doc.data().userPost;
                btnDeletePost.removeAttribute('hidden');
                btnCancelPost.setAttribute('hidden', true);
                btn.classList.add('btn-edit');
                btn.innerText = 'editar';
                contentTextPost.setAttribute("readonly" , true);
                prueba(btnEdit)
              })
              }
              catch(error){
                console.log(error)
              }
            })
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
