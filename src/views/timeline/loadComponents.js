import { loadViewHeaderUser } from './viewHeaderUser.js';
import { loadViewCategory, addEventShowCategories } from './viewCategories.js';
import { loadViewPopularPost } from './viewCarrusel.js';
import { getObjectAllPosts } from './viewPosts.js';
import { addEventsTimeline, addEventModalCreatePost, renderTextareaPosts, addEventLinkUser } from './eventsTimeline.js';
import { loadViewModal } from './viewModal.js';
import { addEventFormPost, addEventDeletePost, addEventEditPost } from './eventsCrud.js';
import { loadViewModalDelete } from './viewModalDelete.js';
import { createEmoji } from '../../lib/emoji.js';
import { loadTimelineUser, showButtonsProfile, showTopTenUsers} from '../profile/eventsProfile.js';
import { reactionLike, addEventComments } from './reactions.js'


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
    addEventShowCategories();
    createEmoji();
    addEventComments();
}

const loadComponentsProfile = async () => {
    await loadViewHeaderUser(); //agregamos la info del user en el header
    await loadTimelineUser();
    addEventLinkUser()
    loadViewModal();
    loadViewModalDelete();
    showTopTenUsers();
    addEventModalCreatePost();
    renderTextareaPosts();
    showButtonsProfile();
    addEventFormPost();
    createEmoji();
    addEventDeletePost(); 
    addEventEditPost();
    reactionLike();
}

export { loadComponents, loadComponentsProfile }

