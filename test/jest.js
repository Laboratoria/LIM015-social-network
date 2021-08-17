import { firebaseConfig } from '../src/scripts/fs-config.js';

const jest = require('jest');

const mocksdk = jest.mock(firebaseConfig, () => mocksdk);

mocksdk.database().flush();
// data is logged
