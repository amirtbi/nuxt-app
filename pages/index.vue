<template>
  <v-container>
    <h1 class="mb-2">All Posts</h1>
    <v-row>
      <PostLists
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :url="post.imageUrl"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import PostLists from "../components/Posts/PostLists.vue";
import axios from "axios";
import { getRequest } from "../assets/js/axios/crud";
import { propsToAttrMap } from "@vue/shared";
export default {
  components: {
    PostLists,
  },
  layout: "default",
  async asyncData() {
    const response = await axios.get(
      "https://nuxt-2-cc469-default-rtdb.firebaseio.com/posts.json"
    );
    const posts = [];
    for (const key in response.data) {
      posts.push({ ...response.data[key], id: key });
    }

    return { posts };
  },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.getters["postModule/posts"];
    },
  },
};
</script>

<style>
.v-application,
.v-application--wrap {
  font-family: "Open Sans", sans-serif;
}
</style>
