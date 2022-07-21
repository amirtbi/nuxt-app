<template>
  <section class="single-post">
    <PostItem :loaded-post="post" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import PostItem from "../../../components/Posts/post.vue";
export default {
  layout: "default",
  components: {
    PostItem,
  },

  async asyncData(context) {
    const response = await axios.get(
      "https://nuxt-2-cc469-default-rtdb.firebaseio.com/posts/" +
        context.params.id +
        ".json"
    );
    const post = response.data;
    return { post };
  },
  computed: {
    // ...mapGetters("postModule", ["post"]),
  },
  created() {
    // this.$store.commit("postModule/findPost", this.$route.params.id);
  },
};
</script>
