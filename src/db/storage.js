/* eslint no-undef: "off"*/

const saveImageFile = (namePhoto, photoFile, path) => firebase.storage()
    .ref().child(`${path}/${namePhoto}`).put(photoFile);
const getPhotoURL = (namePhoto, path) => firebase.storage()
    .ref(`${path}/${namePhoto}`).getDownloadURL();
export { saveImageFile, getPhotoURL }