/* eslint-disable no-undef */
import MockFirebase from 'mock-cloud-firestore';
import {getUser,getAllUsers,getCategory, getAllCategories, getPost,deletePostFs, updatePost, getAllPosts} from '../src/db/firestore.js'//getAllPosts es importante porque es quien tienen todos los posts de firebase
//simulacion de la base de datos
const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          post: 'My first post',
          idCategory: "1"
        },
        abc125: {
          post: 'My second post',
          idCategory: "2"
        },
        abc129: {
          post: 'Hola mundo!!!',
          idCategory: "3"
        },
      },
    },
    categories: {
      __doc__: {
        a1: {
          category: 'programacion'
        },
        b2: {
         
          category: 'idiomas'
        },
        c3: {
        
          category: 'manualidades'
        },
      },
    },
    users: {
      __doc__: {
        user1: {
          nameUser: 'Diana Huaripayta G'
        },
        user2: {
         
          nameUser: 'Aura Margarita Zambrano'
        },
        user3: {
        
          nameUser: 'Yovana Velasquez Cruz'
        },
      },
    },
  },
};

// Colocamos 'isNaiveSnapshotListenerEnabled: true' para que onSnapshot dea toda su informacion
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });//muy importante snapshot es el obj que contiene la data de la base de datos
/* ---------------getPost----------------- */
describe('getPost', () => {
  it('darme todos los posts', () => getPost('abc125').then((dataPost) => {
    const result = dataPost.data();
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

/* --------test------ */
describe('updatePost', () => {
  it('debería poder actualizar un post por su id', async () => {
    const posts = await getAllPosts();
    posts.forEach((doc) => {
      if (doc.id === 'abc125') {
        updatePost('abc125', { post: 'Post modificado' }).then(() => {
          const result = doc.data();
          expect(result.post).toBe('Post modificado');
        });
      }
    });
  });
});
/* -------------getCategory------------- */

describe('getCategory', () => {
  it('deberia darme la categoria seleccionada usando la getAllCategories ', async () => {
    const categories = await getAllCategories();
    categories.forEach((doc) => {
      if (doc.id === 'a1') {
        getCategory('a1', { category: 'programacion' }).then(() => {
          const result = doc.data();
          expect(result.category).toBe('programacion');
        });
      }
    });
  });
});
/* --------------getUser-------------- */
describe('getUser', () => {
  it('deberia darme el id de cada usuario', async () => {
    const users = await getAllUsers();
    users.forEach((doc) => {
      if (doc.id === 'user3') {
        getUser('user3', { nameUser: 'Yovana Velasquez Cruz' }).then(() => {
          const result = doc.data();
          expect(result.nameUser).toBe('Yovana Velasquez Cruz');
        });
      }
    });
  });
});