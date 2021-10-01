/* eslint-disable no-undef */

import {
  loginEmail,
  registerEmail,
  loginGoogle,
  signOut/*,updateProfile*/
} from "../src/firebase/fb-functions.js";

// configurando firebase mock
import firebasemock from "firebase-mock";
//import MockFirebase from 'mock-cloud-firestore';

const mockauth = new firebasemock.MockAuthentication();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth
  //() => mockfirestore,
);

const users = {isAnonymous: false, providerData: [{providerId: "google.com"}]}
  



describe("registerEmail", () => {
  it('craer una cuenta con  correo:elopezvalerin@gmail.com y email:elopezvalerin@gmail.com y contraseña"Nino-124"', () => {
    return registerEmail("elopezvalerin@gmail.com", "Nino-124").then((user) => {
      expect(user.email).toBe("elopezvalerin@gmail.com");
      expect(user.password).toBe("Nino-124");
    });
  });
});

describe("loginEmail", () => {
  it('ingresar a la cuenta con un  correo:.com y email:elopezninos@gmail.com y contraseña"vaca-124"', () => {
   return  loginEmail("elopezninos@gmail.com", "vaca-124").then((user) => {
     // console.log({user});
      expect(user.email).toBe("elopezninos@gmail.com");
    });
  });
});

describe("loginGoogle", () => {
  it("ingresar a la cuenta con una cuenta existente en google de correo:ninoska133333@gmail.com", () => {
   return loginGoogle().then((data) => {
    //console.log({data});
    expect(data).toEqual(users);//contenga
    });
  });
});

describe("signOut", () => {
  it("permite cerrar sesion de una cuenta abierta", () => {
    return signOut().then((user) => {
      expect(user).toEqual(undefined);
    });
  });
});


/*
describe("updateProfile", () => {
  it("Permite actualizar la data en el firebase recibiendo como parámetro  el nombre del usuario:Ninoska ", () => {
    return updateProfile("Ninoska").then((data) => {
      console.log(data);
      expect(data.data().displayName).toEqual("Ninoska");
    });
  });
}); */

