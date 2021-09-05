const viewRegister =()=>{

    const htmlRegister=
    ` <div> 
       
    Este es el registro</div>`;
    
    
    const divRegister=document.createElement('div');
    divRegister.innerHTML=htmlRegister;

    return divRegister;

}


export  {viewRegister}