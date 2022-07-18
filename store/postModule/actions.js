import axios from "axios";
import { getRequest } from "../../assets/js/axios/crud.js";

export default {
  setPosts(context, posts) {
    console.log("new post", posts);
    context.commit("setPosts", posts);
  },
};
