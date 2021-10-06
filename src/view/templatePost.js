import {
    updatePost,
    getPost,
  } from "../firebase/fb-firestore.js";
  import {modalDelete} from "../view/modals.js"


const setTemplateListPosts = (data, user,postListContainer) => {

    postListContainer.innerHTML = "";

    data.forEach((doc) => {
      const postText = doc/*.data()*/;
      postText.id = doc.id;

      postListContainer.innerHTML += /*html*/ `
      <section class="postAreaUser">
        <div class="home_postHeader">
          <div class="home__imgUser" id="userImg" >
            <img class="imgUser postImgUser" src="${postText.userPhoto}"> 
          </div>
          <div class="home__nameDate">
            <div><b>${postText.username}</b><span class="textSecundary"> compartió</span></div>
            <div class="textSecundary">${postText.date}</div>
          </div>
        </div>
        <div class="post__inputtext">
        ${ postText.userPost?

          `<p class="post__input" id="text-${postText.id}" data-id="${postText.userId}">${postText.userPost}</p>
          <textarea class="post__input" id="textearea-${postText.id}" data-id="${postText.userId}" hidden="true" readonly>${postText.userPost}</textarea>`
           : ``}

          ${postText.url? `<img class="post__imgPost" src="${postText.url}"  alt="photoPost">`: ``}
             
        </div>
        
        <div class="home_likeButtonSection">
          <div class="home__like"> 
            <i class="${postText.likes.includes(user.uid) ? 'fas' : 'far'} fa-heart" data-id="${postText.id}"></i>
            <span>${postText.likes.length ? postText.likes.length : ''} </span>
          </div>
          ${
            postText.userId === user.uid
              ? `<div class=" btns-edit-delete" name="${postText.userId}" data-id-post="${postText.userId}">
              <button class="btn-post btn-edit" data-id="${postText.id}"> editar</button>
              <button class="btn-post btn-delete" id='delete-${postText.id}' data-id="${postText.id}"> eliminar</button>
              <button class="btn-post btn-cancelEdit" id='cancel-${postText.id}' data-id="${postText.id}" hidden>descartar</button>
              </div>`
              : ""}
        </div>
        
        <section id="modalDeletePost" class="modalVerification modalDeletePost "></section>

                   
    </section> `;

    });

    // Función que elimina el post
    const btnDelete = postListContainer.querySelectorAll(".btn-delete");
    const btnEdit = document.querySelectorAll(".btn-edit");
    const modaldeletePost = document.querySelector("#modalDeletePost");


    btnDelete.forEach((btn) =>{     
      btn.addEventListener("click",  (e) => {
        try {
          modaldeletePost.appendChild(modalDelete(e.target.dataset.id))              
        }catch (error){
          console.log(error)
        }
        })
    }
    );


    //funcion dar likes
    const iconLikes = postListContainer.querySelectorAll('.fa-heart');
    iconLikes.forEach((icon)=>{
      icon.addEventListener('click' , async (e)=>{
        const idDocPost = e.target.dataset.id;
        let likesArray = await getPost(idDocPost).then((doc)=>{
          return  doc.data().likes
        })
           if(!likesArray.includes(user.uid)){
            likesArray.push(user.uid);
             await updatePost(idDocPost,{ likes: likesArray});    
          }else{
            
            likesArray=likesArray.filter(lik=>lik!==user.uid);
            await updatePost(idDocPost,{ likes: likesArray});
          }
               
      })
    }) 


    // Función que editar el post    
    const prueba = (btnEdit) =>{
      btnEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try{

            e.preventDefault();
            const idDocPost = e.target.dataset.id;
            const contentTextPost = document.getElementById(`text-${idDocPost}`);
            const btnDeletePost = document.getElementById(`delete-${idDocPost}`);
            const btnCancelPost = document.getElementById(`cancel-${idDocPost}`);
            const textarea= document.getElementById(`textearea-${idDocPost}`)

            btnDeletePost.setAttribute('hidden',true);
            btnCancelPost.removeAttribute('hidden');

            textarea.removeAttribute('hidden');
            contentTextPost.setAttribute('hidden',true);
            textarea.removeAttribute("readonly");

            btn.innerText = 'guardar';
          
            if(e.target.innerText == 'GUARDAR'){

              btn.classList.remove('btn-edit');
              // btnDeletePost.removeAttribute('data-id')
              btn.addEventListener('click',async (e) => {
              try{
                e.preventDefault()
                textarea.setAttribute("readonly", true);
                
                btn.innerText = 'editar';
                await updatePost(idDocPost, { userPost: textarea.value});
                if(e.target.innerText == 'EDITAR'){
                  contentTextPost.setAttribute("readonly", false);
                  btnDeletePost.setAttribute('hidden', false);
                  btn.classList.add('btn-edit');
                  prueba(btnEdit)
                }
              }catch(error){
                console.log(error)
              }
              })
            }

            btnCancelPost.addEventListener('click', async () => {
              try{
                const idDocPost = e.target.dataset.id;
                contentTextPost.removeAttribute('hidden');
                textarea.setAttribute('hidden',true);

                await getPost(idDocPost).then((doc)=>{
                textarea.value = doc.data().userPost;

                btnDeletePost.removeAttribute('hidden');
                btnCancelPost.setAttribute('hidden', true);
                btn.classList.add('btn-edit');
                btn.innerText = 'editar';
                textarea.setAttribute("readonly" , true);
                prueba(btnEdit)
              })
              }
              catch(error){
                console.log(error)
              }
            })
            textarea.focus();
          }catch(error){
            console.log(error)
          }
        });
      });
    }
    prueba(btnEdit)


    return postListContainer;

};


export {setTemplateListPosts};