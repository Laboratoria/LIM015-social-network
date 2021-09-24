
const  viewFooter = () => {
    const divFooter =/*html*/ `    
    <div>Realizado por Corporación Makipura Teams<br>©️ 2021 By <a  href="">Marlene</a> &#38 <a href="">Natalia</a> &#38 <a href="">Elizabeth</a></div>
    
    `
    const sectionFooter =document.createElement('footer');
    sectionFooter.innerHTML= divFooter ;
    
     
    return sectionFooter
  }
   
  
  export {viewFooter};