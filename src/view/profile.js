const viewProfile =()=>{
  
   const infoUser = () => { firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.firestore().collection('Users').where('userId', '==', user.uid).get().then(posts => {
                console.log(posts)
                 posts.docs.map(e => {
                     return {
                        userId : e.data().userId,
                        userName: e.data().userName,
                        userLastname: e.data().userLastname,
                        userPhoto:  e.data().userPhoto,
                     }
            })}
            )
        } 
    })}

console.log(infoUser())



};  

     

/*
 const templateProfile = (data) => {

    const htmlProfile = `
    <section class='profile'>
        <section class="profile__cover">
            <img class=" imgUser profileImgUser" src="${data.userPhoto}" alt="photoUser">
        </section>
        <section class="profileUser">
            <span class="editProfile"> <i class="fas fa-edit "></i></span>          
            <h2>${data.userName}  ${data.userLastname}</h2>
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
       
    const divProfile=document.createElement('div');
    divProfile.classList.add('profileContainer')
    divProfile.innerHTML=htmlProfile;

    return divProfile;
 }*/
    


export  {viewProfile}