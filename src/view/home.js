import  {header} from '../View/header.js'

const viewHome =()=>{

    const htmlHome=
    `<div>
    <nav>${header}</nav> 
    Este es inicio</div>`;
    

    const divHome=document.createElement('div');
    divHome.innerHTML=htmlHome;

    return divHome;

}


export  {viewHome}