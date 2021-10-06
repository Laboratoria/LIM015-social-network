/* eslint-disable no-unused-vars */
import { logout } from '../security/security.function.js';

export function viewHome() {
  const viewHomen = `
  <div class ='home'>
  <header>
  <img src='img/pet.jpg' id='fondoPet' class='fondoAnimalPet'>
  <p>Home</p>
  <figure class='logo1'>
    <img src='img/home3.png' class='logo_home'>
  </figure>
  <p>Profile</p>
    <img src='img/perfil.png' class='logo_home'>
    <p>Logout</p>
    <img src='img/logout.png' id ='btnExit' class='logo_home'>
  </header>
   <div id ='exit'>
  </div>
  <section class="img-perfil">
   </section>

  <div class= "container-post">
    <img class='profile-user-image' src=''>
    <textarea id="post" class='post'placeholder='
    Write your post here'rows='10'cols='30'></textarea>
    <button id='btnpost'>Post</button>
  </div>
 
      `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHomen;
  return divElem;
}

export function initHome() {
  const btnLogout = document.getElementById('btnExit');
  btnLogout.addEventListener('click', (e) => {
    logout();
    window.location.hash = '#/login';
  });
}
//post

document.addEventListener('click', (e) => {
  if (e.target.id === 'btnpost') {
  const containerPost = document.querySelector('#post').value;
  console.log(containerPost);  
   
  }})

// const db = firebase.firestore();

// const containerPost=document.getElementById('btnpost');

// containerPost.addEventListener('click', e=>{
//   e.preventDefault();

// console.log('submiting');
  // const description=containerPost['post'].value;
  // await db.collection('posts').doc().set({
    // description
  
/*   console.log(response)
  console.log(description);*/



/*


const getCollection = () => db.collection('post').get();

window.addEventListener('DomContentLoader', async (e) => {
  const posts = await getCollection();
  posts.forEach((doc) => {
    console.log(doc.data());
  });
});
 */
// pintar post
// const showPost = document.querySelector('#showPost');
/*
document.addEventListener('click', (e) => {
  if (e.target.id === 'btnpost') {
    const post = document.querySelector('#post');
    if (post.value.trim().length > 0) {
      const date = new Date(Date.now());
      const objPublicacion = {
        photo: localStorage.getItem('photo'),
        name: localStorage.getItem('name'),
        description: post.value,
        day: date.toLocaleString(),
        user: localStorage.getItem('uid'),
        likesUser: [],
      };
      publishPost(objPublicacion)
        .then((resolve) => {
          console.log(publishPost(objPublicacion)); // eslint-disable-line
        })
        .catch((reject) => {
          console.log(reject); // eslint-disable-line
        });
    } else {
      alert("Por favor, llena el campo"); // eslint-disable-line
    }
    post.value = '';
  }
});
 */

