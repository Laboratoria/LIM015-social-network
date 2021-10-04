const viewProfile =()=>{
  

  


    const htmlProfile = `
    <section class='profile'>
        <section class="profile__cover">
            <img class=" imgUser profileImgUser" src="./img/usuario.png" alt="photoUser">
        </section>
        <section class="profileUser">
            <span class="editProfile"> <i class="fas fa-edit "></i></span>          
            <h2> Aqui va el nombre</h2>
            <h3>Aqui va el nombre del emprendimiento</h3>
            <div class="iconProfile">
                <i class="fas fa-phone-square-alt"></i>
                <span>984170771</span>
            </div>
            <div class="iconProfile">
                <i class="fas fa-at"></i>
                <span>orihuelaramirezam@gmail.com</span>
            </div>
            <div class="iconProfile">
                <i class="fas fa-map-marker-alt"></i>
                <span>Ayacucho, Perú</span>
            </div>
            <div class="profile__infoUser">
                <h3>Mi emprendimiento</h3>
                <span>aqui va una pequeña intro de su emprendimiento</span>
            </div>
        </section>
    </section > 
    `;
       




    /*firebase.firestore().collection('users').doc('6oyY6sr0RcNNeUvyd3N2').onSnapshot((doc =>
        console.log(doc)));*/

        firebase.firestore().collection('Users').where('userId', '==', 'WqSZ9Ub1jFVsBTWPY1Wbv4xHzOy1').get().then(posts => {

            console.log(posts)
             posts.docs.map(e => {
                console.log(e.data());
                console.log(e.data().userLastname);


            })
        })




    const divProfile=document.createElement('div');
    divProfile.classList.add('profileContainer')
    divProfile.innerHTML=htmlProfile;

    return divProfile;
}

export  {viewProfile}