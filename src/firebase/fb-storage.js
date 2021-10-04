
const uploadImages = (fileEnv, file) => firebase.storage().ref().child(fileEnv).put(file);
 

export {uploadImages};