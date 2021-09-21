const modal = (viewTimeLine) => {
    const modal = viewTimeLine.querySelector('.modal');
    const btnCreatePost = viewTimeLine.querySelector('.btn-create-post');
    const btnCerrarModal = viewTimeLine.querySelector('.btn-cerrar-modal');
    btnCreatePost.addEventListener('click', openModal);
    btnCerrarModal.addEventListener('click', cerrarModal);

    function openModal() {
        modal.classList.add('revelar')
    }

    function cerrarModal() {
        modal.classList.remove('revelar')
    }
}

export { modal }