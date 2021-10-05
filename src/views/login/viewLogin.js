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
        <img class="logo" src="../src/images/svg/logo.svg" alt="logo"><br>
    </div>
    <br>
    <form action="#" class="form" id="form-login">
        <div class="form-group">
            <i class="fas fa-envelope"></i>
            <label class="form-label">Correo Electrónico</label>
            <input id="email" type="email" class="form-input" placeholder="example@example.com" required>
            <span id="msg-email" class="msg"></span>
        </div>

        <div class="form-group">
            <i class="fas fa-key"></i>
            <label class="form-label">Contraseña</label>
            <input id="password" type="password" class="form-input" placeholder="Ingrese su contraseña"  autocomplete="off" required>
            <i class="far fa-eye-slash eye" id="show-password"></i>
        </div>

        <div class="form-group">
            <div class="container-group-checkbox">
                <div class="container-checkbox">
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label for="checkbox">Recuérdame</label>
                </div>
                <a href="#/forgetPassword" class="link-primary">¿Olvidó su Contraseña?</a>
            </div>
        </div>
        
        <div class="form-group">
            <button type="submit" id="btn-login" class="form-submit btn btn-primary"> INICIAR SESION </button>
        </div>

        <div class="form-group">
            <div class="separador">
                <div class="linea">&nbsp;</div>
                <div class="leyenda"> o </div>
                <div class="linea">&nbsp;</div>
            </div>
        </div>

        <div class="form-group">
            <button id="facebook" class="btn btn-outline-default"> <i class="fab fa-facebook fb"></i><label for="facebook">Ingresar con Facebook</label> </button>
        </div>

        <div class="form-group">
            <button id="google" class="btn btn-outline-default"> <i class="fab fa-google go"></i> <label for="google">Ingresar con Google</label> </button>
        </div>

        <div class="form-group section-registro">
            <div class="container-group-checkbox">
                <label class="text-muted">¿No te has registrado aún?</label>
                <a href="#/signup" class="link-primary">Regístrate</a>
            </div>
        </div>
    </form>
</div>`;
    return viewLogin;
}