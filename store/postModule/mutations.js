export default {
  setPosts(state, payload) {
    state.loadedPosts.push(payload);
  },
  findPost(state, postId) {
    const postFind = state.loadedPosts.find((post) => post.id == postId);
    console.log("Found post", postFind);
    state.foundPost = postFind;
  },
};
