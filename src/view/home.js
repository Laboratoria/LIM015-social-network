import {
  savePosts,
  onGetPosts,
  deletePosts,
  updatePost,
} from "../firebase/fb-firestore.js";

const viewHome = () => {
  const htmlHome = `
      <section id="home" class="home">

        <section id="homeProfile" class="home__profile">
          <div id="home-imgUser" class="home__imgUser">Aca irá imgUser</div>
          <div id="name" class="home__nameuser"> ver perfil </div>
        </section>

        <section id="postHomeContainer">
          <form id="postHome-form">
            <div id="boxInputPost">
              <textarea id="postArea" class="HomeShare__input" placeholder="¿ Que desea compartir?" rows="4" cols="50"
                autofocus></textarea>
            </div>
            <div>
              <input type="submit" id="buttonPostHome" class="button button--main" value="Compartir"> 
            </div>
          </form>
        </section>

        <section id="postsHomeContainer">
        </section>

      </section>
      `;
  const divHome = document.createElement("div");
  divHome.innerHTML = htmlHome;

  const homePost = divHome.querySelector("#postHome-form");
  const postArea = divHome.querySelector("#postArea");

  const postsContainer = divHome.querySelector("#postsHomeContainer");
  // const getPosts = () => firebase.firestore().collection('posts').get();

  const showAllPosts = async (section) => {
    onGetPosts((snapshot) => {
      postsContainer.innerHTML = "";
      const newSection = document.createElement("section");
      snapshot.forEach((doc) => {
        const postText = doc.data();
        postText.id = doc.id;

        newSection.innerHTML += `
        <div class="home__imgUser">ImgUser</div>
        <div class="home__nameuser"> compartió </div>
        <div> 3 septiembre </div>
      
        <div class="HomeShare__input">
          <textarea class="HomeShare__input" rows="4" cols="50" id="text-${postText.id}" data-id="${postText.id}"
            readonly>${postText.post}</textarea>
        </div>
      
        <div class="home__like"> me gusta</div>
        <button class="btn-edit" data-id="${postText.id}"> editar</button>
        <button class="btn-delete" data-id="${postText.id}"> eliminar</button>  
        `;
        section.appendChild(newSection);

        const btnsDelete = postsContainer.querySelectorAll(".btn-delete");
        btnsDelete.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            await deletePosts(e.target.dataset.id);
          });
        });
        const btnsEdit = postsContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            console.log(btn);
            const idTextPost = e.target.dataset.id;
            const contentTextPost = document.getElementById(
              `text-${idTextPost}`
            );
            contentTextPost.removeAttribute("readonly");
            console.log(contentTextPost.value);
            await updatePost(idTextPost, { post: contentTextPost.value });
            contentTextPost.focus();
            btn.innerText = "Guardar";
          });
        });
      });
    });
  };

  showAllPosts(postsContainer);

  homePost.addEventListener("submit", async () => {
    showAllPosts(postsContainer);
  });

  homePost.addEventListener("submit", async (e) => {
    e.preventDefault();
    const post = postArea.value;

    await savePosts(post);
    homePost.reset();
    postArea.focus();
  });

  return divHome;
};

export { viewHome };
