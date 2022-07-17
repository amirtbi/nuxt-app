export default {
  posts(state) {
    return state.loadedPosts;
  },
  message() {
    const newPost = {
      id: 7,
      title: "Learning C#",
      url: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      previewText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam suscipit ratione ipsum fugiat nisi perspiciatis est, ipsa in nostrumvoluptates dolore, fuga impedit, aliquam dolor perferendis totam corporis. Similique, omnis?",
    };
    return newPost;
  },
  post(state) {
    return state.foundPost;
  },
};
