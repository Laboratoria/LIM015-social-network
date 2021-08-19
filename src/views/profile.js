import { getPostId, deletePost } from '../firebase/firebase-firestore.js';
export const PROFILE = () => {
  const view = `
  <section>
    <figure>
      <img src="../images//photoProfile2.jpeg" alt="photoProfile" />
    </figure>
    <p id='nameProfile'>Luana Cevallos</p>
    <p id='status'>Estado: Viajera Empedernida</p>
  </section>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;
  // FUNCIONALIDAD - PRUEBA ------ OK
  // console.log(deletePost('81I4dJM8rD871wjejZi1'));

  // deletePost('81I4dJM8rD871wjejZi1').then((collection) => {
  //   console.log(collection);
  // });

  console.log(deletePost());
  deletePost(id).then(() => {
    console.log('borrado');
  });
  
  // FUNCION PARA OBTENER ID DEL POST
  // console.log(getPostId());
  // getPostId().then((collection) => {
  //   console.log(collection);
  //   console.log(collection.id);
  //   console.log(collection.ref.id);
  // });
  
  // listo
  // getPosts().then((collection) => {
  //   collection.forEach((docRef) => {
  //     console.log(docRef.data());
  //   });
  // });
  return divElement;
};
