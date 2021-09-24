
const  viewFooter = () => {
    const divFooter =/*html*/ `    
    <div>Realizado por Corporación Makipura Teams<br>©️ 2021 By Marlene &#38 Natalia &#38 Elizabeth</div>
    
    `
    const sectionFooter =document.createElement('footer');
    sectionFooter.innerHTML= divFooter ;
    
     
    return sectionFooter
  }
   
  
  export {viewFooter};