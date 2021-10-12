
import {infoData, getListPostUser} from "../firebase/fb-firestore.js";
import {modalProfile} from "../view/modals.js"
import {setTemplateListPosts} from "../view/templatePost.js"

const viewProfile =()=>{
    const divProfile=document.createElement('div');
    divProfile.classList.add('profileContainer')
    const infoUser = () => { firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        infoData(user.uid, (data)=>{
           templateProfile(data);
        })
        const templateProfile = (userObject) => {
            const htmlProfile = `
            <section class='profile profileB'>
                <section class="profile__cover">
                    <img class=" imgUser profileImgUser" src="${userObject.userPhoto}" alt="photoUser">
                </section>
                <section class="profileUser">
                    <span  id="btnEditProfile" class="editProfile"> <i class="fas fa-edit "></i></span>          
                    <h2 class="pUser userNameProfile"> ${userObject.userName} ${userObject.userLastname} </h2>
                    <h3 class="companyProfileName"> ${userObject.userCompany} </h3>
                    <div class="iconProfile">
                        <i class="fas fa-phone-square-alt"></i>
                        <span  > ${userObject.userPhone}</span>
                    </div>
                    <div class="iconProfile">
                        <i class="fas fa-at"></i>
                        <span> ${userObject.userEmail}</span>
                    </div>
                    <div class="iconProfile">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${userObject.userLocation}</span>
                    </div>
                    <div class="profile__infoUser">
                        <h3>Mi emprendimiento</h3>
                        <div class= "CompanyDescription">${userObject.userDescription}</div>
                    </div>
                </section>
                
                <section id="modalEditProfile" class="modalVerification modalDeletePost "></section>
                <section id="containerProfileListPosts"> </section>
   
            </section > 
            `; 
        divProfile.innerHTML=htmlProfile;
        
        const btneditProfile = divProfile.querySelector("#btnEditProfile");
        const containerEditProfile = divProfile.querySelector("#modalEditProfile");
        const containerListPostsProfile = divProfile.querySelector("#containerProfileListPosts");
    
   
        getListPostUser(user.uid, (data) => {
            setTemplateListPosts(data,user,containerListPostsProfile);
         
        })


        btneditProfile.addEventListener("click",(e) => {
           e.preventDefault();
           containerEditProfile.appendChild(modalProfile())
        })
   
       }  
        }

    })}

    infoUser();
    return divProfile;
}

export {viewProfile}
