export default {
  setPosts(context, posts) {
    console.log("new post", posts);
    context.commit("setPosts", posts);
  },
};
