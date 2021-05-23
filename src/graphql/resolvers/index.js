import * as testResolver from './testResolver.js';
import * as randomResolver from './randomResolver.js';
import * as messageResolver from './messageResolver.js';
import * as serverLessResolver from './serverLessResolver.js';

export default {
  Query: {
    ...testResolver.query,
    ...randomResolver.query,
    ...messageResolver.query,
    ...serverLessResolver.query,
  },
  Mutation: {
    ...messageResolver.mutation,
  },
};
