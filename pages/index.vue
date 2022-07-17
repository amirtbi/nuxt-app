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
export default {
  components: {
    PostLists,
  },
  layout: "default",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("postModule", ["posts"]),
  },
};
</script>

<style>
.v-application,
.v-application--wrap {
  font-family: "Open Sans", sans-serif;
}
</style>
