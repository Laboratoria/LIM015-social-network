// importamos la funcion que vamos a testear
import {
  userSignUp,
  userSignIn,
  loginGoogle,
  loginFacebook,
  verifyEmail,
  currentUser,
} from '../src/firebase/autenticacion.js';


const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
);

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

describe('Registro de usuario', () => {
  it('Deberia poder registrarse', () => userSignUp('gutmontemel@gmail.com', 'melissa')
    .then((user) => {
      expect(user.email).toBe('gutmontemel@gmail.com');
      expect(user.password).toBe('melissa');
    }));
});

// describe('Verficar cuenta email', () => {
//   it('Debería enviar un email de verificación', () => { 
//     const mockSendEmail = jest.fn();
//     firebase.auth().currentUser.sendEmailVerification = mockSendEmail;
//     verifyEmail();
//     expect(mockSendEmail).toHaveBeenCalled();
//     expect(mockSendEmail.mock.calls).toHaveLength(1);
//   });
// });



describe('Iniciar sesion con correo', () => {
  it('Deberia poder iniciar sesión', () => userSignIn('pamela.rupay31@google.com', 'laboratoria')
    .then((user) => {
      expect(user.email).toBe('pamela.rupay31@google.com');
    }));
});

describe('Logearse con google', () => {
  it('Debería poder logearse con una cuenta de google', () => loginGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});

describe('Logearse con facebook', () => {
  it('Debería poder loguearse con una cuenta de facebook', () => loginFacebook()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('facebook.com');
    }));
});

describe('Verify current user ', () => {
  it('Deberia extraer a usuario logeado', () => {
    const mockUser = {
      currentUser: { uid: '001' },
    };
    firebase.auth().currentUser = mockUser.currentUser;
    expect(currentUser().uid).toEqual('001');
  });
});
