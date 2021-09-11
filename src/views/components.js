import Login from './login.js';
import SignUp from './signUp.js';
import error404 from './404.js';
import timeLine from './timeline.js';
import ForgetPassword from './forgetPassword.js';
const components = {
    login: Login,
    signUp: SignUp,
    error: error404,
    timeLine: timeLine,
    forgetPassword: ForgetPassword
}
export { components };