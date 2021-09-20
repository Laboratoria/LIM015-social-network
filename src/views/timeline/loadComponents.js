import { loadViewHeaderUser } from './viewHeaderUser.js';
import { loadViewCategory } from './viewCategories.js';
import { loadViewPopularPost } from './viewCarrusel.js';
import { loadViewPost } from './viewPosts.js';
import { addEventsTimeline } from './eventsTimeline.js';
import { loadViewModal } from './viewModal.js';

const loadComponents = () => {
    loadViewHeaderUser(); //agregamos la info del user en el header
    loadViewCategory(); //agregamos las categorias a la vista
    loadViewPost(); //agregamos todos los post a la vista
    loadViewPopularPost(); //agregamos los popularPost
    loadViewModal();
    addEventsTimeline(); //agregamos los eventos basicos al timeline

}


export { loadComponents }