
import {infoData} from "../firebase/fb-firestore.js";
import {modalProfile} from "../view/modals.js"
const viewProfile =()=>{


    
    const divProfile=document.createElement('div');
    divProfile.classList.add('profileContainer')
 

    const infoUser = () => { firebase.auth().onAuthStateChanged((user) => {
    if (user) {
       infoData(user.uid).then( res => {
          console.log(res[0].userId);
         const dataUser=res[0];
         const htmlProfile = `
         <section class='profile'>
             <section class="profile__cover">
                 <img class=" imgUser profileImgUser" src="${dataUser.userPhoto}" alt="photoUser">
             </section>
             <section class="profileUser">
                 <span  id="btnEditProfile" class="editProfile"> <i class="fas fa-edit "></i></span>          
                 <h2 class="pUser userNameProfile"> ${dataUser.userName} ${dataUser.userLastname} </h2>
                 <h3 class="companyProfileName"> ${dataUser.userCompany} </h3>
                 <div class="iconProfile">
                     <i class="fas fa-phone-square-alt"></i>
                     <span  > ${dataUser.userPhone}</span>
                 </div>
                 <div class="iconProfile">
                     <i class="fas fa-at"></i>
                     <span> ${dataUser.userEmail}</span>
                 </div>
                 <div class="iconProfile">
                     <i class="fas fa-map-marker-alt"></i>
                     <span>${dataUser.userLocation}</span>
                 </div>
                 <div class="profile__infoUser">
                     <h3>Mi emprendimiento</h3>
                     <span class= "CompanyDescription">${dataUser.userDescription}</span>
                 </div>
             </section>
             
             <section id="modalEditProfile" class="modalVerification modalDeletePost "></section>

         </section > 
         `; 
     divProfile.innerHTML=htmlProfile;

     const btneditProfile = divProfile.querySelector("#btnEditProfile");
     const containerEditProfile = divProfile.querySelector("#modalEditProfile");
     console.log(btneditProfile);
     console.log(containerEditProfile);

     btneditProfile.addEventListener("click",(e) => {
        e.preventDefault();
        containerEditProfile.appendChild(modalProfile())


     })

    })
    }
    })}
    
    infoUser()
        
  



    
    return divProfile;


}

export {viewProfile}
