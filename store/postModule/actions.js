import axios from "axios";
import { getRequest } from "../../assets/js/axios/crud.js";

export default {
  nuxtServerInit(vueContext) {
    return axios
      .get("https://nuxt-2-cc469-default-rtdb.firebaseio.com/posts.json")
      .then((res) => {
        console.log("posts from server", res.data);
        const postArray = [];
        for (const key in res.data) {
          postArray.push({
            ...res.data[key],
            id: key,
          });
          console.log(postArray);
        }
        vueContext.commit("setPosts", postArray);
      });
  },
  setPosts(context, posts) {
    console.log("new post", posts);
    context.commit("setPosts", posts);
  },
  async fetchPosts(context) {
    const response = await getRequest("posts");
    console.log("fetch posts", response.data);
    for (const key in response.data) {
      const postArray = [];
      postArray.push({ ...response.data[key], id: new Date().toISOString() });
      context.dispatch("setPosts", postArray);
    }
  },
};
