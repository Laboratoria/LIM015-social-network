const viewLogin =()=>{

    const htmlLogin=
    ` <div> Este es login
    </div>`;
    
    
    const divLogin=document.createElement('div');
    divLogin.innerHTML=htmlLogin;

    return divLogin;

}


export  {viewLogin}