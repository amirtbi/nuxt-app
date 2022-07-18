export default {
  categories(state) {
    return state.category;
  },
  showLoadPosts(state, getters, rootState, rootGetters) {
    // Accessing getter from another module
    return rootGetters["postModule/posts"];
  },
};
