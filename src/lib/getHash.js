const getHash = () => {
  console.log(window.location.hash.slice(1).toLocaleLowerCase().split('/')[1]);
};
