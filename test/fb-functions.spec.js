/* eslint-disable no-undef */

import {loginEmail,registerEmail /*, loginGoogle,signOut*/} from '../src/firebase/fb-functions.js'

// configurando firebase mock
import firebasemock from 'firebase-mock';


const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase =firebasemock.MockFirebaseSdk(
    // use null if your code does not use RTDB
    () => null,
    () => mockauth,
     //() => mockfirestore,
  );

 
describe('registerEmail',()=>{
 it('craer una cuenta con  correo:elopezvalerin@gmail.com y email:elopezvalerin@gmail.com y contraseña"Nino-124"',()=>{
     return registerEmail('elopezvalerin@gmail.com','Nino-124').then((user)=>{
         expect(user.email).toBe('elopezvalerin@gmail.com')
         expect(user.password).toBe('Nino-124')
     })
 }) 
})


describe('loginEmail',()=>{
    it('ingresar a la cuenta con un  correo:.com y email:elopezninos@gmail.com y contraseña"vaca-124"',()=>{
        return loginEmail('elopezninos@gmail.com','vaca-124').then((user)=>{
            expect(user.email).toBe('elopezninos@gmail.com')
            
        })
    }) 
   })
   

























