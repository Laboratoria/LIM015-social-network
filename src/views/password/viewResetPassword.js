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
            <p class="introduction text-dark">Puedes restablecer tu contraseña aquí</p>
        </div>

        <div class="inputs-btn">
            <div class="form-group">
                <i class="fas fa-envelope" style="margin-top:-22px"></i>
                <input  id="emailReset" type="email" class="form-input" placeholder="example@example.com" required>
            </div>

            <button class="btn btn-primary" id="btn-resetPassword">RESTABLECER CONTRASEÑA</button>
            <span id="msgSendEmail" class="msg-password"></span>

            <span id = "errorReset" class="msg-password-error"></span>
            <a href="" class="link-secondary volver">Volver</a>
        </div>
    </div> 
    
 `;
    return viewLogin;
}