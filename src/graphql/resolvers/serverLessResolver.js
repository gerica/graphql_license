import { showMessage, showMessage2, showNome } from '../../api/services/serverLessService.js';

const query = {
  showMessage: () => showMessage(),
  showMessage2: () => showMessage2(),
  showNome: (_, nome) => showNome(nome),
};
const mutation = {};
export { query, mutation };
