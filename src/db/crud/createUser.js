const saveUser = (infoUser) => {
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    db.collection("users").doc(infoUser[0]).set({
            "email": infoUser[1],
            "nameuser": infoUser[2],
            "photouser": infoUser[3],
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