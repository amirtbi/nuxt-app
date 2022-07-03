<template>
  <section class="single-post">
    <PostItem />
  </section>
</template>

<script>
import PostItem from "../../../components/Posts/post.vue";
export default {
  layout: "default",
  components: {
    PostItem,
  },
};
</script>
