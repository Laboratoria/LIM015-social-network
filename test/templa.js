
/**
 * @jest-environment jsdom
 */

import {setTemplateListPosts } from  "../src/view/templatePost.js"


const post =[
    {
      id: '1',
      data: () => ({ 
      date: "26/9/2021 11:20:08",
      likes: [],
      userId: "id1",
      userPhoto: "./img/usuario.png",
      userPost: " test 1",
      username:"naty",
     })
    },
    {
      id: '2',
      data: () => ({ 
      date: "26/9/2021 11:21:08",
      likes: [],
      userId: "id1",
      userPhoto: "./img/usuario.png",
      userPost: " test 2",
      username:"naty",
     })
    },
    ];

   const  mujer = 
     {
      isAnonymous: false,
      uid: 'id1',
      email: 'bob@somedomain.com',
      displayName: 'Bob',
      photoURL:" "
     }
   ;

const divpost = document.createElement("div");
divpost.setAttribute("id","postsPrueba");
//console.log(setTemplateListPosts(post,mujer,divpost));

describe('setTemplateListPosts',( )=>{

 it ("setTemplateListPosts deberia pintar el post en un contenedor ",()=>{
  
    const elem = setTemplateListPosts(post,mujer,divpost);
    expect(elem.querySelector('#text-1').textContent.trim()).toBe('test 1');

 })

})

