export default () => {
    const viewLogin = document.createElement('div');
    viewLogin.className = 'container';
    viewLogin.innerHTML = `
    <div class="main-box">
        <div class="box-brand">
            <img src="../images/svg/logo.svg" alt="" class="logoPassword"> 
        </div> 
        <div class="box-img">
            <img src="../images/svg/PasswordChange.png" alt="" class="imgPassword"> 
        </div> 
        
        <div class="description">
            <h3>¿Olvido su contraseña?</h3>
            <p class="introduction">Puedes restablecer tu contraseña aquí</p>
        </div>

        <div class="inputs-btn">
            <input type="email"  id="emailReset" placeholder="example@example.com" class="form-input">
            <br>
            <button class="btn btn-primary" id="btn-resetPassword">RESTABLECER CONTRASEÑA</button>
            <span id="msgSendEmail" class="msg-password"></span>

            <span id = "errorReset" class="msg-password-error"></span>
            <a href="" class="link-secondary volver">Volver</a>
        </div>
    </div> 
    
 `;
    return viewLogin;
}