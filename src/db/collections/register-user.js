const saveUser = (email, nameuser) => {
    // eslint-disable-next-line no-undef
    var db = firebase.firestore();
    db.collection("users").add({
            email,
            nameuser,
            "cover": "default.png",
            "description": "Cuéntanos un poco sobre ti. ¡Nos encantaría conocerte más!",
            "profile": "default.jpg"
        }).then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export { saveUser }