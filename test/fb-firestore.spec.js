/* eslint-disable no-undef */


import {
  savePost,/* saveUser,*/ onGetPosts, deletePosts, updatePost, getPost , onGetUsers /*, infoData, updateUser, getListPostUser */
} from "../src/firebase/fb-firestore.js";



import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    newPosts: {
      __doc__: {
          abc120: {
          username:"Marlene",
          userPost:"post para test 2",
          date:"30/9/2021 10:53:15",
          userId:"ID2",
          likes:[],
          userPhoto:"https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c", 
          url:" "        
          },
          abc121: {
            username:"Elizabeth",
            userPost:"post para test 3",
            date:"31/10/2021 10:53:15",
            userId:"ID3",
            likes:[],
            userPhoto:"https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c",
            url:" "                 
          },
          abc122: {
            username:"Eliza",
            userPost:"post para test 4",
            date:"31/10/2021 10:53:15",
            userId:"ID4",
            likes:[],
            userPhoto:"https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c",
            url:" "              
          }

      }
    }
  }
}

//Natalia Espinoza Barrientos probandoooooooooo 30/9/2021 11:15:46 0RK4LsE4shcWXTu1JRl2i9FpJBy2  https://lh3.googleusercontent.com/a/AATXAJyOemBCuZrYkI4RmHST1cUhikHwci1C5y-oCoXM=s96-c []

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('savePost', () => {
  it('Debería poder agregar un post y guardar ', ( ) => { 
    return savePost("Natalia Espinoza Barrientos", "post para test 1", "30/9/2021 10:53:15","ID1", "https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c",[]," ")
    .then(( )=>{
       const callback =(notes) => {
       const result = notes.find((element) => element.userPost === "post para test 2");
       expect (result.id).toBe("abc120");         
       };
        onGetPosts(callback)  
      })  
    }   
  )}); 


  describe('deletePosts', () => {
    it('Debería poder eliminar un post de determinado ID ', ( ) => { 
      return deletePosts("abc121")
      .then(( )=>{
        const callback =(notes) => {
        const res = notes.find((element) => element.userPost === "post para test 3");
        expect (res).toBe(undefined);         
        };
         onGetPosts(callback)  
       })  
     }   
   )}); 


describe('updatePost', () => {
    it('Debería poder actualizar un valor de un elemento del post de determinado ID ', ( ) => { 

      return updatePost("abc120",{ username:"MiMoska",})
      .then(( )=>{
        const callback =(notes) => {
        const res= notes.find((element) => element.username === "MiMoska");
        expect (res.username).toBe("MiMoska");         
        };
         onGetPosts(callback)  
       })  
     }   
  )}
); 


describe('getPost', () => {
  it('Debería poder traer un post de determinado ID ', ( ) => { 
    return getPost("abc122")
    .then(( data)=>{
      const dataID=data.data()
        expect (dataID.userId).toBe("ID4",);         
    }  
    )}
  )
})



describe('onGetPosts', () => {
  it('Debería poder traer un post determinado, como parametro se introduce un callback', ( ) => { 

    updatePost("abc120",{ username:"MiMoska",})
    .then(( )=>{
      return onGetPosts((notes) => {
        const res= notes.find((element) => element.username === "MiMoska");
        expect (res.username).toBe("MiMoska");         
        })  
     })  
   }   
)}
); 

describe('onGetUsers', () => {
  it('Debería poder traer la data de todos los usuarios , como parámetro tiene un callaback', ( ) => { 

    onGetUsers("abc120",{ username:"MiMoska",})
    .then(( )=>{
      return onGetPosts((notes) => {
        const res= notes.find((element) => element.username === "MiMoska");
        expect (res.username).toBe("MiMoska");         
        })  
     })  
   }   
)}
); 












