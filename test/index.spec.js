// importamos la funcion que vamos a testear
/* eslint-disable no-undef */
import { resetPassword, loginGoogle } from "../src/firebase.js"
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('resetPassword', () => {
  it('Deberia enviar un email para restablecer contraseña', () => {
    const mockSendPasswordResetEmail = jest.fn();
    firebase.auth().sendPasswordResetEmail = mockSendPasswordResetEmail;
    resetPassword('test@gmail.com')
    // verifica si fue llamado el método de firebase
    expect(mockSendPasswordResetEmail).toHaveBeenCalled();
    expect(mockSendPasswordResetEmail.mock.calls).toHaveLength(1);
    // verifica si el metodo recibio como arg el email
    expect(mockSendPasswordResetEmail).toHaveBeenCalledWith('test@gmail.com');
  })
})

describe('loginGoogle', () => {
  it('Deberia iniciar sesión con mi cuenta Google', () => { loginGoogle()
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('google.com');
    });
  })
})


