export default () => {
  const main = document.querySelector('.views'); // este main es para las vistas
  const article = document.createElement('article');
  const usergoogle = JSON.parse(localStorage.getItem('user'));
  const emailUser = localStorage.getItem('email');
  const emailName = localStorage.getItem('name');

  article.innerHTML = `
  <section class="profile" id="profile">
  <div class="contenedor">
    <!--Sección de Perfil-->
    <div class="section-profile">
      
        <div class="profile-banner">
        </div>

        <!--Información del usuario-->
        <div class="Section-user">
           <div class="information-user">
             ${usergoogle !== null ? `<img src="${usergoogle.photo}" class="pic-user" alt="Foto de perfil" />` : '<img src="images/profileDefault.jpeg" class="pic-user" alt="Foto de perfil por defecto" />'}
           </div>
           <div class="nameUser">
             ${emailUser !== null ? `<h2>${emailName}<br>${emailUser}</h2>` : `<h2>${usergoogle.name}<br>${usergoogle.email}</h2>`}
           </div>
           <button class="follow">Follow</button>
        </div>
           
        <!--Columna de Gustos e intereses del usuario-->
        <div class="info-user">
          <h3 class="title">Acerca de mi:</h3>
          <div class="txt-info">
          <textarea
           name="message"
           class="edit textarea"
           placeholder="Comparte tus gustos en intereses"></textarea>
        </div>
       <div class="btn-edit">
        <button type="submit" class="edit_button">Editar</button>
       </div>
        <p class="text-print">texto impreso</p>  
     
    </div>
  </div>
</section>`;
  main.appendChild(article);
};
