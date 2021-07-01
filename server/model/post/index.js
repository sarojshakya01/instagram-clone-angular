
const post = requre('./post.js');

module.exports = {
  get: post.read,
  put: post.update,
  delete: post.destroy
}