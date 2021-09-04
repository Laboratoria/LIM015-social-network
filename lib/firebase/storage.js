const storageRef = firebase.storage().ref();
export const imagesProfileRef = (carpeta, fileName) => storageRef.child(`${carpeta}/${fileName}`);
export const putImageFile = (photoFile) => imagesProfileRef(photoFile.name).put(photoFile);
// export const gsReference = (imageProfileRef) => firebase.storage().refFromURL(`gs://bucket/${imageProfileRef}`);
