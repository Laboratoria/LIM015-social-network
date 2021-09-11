  const addEventsTimeLine = () => {
      const btnSalir = document.querySelector('#logout');
      btnSalir.addEventListener('click', () => {
          // eslint-disable-next-line no-undef
          firebase.auth().signOut().then(() => {
              console.log('saliendo')
              window.location.href = "";
          })
      });
  }

  export { addEventsTimeLine }