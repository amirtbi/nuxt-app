<template>
  <v-container>
    <h1 class="mb-2">Get the latest news</h1>
    <v-row>
      <Post
        v-for="post in posts"
        :post="post"
        :key="post.id"
        :url="post.imageUrl"
        :posts="posts"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const Post = () => ({
  component: import("../../components/Posts/PostLists.vue"),
});

export default {
  components: {
    Post,
  },
  layout: "default",
  async asyncData(context) {
    const response = await context.app.$axios.get(
      "https://nuxt-2-cc469-default-rtdb.firebaseio.com/posts.json"
    );
    const posts = [];
    for (const key in response.data) {
      posts.push({ ...response.data[key], id: key });
    }
    context.store.commit("postModule/setPosts", posts);
    return { posts };
  },
  data() {
    return {};
  },
  computed: {
    // ...mapGetters("postModule", ["posts", "message"]),
  },
  created() {
    // await this.$store.dispatch("postModule/fetchPosts");
  },
};
</script>
