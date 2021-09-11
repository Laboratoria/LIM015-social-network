export default () => {
    const viewLogin = document.createElement('div');
    viewLogin.className = 'container';
    viewLogin.innerHTML = `
    <div class="column1 imgBx imgLogin">
    <div class="form-group-registro">
        <label for="">Eres Nuevo Aqui? Empecemos</label> <br>
        <a href="#/signup"> <button type="button" class="btn btn-outline-primary">REGISTRATE</button> </a> 
    </div>
</div>
<div class="column2 form-container">
    <div class="container-logo">
        <img class="logo" src="../images/svg/logo.svg" alt="logo"><br>
    </div>
    <br>
  
</div>`;
    return viewLogin;
}