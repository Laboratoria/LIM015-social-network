// Este es el punto de entrada de tu aplicacion

import { myFunction } from "./lib/index.js";

myFunction();

const containerd = document.querySelector("#container");

let home = document.createElement("figure");
home.classList.add("home");
containerd.appendChild(home);

let name = document.createElement("input");
name.type = "text";
name.placeholder = "Email";
name.classList.add("name");
home.appendChild(name);

let password = document.createElement("input");
password.type = "text";
password.placeholder = "Password";
password.classList.add("password");
home.appendChild(password);
