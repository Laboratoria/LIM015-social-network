import { auth } from '../firebase/fb-config.js'

const signOutNav = (navClose) => {
    navClose.addEventListener('click', (event) => {
        event.preventDefault();
        auth.signOut().then(() => {
            console.log('sign Out')
        })

    })

};

console.log('signOutNav')

export { signOutNav } 