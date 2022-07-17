<template>
  <section class="single-post">
    <PostItem :loaded-post="post" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import PostItem from "../../../components/Posts/post.vue";
export default {
  layout: "default",
  components: {
    PostItem,
  },

  // asyncData(context) {
  //   return {
  //     loadedPost: {
  //       id: new Date().toISOString(),
  //       title: `Learning Vue.js with (ID:${context.params.id})`,
  //       author: "Max",
  //       date: new Date().toLocaleDateString(),
  //       content: "Learning all about Vue.js 3",
  //       imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
  //       email: "torabi46@gmail.com",
  //     },
  //   };
  // },
  computed: {
    ...mapGetters("postModule", ["post"]),
  },
  created() {
    this.$store.commit("postModule/findPost", this.$route.params.id);
  },
};
</script>
