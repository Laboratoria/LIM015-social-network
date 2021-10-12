/* eslint-disable no-undef */


import {
  savePost, saveUser, onGetPosts, deletePosts,
   updatePost, getPost , onGetUsers ,updateUser, infoData, dataUser, getListPostUser, orderByDatePost 
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
          },
          abc123: {
            username:"Eliza",
            userPost:"post para test 4",
            date:"31/10/2021 10:58:15",
            userId:"ID4",
            likes:[],
            userPhoto:"https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c",
            url:" "              
          }

      }
    },
    Users: {
      __doc__: {
        id1: {
        id: "id1",
        userCompany: "Mi Empresa SAC",
        userDescription: "Describe tu emprendimiento",
        userEmail: "orihuelaramirezam@gmail.com",
        userId: "qj3gQn6GXjNr9FQl1THMmh763MN2",
        userLastname: "orihuela ramirez",
        userLocation: "Distrito, Departamento, Perú",
        userName: "Marle",
        userPhone: "",
        userPhoto: "Photo1"
      },
      ID4: {
        id: "ID4",
        userCompany: "Mi Empresa SAC",
        userDescription: "Describe tu emprendimiento",
        userEmail: "Elizzam@gmail.com",
        userId: "qj3gQn6GXjNr9FQl1THMmh763MN2",
        userLastname: "Caceres",
        userLocation: "Distrito, Departamento, Perú",
        userName: "Eliza",
        userPhone: "",
        userPhoto: "https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c"
      }
      }
      
    }

  }
}


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
      const dataID=data.data();
      //console.log(dataID);
        expect (dataID.userId).toBe("ID4");         
    }).catch(error=>console.log(error))}
  )
});



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


const user1 = {  
  userId : "id2",
  userName: "Santiago",
  userLastname: "Qukin Especie",
  userPhoto:"Photo2",
  userEmail:"Santiago@gmail.com",
  userPhone:"",
  userCompany:"Mi maskot S.A.C" ,
  userLocation:"Callao,Perú",
  userDescription:"Me dedico a venta de comidas para mascotas"
  };

 
describe('saveUser', () => {
  it('Debería poder agregar un post y guardar ', ( ) => { 
    return saveUser(user1)
    .then(( )=>{
       const callback =(notes) => {
        //console.log(notes);
       const result = notes.find((element) => element.userEmail === "Santiago@gmail.com");
       expect (result.userLocation).toBe("Callao,Perú");         
       };
       onGetUsers(callback)  
      })  
    }   
  )}); 

  describe('onGetUsers', () => {
    it('Debería poder traer la data de todos los usuarios , como parámetro tiene un callback ', ( ) => { 
      saveUser(user1)
      .then(( )=>{
         const callback =(notes) => {
          //console.log(notes);
         const result = notes.find((element) => element.userEmail === "Santiago@gmail.com");
         expect (result.userCompany).toBe("Mi maskot S.A.C");         
         };
         return onGetUsers(callback)  
        })  
      }   
    )}); 

    const objectUser={userCompany:"Mia S.A.C"};
  describe('updateUser', () => {
      it('Debería poder actualizar la base de datos de la colección de usuarios "Users", recibe como parámetro un id y el objeto del keys que se quiera actualizar ', ( ) => { 
  
        return updateUser("id1",objectUser)
        .then(( )=>{
          const callback =(notes) => {
            // console.log(notes);
          const res= notes.find((element) => element.userCompany === "Mia S.A.C");
          expect (res.userCompany).toBe("Mia S.A.C");         
          };
          onGetUsers(callback) 
         })  
       }   
    )}
    ); 

  describe('infoData', () =>{
    it('Debería mostrar la data del usuario filtrada', ( ) => { 
      saveUser(user1)
      .then(()=>{
         const callback =(notes) => {
          //console.log(notes);
        //  const result = notes.find((element) => element.userEmail === "Santiago@gmail.com");
         expect (notes.userCompany).toBe("Mi maskot S.A.C");         
         };
         return infoData('id2',callback)  
        })  
      }   
   )}
   ); 
   

describe('dataUser', () =>{
  it('Debería poder devolver la data del usuario ', ( ) => { 
    saveUser(user1)
      .then(( )=>{
         const callback =(user) => {         
         expect (user.userCompany).toBe("Mi maskot S.A.C");         
         };
         return dataUser('id2',callback)  
        })
    }
  )}
);

describe('orderByDatePost', () =>{
  it('Debería ordenar las fechas de la decha mas antigua a la fecha mas nueva', ( ) => { 
    const dates= [
    {date: '8/10/2021 17:38:11'},
    {date: '8/10/2021 17:35:38'},
    {date: '8/10/2021 17:36:38'},
    {date: '8/10/2021 17:36:38'},
  ]
  const datesOrder= [
    {date: '8/10/2021 17:38:11'},
    {date: '8/10/2021 17:36:38'},
    {date: '8/10/2021 17:36:38'},
    {date: '8/10/2021 17:35:38'},    
  ]
    
  expect(orderByDatePost(dates)).toEqual(datesOrder);
}
)});

describe('getListPostUser', () => {
  it('Debería poder traer un post determinado, como parametro se introduce un callback', ( ) => { 
    updatePost("abc120",{ username:"MiMoska",})
    .then(( )=>{
      return getListPostUser("ID4", (notes) => {
        const result =  [
          {
            id: 'abc123',
            username: 'Eliza',
            userPost: 'post para test 4',
            date: '31/10/2021 10:58:15',
            userId: 'ID4',
            likes: [],
            userPhoto: 'https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c',
            url: ' '
          },
          {
            id: 'abc122',
            username: 'Eliza',
            userPost: 'post para test 4',
            date: '31/10/2021 10:53:15',
            userId: 'ID4',
            likes: [],
            userPhoto: 'https://lh3.googleusercontent.com/a-/AOh14Ghja4cIRhrdiKRVR1MCt8M5QDLRpByM8olNFqrV=s96-c',
            url: ' '
          }
        ]
        expect(notes).toEqual(result);         
        })  
     })  
   }   
)}
); 