const saveUser = (infoUser) => {
    // eslint-disable-next-line no-undef
    var db = firebase.firestore();
    db.collection("users").add({
            "email": infoUser[0],
            "nameuser": infoUser[1],
            "photouser": infoUser[2],
            "photocover": "default.png", //portada
            "description": "Cuéntanos un poco sobre ti",
        }).then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export { saveUser }