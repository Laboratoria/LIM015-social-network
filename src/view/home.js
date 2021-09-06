export default () => {
 
    const viewHome = `
      <h2>Pets-Lovers</h2>
      <div class="home">
            <img src="img/home.jpg" id="home1" class="homeAnimal">
       
   
      </div>`;
      const divElem=document.createElement('div')
      divElem.innerHTML =viewHome;
      return divElem;
  };