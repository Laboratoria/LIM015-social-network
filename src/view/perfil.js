const viewPerfil =()=>{

    const htmlPerfil=
    ` <div> Este es perfil</div>`;
    
    
    const divPerfil=document.createElement('div');
    divPerfil.innerHTML=htmlPerfil;

    return divPerfil;

}


export  {viewPerfil}