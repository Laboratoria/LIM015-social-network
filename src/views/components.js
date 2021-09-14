import Login from './login.js';
import SignUp from './signUp.js';
import error404 from './404.js';
import timeLine from './timeline.js';
import ForgetPassword from './forgetPassword.js';
import header from './header.js';
const components = {
    login: Login,
    signUp: SignUp,
    error: error404,
    header: header,
    timeLine: timeLine,
    forgetPassword: ForgetPassword
}
export { components };