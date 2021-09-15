  import { readInfoUser } from "./crud/readInfoUser.js"
  import { readCategory } from './crud/readCategory.js'

  const addEventsTimeLine = () => {
      const btnSalir = document.querySelector('#logout');
      btnSalir.addEventListener('click', () => {
          // eslint-disable-next-line no-undef
          firebase.auth().signOut().then(() => {
              console.log('saliendo');
              localStorage.clear();
              window.location.href = "";
          })
      });
      readInfoUser();
      readCategory();
  }

  export { addEventsTimeLine }