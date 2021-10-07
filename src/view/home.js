import {
  savePost,
  onGetPosts,
  onGetUsers,
  infoData
} from "../firebase/fb-firestore.js";

import {uploadImages} from '../firebase/fb-storage.js'
import {setTemplateListPosts} from "../view/templatePost.js"

const viewHome = () => {
  const htmlHome = /*html*/ `
      <section id="home" class="home">
        <section id="homeProfile" class="home__profile">
          <div id="home-imgUser" class="home__imgUser homeImgUserProfile">
            <img class="imgUser homeImgUser" src=""  alt="usuario">
          </div>
         <div class="home__profileBox">
           <h3 id="home__userName" ></h3>
           <a id="viewPerfil" href="#/profile"class="home__userProfile"> ver perfil </a>
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
    console.log(dataUsers);
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
      btnDeletePreviewImg.addEventListener('click', ()=>{
        divHome.querySelector('#postImgPreview').innerHTML = '';
      });
          

    };
};
 imgButton.addEventListener('change', (e) => {preViewImg(e); });


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      infoData(user.uid, (data) =>{
        postNameUser.innerHTML = `${data.userName} ${data.userLastname}`;
        postPhotoUser.src = data.userPhoto; 
        savePostCurrentUser(data,homePost ,postArea);
      })
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


/*funcion de guardar data de post en el firestore */ 


const savePostCurrentUser = (data,homePost ,postArea) => {

   return  homePost.addEventListener("submit",  (e) => {
      
        e.preventDefault();
        // const idDocPost = e.target.dataset.id;
        // const postTextPublic = document.getElementById(`text-${idDocPost}`);
        const usernamePost = `${data.userName} ${data.userLastname}`; //verificar donde pasa el nombre del firebase al div
        const userPostText = postArea.value;
        const date = new Date().toLocaleString("es-ES");
        const userId = data.userId
        const userPhoto = data.userPhoto;
        const likes = [];
        const inputImg = homePost[1].files;
        console.log(usernamePost)
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