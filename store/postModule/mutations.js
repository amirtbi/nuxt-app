export default {
  setPosts(state, payload) {
    state.loadedPosts = payload;
    console.log("mutation from post", state.loadedPosts);
  },
  findPost(state, postId) {
    console.log("all posts", state.loadedPosts);
    const postFind = state.loadedPosts.find((post) => post.id == postId);
    console.log("Found post", postFind);
    state.foundPost = postFind;
  },
  editPost(state, payload) {
    console.log("mutation from edited post", payload);
    const indexOfPost = state.loadedPosts.findIndex(
      (post) => post.id === payload.id
    );
    console.log("index of loaded post", indexOfPost);
    state.loadedPosts[indexOfPost] = payload;
  },
};
