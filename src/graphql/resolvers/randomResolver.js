import { RandomDie } from '../../api/services/index.js';

const query = {
  versionLicense: () => 'Radiolife version license: 1.0.0-rc-01',
  getDie: (_, { numSides }) => new RandomDie(numSides || 6),
};
const mutation = {};
export { query, mutation };
