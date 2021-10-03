import Login from './login/viewLogin.js';
import SignUp from './register/viewSignUp.js';
import error404 from './404/view404.js';
import timeLine from './timeline/viewTimeline.js';
import ForgetPassword from './password/viewResetPassword.js';
import { header } from './header/viewHeader.js';
import profile from './profile/viewProfile.js';
const components = {
    login: Login,
    signUp: SignUp,
    error: error404,
    header: header,
    timeLine: timeLine,
    forgetPassword: ForgetPassword,
    profile: profile
}
export { components };