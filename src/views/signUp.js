/* import{authSignUp}from'../db/auth.js'; */
export default () => {
    const viewSignUp = document.createElement('div');
    viewSignUp.className = 'container';
    viewSignUp.innerHTML = `
    <div class="column1 form-container">
                <div class="container-logo">
                    <img class="logo" src="../images/svg/logo.svg" alt="logo"><br>
                </div>
                <br>
                <form action="#" class="form" id="form-registro">
                    <div class="form-group">
                        <i class="fas fa-user"></i>
                        <label for="nameUser" class="form-label">Nombre Completo</label>
                        <input id="nameUser" type="text" class="form-input" placeholder="Escribe tu nombre completo" required>
                        <span id="msg-nameUser" class="msg"></span>
                    </div>

                    <div class="form-group">
                        <i class="fas fa-envelope"></i>
                        <label class="form-label">Correo Electrónico</label>
                        <input id="email" type="email" class="form-input" placeholder="example@example.com" required>
                        <span id="msg-email" class="msg"></span>
                    </div>

                    <div class="form-group">
                        <i class="fas fa-key"></i>
                        <label class="form-label">Contraseña</label>
                        <input id="password" type="password" class="form-input" placeholder="Ingrese su contraseña" required>
                        <i class="far fa-eye-slash eye"></i>
                        <span id="msg-password" class="msg"></span>
                    </div>

                    <div class="form-group">
                        <i class="fas fa-key"></i>
                        <label class="form-label">Confirmar Contraseña</label>
                        <input id="confirmPassword" type="password" class="form-input" placeholder="Repita su contraseña" required>
                        <i class="far fa-eye-slash eye"></i>
                        <span id="msg-confirmPassword" class="msg"></span>
                    </div>

                    <div class="form-group">
                        <button type="submit" id="btn-registro" class="form-submit btn btn-primary"> REGISTRARSE </button>
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
                            <label class="text-muted">¿Ya te registraste?</label>
                            <a href="#/" class="link-primary">Inicia Sesión</a>
                        </div>
                    </div>

                </form>

            </div>
            <div class="column2 imgBx imgRegistro">
                <div class="form-group-registro">
                    <label for="">¿Ya tienes una cuenta? Ingresemos...</label> <br>
                    <a href=""> <button type="button" class="btn btn-outline-primary"> INICIA SESION </button> </a> 
                </div>
            </div>
    `;


    /*     const formSignUp = viewSignUp.querySelector("#form-signUp"); */
    /*    authSignUp(formSignUp) */

    return viewSignUp;
}