/* eslint-disable no-undef */

import {
  loginEmail,
  registerEmail,
  loginGoogle,
  signOut,
} from "../src/firebase/fb-functions.js";

// configurando firebase mock
import firebasemock from "firebase-mock";

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth
  //() => mockfirestore,
);

const users = {
  email: "ben@example.com",
  password: "examplePass",
};

describe("registerEmail", () => {
  it('craer una cuenta con  correo:elopezvalerin@gmail.com y email:elopezvalerin@gmail.com y contraseña"Nino-124"', () => {
    registerEmail("elopezvalerin@gmail.com", "Nino-124").then((user) => {
      expect(user.email).toBe("elopezvalerin@gmail.com");
      expect(user.password).toBe("Nino-124");
    });
  });
});

describe("loginEmail", () => {
  it('ingresar a la cuenta con un  correo:.com y email:elopezninos@gmail.com y contraseña"vaca-124"', () => {
    loginEmail("elopezninos@gmail.com", "vaca-124").then((user) => {
      expect(user.email).toBe("elopezninos@gmail.com");
    });
  });
});

describe("loginGoogle", () => {
  it("ingresar a la cuenta con una cuenta existente en google de correo:ben@example.com", () => {
    loginGoogle(users.email, users.password).then((user) => {
      expect(user).toEqual(users);
    });
  });
});

describe("signOut", () => {
  it("permite cerrar sesion de una cuenta abierta", () => {
    signOut().then((user) => {
      expect(user).toEqual("llore a mares ");
    });
  });
});


