const view404 =()=>{

    const html404=
    ` <div class="contentError404"> 
   
    <img class="error404Img" src="../img/error404.png"></img>
    <p>!Ups!</p>
    <h1> Pagina no encontrada </h1>
    </div>`;
    
    const div404=document.createElement('div');
    div404.innerHTML=html404;

    return div404;

}


export  {view404}