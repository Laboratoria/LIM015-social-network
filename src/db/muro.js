  import { readInfoUser } from "./crud/readInfoUser.js"
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
  }

  export { addEventsTimeLine }