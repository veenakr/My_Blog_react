export default posts => {
  return posts.map(post => post.title).reduce((sum, value) => sum + value, 0);
};
