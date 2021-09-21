/* eslint-disable no-undef */

import {/*
  savePost, */onGetPosts, deletePosts/*, updatePost, getPost,  getPost*/
} from "../src/firebase/fb-firestore.js";

import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    newPosts: {
      __doc__: {
          abc120: {
          userPost: 'preparar la pildora',
          
        },
        abc121: {
          userPost: 'comer fuera',
          
        },
      }
    }
  }
}



global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

/*
describe('savePost', () => {
  it('Debería poder agregar un post y guardar ', (done) => {
    return savePost('preparar la pildora')
    .then(()=>{
      const callback=(post)=>{
        const result =post.find(element=>{
          return element.userPost==='preparar la pildora';
        })
        expect (result.userPost).toBe('preparar la pildora');
        done()
      }      
      onGetPosts(callback)
    })
  })}); */


  describe('deletePost', () => {

  it('Debería poder eliminar una nota con el id "abc121"', (done) => {
    return deletePosts('abc120')
      .then(() => onGetPosts(
        (data) => {
          console.log(data);
          const result = data.find((note) => note.id === 'abc120');
          console.log(result);
          expect(result).toBe(undefined);
          done()
        }
      ))
  })
})


