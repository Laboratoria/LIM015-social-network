/* eslint-disable no-undef */

/*import {
    updateProfile
  } from "../src/firebase/fb-functions.js";


  import firebasemock from "firebase-mock";
  
  const mockauth = new firebasemock.MockAuthentication();
  const mockfirestore = new firebasemock.MockFirestore();
  const mockstorage = new firebasemock.MockStorage();
  
  mockauth.autoFlush();
  mockfirestore.autoFlush();
  
  global.firebase = firebasemock.MockFirebaseSdk(
    // use null if your code does not use RTDB
    () => null,
    () => mockauth,
    () => mockstorage,
    () => mockfirestore,
    // () => moc
    // () => mockdatabase,
  );

/*describe('update user', () => {
    it('Deberia ser una función updateUser', () => {
      expect(typeof */

 /* describe("updateProfile", () => {
    it("Permite actualizar la data en el firebase recibiendo como parámetro  el nombre del usuario:Ninoska ", () => {
        (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
            currentUser: { email: 'example@gmail.com', uid: 1, emailVerified: true },
          });
        return updateProfile("Ninoska").then((data) => {
        console.log(data);
        expect(data.data().displayName).toEqual("Ninoska");
      });
    });
  }); */