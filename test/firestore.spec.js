/* eslint-disable no-undef */
import MockFirebase from 'mock-cloud-firestore';
import {getAllPosts, deletePostFs} from '../src/db/firestore.js'
//simulacion de la base de datos
const fixtureData = {
    __collection__: {
      posts: {
        __doc__: {
          abc123: {
            post: 'My first post',
          },
          cba321: {
            post: 'My second post',
          },
        },
      },
    },
  };
// Colocamos 'isNaiveSnapshotListenerEnabled: true' para que onSnapshot dea toda su informacion
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });//muy importante snapshot es el obj que contiene la data de la base de datos
/* ----------getAllPosts---------- */
describe('getPost', () => {
    it('Debería poder obtener el post con id=acba321', () => getAllPosts('cba321')
    .then((dataPost) => {
      const result = dataPost.data();
      // console.log(result); // Obtenemos el post con id = 'cba321'
      expect(result.post).toBe('My second post');
    }));
});
/* --------------deletePostFs---------------- */
describe('deletePostFs', () =>{
   it('it should delete posts', () =>{
       deletePostFs().then((postDoc)=>{
        expect(postDoc).toBe(undefined);
        getAllPosts()
       })
   })
})
