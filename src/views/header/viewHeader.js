// const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21
// const nameUserPath = allUsers.map(user => {
//     return user.nameUser.replace(/\s+/g, '')
// })

export default () => {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `        
    <img class="logo" src="../../images/svg/logo.svg" alt="logo">
    <img class="icon-logo" src="../../images/svg/favicon.svg" alt="logo">
    <section class="input-search">
        <input type="search" name="" id="search" autocomplete="off">
        <div class="container-icon-search"> <i class="fas fa-search"></i> </div>
    </section>
    <ul class="result-search" id="result-search"> </ul>
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
    /* Searcher */
    const inputSearch = header.querySelector('#search');
    const ulResulSearch = header.querySelector('#result-search');
    const allUsers = JSON.parse(window.localStorage.getItem('allUsers')); //extraemos de local viewHeaderUser Linea 21    
    inputSearch.addEventListener('keyup', () => {
        // ulResulSearch.innerHTML = "";
        const search = inputSearch.value.toLowerCase();
        let resultSearch = searchResult(allUsers, search);
        const pathUser = resultSearch.map(user => `#/profile${user.nameUser.replace(/\s+/g, '')}`);
        const htmlResultSearch = resultSearch.map(user => ` <li> <a href="#/profile${user.nameUser.replace(/\s+/g, '')}"> <i class="fas fa-search"></i> ${user.nameUser} </a> </li> `)
        viewProfileOtherUser(pathUser[0]);
        displayResults(htmlResultSearch);
        // inputSearch.value = "";
    });

    function searchResult(allUsers, search) {
        return allUsers.filter(user => user.nameUser.toLowerCase().includes(search)) //user.nameUser.toLowerCase().indexOf(search.toLowerCase()) > -1
    }

    function displayResults(resultSearch) {
        const html = resultSearch.length > 0 ? resultSearch.join('') : '';
        ulResulSearch.innerHTML = html;
    }
    return header;
}

export const viewProfileOtherUser = (pathUser) => pathUser;