  import { readInfoUser } from "./crud/readInfoUser.js"
  import { readCategory } from './crud/readCategory.js'
  import { readPost } from './crud/readPost.js'
  import { createEmoji } from "../views/emoji.js"

  const addEventsTimeLine = () => {
      document.querySelector('#div-body').className = "bodyBackground";
      const btnSalir = document.querySelector('#logout');
      btnSalir.addEventListener('click', () => {
          // eslint-disable-next-line no-undef
          firebase.auth().signOut().then(() => {
              console.log('saliendo');
              localStorage.clear();
              window.location.href = "";
          })
          document.querySelector('#div-body').classList.remove('bodyBackground');
      });
      readInfoUser();
      readCategory();
      /* readPost(); */
      console.log(readPost())
      createEmoji();
  }

  export { addEventsTimeLine }