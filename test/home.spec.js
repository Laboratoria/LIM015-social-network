
/**
 * @jest-environment jsdom
 */

import {setTemplateListPosts } from  "../src/view/home.js"


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


/*

describe('postDetails UI', () => {
    it('Si no hay post y no editing === true no muestra nada', () => {
      const elem = postDetails({ post: null });
      expect(elem.innerHTML).toBe('');
    });

    it('Muestra informacion post', () => {
      const post = {
        id: 'id-1',
        text: 'Texto post test',
        dateCreated: {
          toDate: () => new Date(2021, 8, 21, 10, 0, 0),
        },
      };
      const elem = postDetails({ post });
  
      expect(elem.querySelector('h2').textContent.trim()).toBe('Post creado el 2021-09-21 a las 08:00');
      expect(elem.querySelectorAll('small')).toHaveLength(0); // no hay leyenda de fecha de edicion
      expect(elem.querySelector('input[type=hidden]').value).toBe('id-1');
      expect(elem.querySelectorAll('textarea')).toHaveLength(0);
      expect(elem.querySelector('p').textContent.trim()).toBe('Texto post test');
      expect(elem.querySelectorAll('#btn-editar')).toHaveLength(1);
      expect(elem.querySelectorAll('#btn-eliminar')).toHaveLength(1);
      expect(elem.querySelectorAll('#btn-crear')).toHaveLength(0);
      expect(elem.querySelectorAll('#btn-guardar')).toHaveLength(0);
    });

    */