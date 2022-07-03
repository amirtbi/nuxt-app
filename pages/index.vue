<template>
  <v-container>
    <h1 class="mb-2">All Posts</h1>
    <Posts :posts="posts" />
  </v-container>
</template>

<script>
import Posts from "../components/Posts/PostLists.vue";
export default {
  components: {
    Posts,
  },
  layout: "default",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Learning Vue.js from scratch",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          previewText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam suscipit ratione ipsum fugiat nisi perspiciatis est, ipsa in nostrumvoluptates dolore, fuga impedit, aliquam dolor perferendis totam corporis. Similique, omnis?",
        },
        {
          id: 2,
          title: "Learning Python",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          previewText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam suscipit ratione ipsum fugiat nisi perspiciatis est, ipsa in nostrumvoluptates dolore, fuga impedit, aliquam dolor perferendis totam corporis. Similique, omnis?",
        },
        {
          id: 3,
          title: "Learning Angular",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          previewText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam suscipit ratione ipsum fugiat nisi perspiciatis est, ipsa in nostrumvoluptates dolore, fuga impedit, aliquam dolor perferendis totam corporis. Similique, omnis?",
        },
      ],
    };
  },
};
</script>

<style>
.v-application,
.v-application--wrap {
  font-family: "Open Sans", sans-serif;
}
</style>
