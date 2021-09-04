
const viewInicio =()=>{

    const htmlInicio=
    ` <div> Este es inicio</div>`;
    

    const divInicio=document.createElement('div');
    divInicio.innerHTML=htmlInicio;

    return divInicio;

}


export  {viewInicio}