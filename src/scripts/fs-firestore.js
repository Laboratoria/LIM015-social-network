export const firestore = () => {
// const db = firebase.firestore();

  const mainViews = document.querySelector('.views');
  console.log(mainViews);

  mainViews.addEventListener('click', (e) => {
    if (e.target.className === 'post_btn') {
      const textarea = document.querySelector('.posts').value;
      console.log(textarea);
    }
  });
};
