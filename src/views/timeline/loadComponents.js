import { loadViewHeaderUser } from './viewHeaderUser.js';
import { loadViewCategory } from './viewCategories.js';
import { loadViewPopularPost } from './viewCarrusel.js';
import { getObjectAllPosts } from './viewPosts.js';
import { addEventsTimeline } from './eventsTimeline.js';
import { loadViewModal } from './viewModal.js';
import { updateCategory, addEventFormPost, addEventDeletePost, addEventEditPost } from './eventsCrud.js';
import { loadViewModalDelete } from './viewModalDelete.js';
import { reactionLike } from './reactions.js'

const loadComponents = async() => {
    await loadViewHeaderUser(); //agregamos la info del user en el header
    await loadViewCategory(); //agregamos las categorias a la vista
    await getObjectAllPosts(); //agregamos todos los post a la vista
    loadViewPopularPost(); //agregamos los popularPost
    loadViewModal();
    loadViewModalDelete();
    addEventsTimeline(); //agregamos los eventos basicos al timeline
    addEventFormPost();
    addEventDeletePost();
    addEventEditPost();
    reactionLike();
    updateCategory()
}

export { loadComponents }