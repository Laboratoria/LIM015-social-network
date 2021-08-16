import MockFirebase from 'mock-cloud-firestore';

import {
    sharePost,
    getPost,
} from '../src/firebase/data-base';

const fixtureData = {
      SN_posts: {
        __doc__: {
          id_001: {
            idUser: '001',
            mail: 'prueba@test.com',
            timePost: '',
            mode: 'Public',
            postText: 'Primera publicación',
            Photo: '',
            likes: '',
            user: 'Prueba Test',
          },
        },
    },
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('Agrega los post', () => {
  it('Deberia añadir un post', () => sharePost( 'hola que tal', 'rita@hotmail.com', 'rita', '', '', 'public', '' )
  .then(() => getPost(
      (data) => {
          const result = data.find(postGetPost => postGetPost.postText === 'hola que tal');
          expect(result.postText).toBe('hola que tal');
          done();
      },
  )));
});
