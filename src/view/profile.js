import  {header} from '../View/header.js'

const viewProfile =()=>{

    const htmlProfile=
    ` <div>  
    <nav>${header}</nav> 
    
    Este es perfil</div>`;
    
    
    const divProfile=document.createElement('div');
    divProfile.innerHTML=htmlProfile;

    return divProfile;

}


export  {viewProfile}