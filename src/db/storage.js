/* eslint no-undef: "off"*/

const saveImageFile = (namePhoto, photoFile) => firebase.storage()
    .ref().child(`images/${namePhoto}`).put(photoFile);
const getPhotoURL = (namePhoto) => firebase.storage()
    .ref(`images/${namePhoto}`).getDownloadURL();
export { saveImageFile, getPhotoURL }