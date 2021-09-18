const readPost = () => { //retorna la promesa de la linea 6 - informacion de cada usurio
    // eslint-disable-next-line no-undef
    const db = firebase.firestore();
    const usersfb = () => {
        const objectUser = []; //array de objetos cada obj es un usuario
        return db.collection("users")
            .get()
            .then(response => {
                response.forEach(doc => {
                    objectUser.push({
                        idUser: doc.id,
                        nameUser: doc.data().nameuser,
                        email: doc.data().email,
                        photoUser: doc.data().photouser,
                        photoCover: doc.data().photocover,
                        description: doc.data().description
                    });
                })
                return objectUser;
            })
    }

    const posts = async () => {
        const objectPosts = [];
        const allUsers = await usersfb().then(response => response);
        const allCategoriesCourses = localStorage.getItem('allCategories');
    
        // eslint-disable-next-line no-undef
        const db = firebase.firestore();
        db.collection("posts")
            .get()
            .then(response => {
                return response.forEach(doc => {
                    const userprueba = allUsers.find(element => element.idUser === doc.data().idUser)
                    const categoryprueba = allCategoriesCourses.find(element => element.idCategory === doc.data().category)
                    objectPosts.push({
                        idPost: doc.id,
                        idUser: doc.data().idUser,
                        nameUser: userprueba.nameUser,
                        photoUser: userprueba.photoUser,
                        contentPost: doc.data().contentPost,
                        datePost: doc.data().datePost,
                        nameImage: doc.data().nameImage,
                        totalComments: doc.data().totalComments,
                        totalLikes: doc.data().totalLikes,
                        image: doc.data().image,
                        idCategory: doc.data().idCategory,
                        nameCategory: categoryprueba.nameCategory,
                    })
                    return objectPosts;
                });
            });

        
    }
    
    return  posts().then(response => response)
    
}

export { readPost }