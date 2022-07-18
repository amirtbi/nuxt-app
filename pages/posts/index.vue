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
    <v-row>
      <h1>new post</h1>
      <p>{{ message.title }}</p>
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

  data() {
    return {};
  },
  computed: {
    ...mapGetters("postModule", ["posts", "message"]),
  },
  async created() {
    // await this.$store.dispatch("postModule/fetchPosts");
  },
};
</script>
