import { loginEmail, resetPassword, loginGoogle,registerEmail, signOut } from '../src/db/firebase-auth.js';
/* eslint-disable no-undef */
/* trae lo que necesita  */
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();//metodo de mockFirebase
global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
/* ---------------loginEmail-------------*/
describe('login con email y password', () => {
  it('debería iniciar sesión', () => loginEmail('newuser@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('newuser@gmail.com');
    }));
});
/* ---------------login google------------- */
describe('loginGoogle', () => {
  it('Deberia iniciar sesión con mi cuenta Google', () => { loginGoogle()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('google.com');
    });
  })
})
/*--------------registerEmail----------------*/
describe('crear nuevo usuario', () =>{
  it('deberia ingresar con la nueva cuenta creada',() => registerEmail('courseShare@gmail.com', '123456')
  .then((user)=>{
    expect(user.email).toBe('courseShare@gmail.com')
  }));
})

/* --------------resetPassword------------- */
describe('resetPassword', () => {
  it('Deberia enviar un email para restablecer contraseña', () => {
    const mockSendPasswordResetEmail = jest.fn();// jest.fn() - simula una funcion- jest
    firebase.auth().sendPasswordResetEmail = mockSendPasswordResetEmail;
    resetPassword('test@gmail.com')
    // verifica si fue llamado el método de firebase
    expect(mockSendPasswordResetEmail).toHaveBeenCalled();
    expect(mockSendPasswordResetEmail.mock.calls).toHaveLength(1);//ver que tiene la propiedad lenght y a demas tiene un valor numerico
    // verifica si el metodo recibio como arg el email
    expect(mockSendPasswordResetEmail).toHaveBeenCalledWith('test@gmail.com');
  })
})
/* ---------------signOut-------------- */
describe('log out',() => {
  it('it could log out with signOut', () => signOut()
  .then((user)=>{
    expect(user).toBe(undefined)
  }))
})



