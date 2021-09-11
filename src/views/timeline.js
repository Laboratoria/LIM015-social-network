export default () => {
    const viewTimeLine = document.createElement('div');
    viewTimeLine.className = 'container';
    viewTimeLine.innerHTML = `<h1>Hola Muro</h1>  <a href="" id="logout">Salir</a>`;
    return viewTimeLine;
}