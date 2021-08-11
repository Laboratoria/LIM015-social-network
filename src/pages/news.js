const newsPage = `<header id="container" class="navcontainer">
  <nav id="menu">
    <ul class="options-container">
      <p id="profile" class="menuoptions">Profile</p>
      <p class="menuoptions">Discover<img class="navicons" src="./images/logoairplane.svg" alt="airplanelogo"
          srcset="" /></p>
      <div id= "logout" class="menuoptions">
      <p>Log out</p>
      <img class="navicons" src="./images/logout.svg" alt="logouticon"
          srcset="" /></div>
    </ul>
  </nav>
</header>

<section id="newscontainer" class="newscontainer">
  <div class="profile-container">
    <div id="image-name" class="image-name">
    </div>
  </div>
  <section class="post-container">
    <div class="post-text" id="post text">
      <input class="status" type="text" placeholder="What's on your mind?">
      <div class="buttons">
        <img class="svgimage" src="./images/post-image.svg" alt="image-post" srcset="">
        <button class="post">Post</button>
      </div>
    </div>
  </section>
</section>`;
export default newsPage;
