
import { viewLogin } from './login.js'
import { viewRegister } from './register.js'
import { viewHome } from './home.js'
import { viewProfile } from './profile.js'
import { view404 } from './Err404.js'
import  {viewHeader} from '../view/header.js'


const components={
    login: viewLogin,
    register: viewRegister,
    home: viewHome,
    profile: viewProfile,
    Err404: view404,
    header: viewHeader
}


export {components};
