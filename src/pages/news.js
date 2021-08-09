const newsPage = `<header id="container" class="navcontainer">
  <nav id="menu">
    <ul class="options-container">
      <a class="menuoptions" href="#profile">Profile</a>
      <p class="menuoptions">Discover<img id = "logout" class="navicons" src="./images/logoairplane.svg" alt="airplanelogo"
          srcset="" /></p>
      <a class="menuoptions" href="#login">Log out<img class="navicons" src="./images/logout.svg" alt="logouticon"
          srcset="" /></a>
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
