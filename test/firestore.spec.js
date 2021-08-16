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

//borre un string

describe('sharePost', () => {
  it('Deberia añadir un post', done => sharePost('primer post', 'rita@hotmail.com', 'rita', '', '', 'public','')
    .then(async() => {
      const callback = (notes) => {
        const result = notes.find(elemento => elemento.postText=== 'primer post');
        expect(result.postText).toBe('primer post');
        done();
      };
      getPost(callback).then((resp) =>
      expect(result.postText).toBe('primer post')
      )
    }));
  });
