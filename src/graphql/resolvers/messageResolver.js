import MessageService from '../../api/services/messageService.js';

const query = {
  messageService: (_, { id }) => new MessageService(id),
};
const mutation = {
  messageServiceCreate: (_, { input }) => new MessageService(null, input),
  messageServiceUpdate: (_, { id, input }) => new MessageService(id, input),
};
export { query, mutation };
