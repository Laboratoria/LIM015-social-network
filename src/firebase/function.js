

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     if(email === userCredential.email)
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
export function events() {
  const signin = document.querySelector(".btn");
  signin.addEventListener("click", (e) => {
    e.preventDefault();
    const signinEmail = document.querySelector(".email").value;
    const singnPassword = document.querySelector(".password").value;
    console.log(signinEmail, singnPassword);
  });
}

