const db = firebase.firestore();

const savePost = (post) => {
  db.collection('posts').doc().set({
    Post: post.value,
  });
};

// const getPost = () => db.collection('posts').doc().get();

export const firestore = () => {
  const mainViews = document.querySelector('.views');
  console.log(mainViews);

  mainViews.addEventListener('click', (e) => {
    if (e.target.className === 'post_btn') {
      const post = document.querySelector('.posts');
      savePost(post);
      post.value = '';
    }
  });
};
