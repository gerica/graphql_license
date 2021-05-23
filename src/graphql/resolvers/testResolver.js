const query = {
  test: () => 'Hello world!',
  ip(_, args, request) {
    return request.ip;
  },
};
const mutation = {};
export { query, mutation };
