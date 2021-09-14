/* eslint-disable no-undef */
const readInfoUser = () => {
    var db = firebase.firestore();
    const currentUser = localStorage.getItem('user');
    let dataUser = [];
    db.collection("users")
    .where("email", "==", currentUser)
    .get()
    .then((response) => {
        response.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc)
            // dataUser = doc.data();
            // dataUser.push(doc.data())
        });
        console.log(dataUser)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

export { readInfoUser }