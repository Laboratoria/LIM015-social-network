import {
  savePost,
  onGetPosts,
  updatePost,
  getPost,
  onGetUsers,
} from "../firebase/fb-firestore.js";

import {uploadImages} from '../firebase/fb-storage.js'
import {modalDelete} from "../view/modals.js"

const viewHome = () => {
  const htmlHome = /*html*/ `
      <section id="home" class="home">
        <section id="homeProfile" class="home__profile">
          <div id="home-imgUser" class="home__imgUser homeImgUserProfile">
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
              <textarea id="postArea" class="HomeShare__input" placeholder="¿ Que desea compartir?" autofocus></textarea>
              <div id="postImgPreview"></div>
            </div>
            <div class="home__buttonPost" >
              <div>
              <label for='imgButton' >                
                  <i class="fas fa-images"></i>
              </label>  
              <input  type="file" accept="image/png, image/jpeg" value="upload" id='imgButton' hidden>            
              </div>
              <input type="submit" id="buttonPostHome" class="button button--main" value="Compartir"> 
            </div>
          </form>
        </section>
        <section id="postsHomeContainer" class="home__PostsContainer">
        </section>
        <section id="containerListUsers" class="home__PostsContainer containerUsers">
          <div class='listUsers__tittle'> EMPRENDEDORAS</div>
          <div id = 'listUsers'></div>
        </section>
      </section>

      `;
  const divHome = document.createElement("div");
  divHome.innerHTML = htmlHome;
  divHome.classList.add('homeContainer')


  const homePost = divHome.querySelector("#postHome-form");
  const postArea = divHome.querySelector("#postArea");
  const postNameUser = divHome.querySelector("#home__userName");
  const postPhotoUser = divHome.querySelector(".imgUser");
  const postListContainer = divHome.querySelector("#postsHomeContainer");
  const listUsers =divHome.querySelector('#listUsers');
  const imgButton = divHome.querySelector('#imgButton');
 
/* funcion para mostrar la lista de emprendedoras*/
 const showAllUser = ()=> {
  onGetUsers((dataUsers)=>{
    listUsers.innerHTML= '';
    dataUsers.forEach((dataUser)=> {
      
      const divListUsers = `
      
    <div class='boxUser'>
      <div class='divUserBox' >
      <img class='imgUser imgUserList' src='${dataUser.userPhoto}'>
      </div>
      <div class='divUserBox'>
      <p class = 'pUser'>${dataUser.userName} ${dataUser.userLastname}</p>
      </div>      
    </div>
    `; 

   listUsers.innerHTML += divListUsers;
    })    
  })
 }
/* funcion para subir imagenes*/
  // --ENVIA IMG A FIREBASE AL MOEMNTO DE DAR CLICK ABRIR

const preViewImg = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      const preview = divHome.querySelector('#postImgPreview');
      const image = document.createElement('img');
      const deletePreviewImg = document.createElement('span')
      deletePreviewImg.classList.add('closeModal')
      image.classList.add('imgPreview')

      image.src = reader.result;

      preview.innerHTML = '';
      deletePreviewImg.innerHTML = `<i class="fas fa-times-circle"></i>`;
      preview.append(deletePreviewImg);
      preview.append(image);
      
      //eliminar la imagen
      const btnDeletePreviewImg = divHome.querySelector('.fa-times-circle')
      console.log(btnDeletePreviewImg)
      btnDeletePreviewImg.addEventListener('click', ()=>{
        divHome.querySelector('#postImgPreview').innerHTML = '';
      });
          

    };
};
 imgButton.addEventListener('change', (e) => {preViewImg(e); });


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      savePostCurrentUser(user,homePost ,postArea);
      postNameUser.innerHTML = user.displayName;
      postPhotoUser.src = user.photoURL;
      onGetPosts((data) => {
        setTemplateListPosts(data, user,postListContainer);
      });
      showAllUser()
      
    } else {
      window.location.hash('#/')
    }
  });  
      return divHome;
};

/* FUNCION PARA PINTAR EL POST*/

const setTemplateListPosts = (data, user,postListContainer) => {

    postListContainer.innerHTML = "";

    data.forEach((doc) => {
      const postText = doc/*.data()*/;
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
        ${ postText.userPost? `
        ${postText.userId === user.uid ?`
          <textarea class="post__input" id="text-${postText.id}" data-id="${postText.userId}"readonly>${postText.userPost}</textarea>`:
          `<p class="post__paragraph" id="text-${postText.id}" data-id="${postText.userId}"readonly>${postText.userPost}</p>`} `:``}
          ${postText.url? `<img class="post__imgPost" src="${postText.url}"  alt="photoPost">`: ``}
             
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
        
        <section id="modalDeletePost" class="modalVerification modalDeletePost "></section>

                   
    </section> `;

    });

    // Función que elimina el post
    const btnDelete = postListContainer.querySelectorAll(".btn-delete");
    const btnEdit = document.querySelectorAll(".btn-edit");
    const modaldeletePost = document.querySelector("#modalDeletePost");
    // console.log(modaldeletePost);

    btnDelete.forEach((btn) =>{     
      btn.addEventListener("click",  (e) => {
        try {
          console.log("modal dele");
           modaldeletePost.appendChild(modalDelete(e.target.dataset.id))
                     
        }catch (error){
          console.log(error)
        }
        })
    }
    );


    //funcion dar likes
    const iconLikes = postListContainer.querySelectorAll('.fa-heart');
    //console.log(iconLikes)
    iconLikes.forEach((icon)=>{
      icon.addEventListener('click' , async (e)=>{
        const idDocPost = e.target.dataset.id;
        let likesArray = await getPost(idDocPost).then((doc)=>{
          return  doc.data().likes
        })
           if(!likesArray.includes(user.uid)){
            likesArray.push(user.uid);
             await updatePost(idDocPost,{ likes: likesArray});    
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


    return postListContainer;

};


/*funcion de guardar data de post en el firestore */ 


const savePostCurrentUser = (user,homePost ,postArea) => {

   return  homePost.addEventListener("submit",  (e) => {
      
        e.preventDefault();
        const idDocPost = e.target.dataset.id;
        const postTextPublic = document.getElementById(`text-${idDocPost}`);
        const usernamePost = user.displayName; //verificar donde pasa el nombre del firebase al div
        const userPostText = postArea.value;
        const date = new Date().toLocaleString("es-ES");
        const userId = user.uid;
        const userPhoto = user.photoURL;
        const likes = [];
        const inputImg = homePost[1].files;

        console.log(typeof userPostText , 'texto ' , postTextPublic)
          if(inputImg.length >= 1 &&  userPostText ){
            const file = inputImg[0];
            uploadImages(`images/${file.name}`, file).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                  savePost(usernamePost, userPostText, date, userId, userPhoto, likes, url);
                });
              });
          }
          else if(inputImg.length >= 1 && !userPostText ){
          //  postTextPublic.style.display= 'none';
          const file = inputImg[0];
          uploadImages(`images/${file.name}`, file).then((snapshot) => {
              snapshot.ref.getDownloadURL().then((url) => {
                savePost(usernamePost,'', date, userId, userPhoto, likes, url);
              });
            });
          }
          else if(inputImg.length == 0 && userPostText ){
            //  postTextPublic.style.display= 'none';
           
            savePost(usernamePost, userPostText, date, userId, userPhoto, likes, '');
          }
          else {
            postArea.focus();        

          }
        
          

        homePost.reset();
        homePost.querySelector('#postImgPreview').innerHTML = '';
        postArea.focus();
       
   })
};



export { viewHome,savePostCurrentUser,setTemplateListPosts};











