export default () => {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `        
    <img class="logo" src="../../images/svg/logo.svg" alt="logo">
    <img class="icon-logo" src="../../images/svg/favicon.svg" alt="logo">
    <section class="input-search">
        <input type="text" name="" id="">
        <div class="container-icon-search"> <i class="fas fa-search"></i> </div>
    </section>
    <div class="side-navigation">
        <section class="title-posts">
            <a href="#/timeline" id="logout" class="title-posts"> <i class="fas fa-house-user"></i> <span>Posts</span> </a>
        </section>
        <section class="title-turn-off">
            <a href="" id="logout" class="title-turn-off">  <i class="fas fa-sign-out-alt"></i> <span>Salir</span> </a>
        </section>
        <section class="user-information" id="user-info">
           
        </section>
    </div>
    `;
    return header;
}