// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();

//document.getElementById("signIn").onclick = () => (window.open("_blank"));

const signIn = document.querySelector("#signIn");

signIn.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    auth.createUserWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            console.log(user);
        })

    //console.log(username, password);
});
