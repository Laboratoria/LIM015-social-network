/* Add event of addEventListener / load / hashChange*/
import { changeView } from './view-controler/route.js'
/*import{app} from './db/firebase.js'*/
const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () =>
        changeView(window.location.hash));
}
window.addEventListener('load', init);