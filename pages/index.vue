<template>
  <v-container>
    <h1 class="mb-2">All Posts</h1>
    <v-row>
      <PostLists
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :url="post.url"
      />
    </v-row>
  </v-container>
</template>

<script>
import PostLists from "../components/Posts/PostLists.vue";
export default {
  components: {
    PostLists,
  },
  layout: "default",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Learning Vue.js",
          url: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          previewText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam suscipit ratione ipsum fugiat nisi perspiciatis est, ipsa in nostrumvoluptates dolore, fuga impedit, aliquam dolor perferendis totam corporis. Similique, omnis?",
        },
        {
          id: 2,
          title: "Learning Python",
          url: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          previewText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam suscipit ratione ipsum fugiat nisi perspiciatis est, ipsa in nostrumvoluptates dolore, fuga impedit, aliquam dolor perferendis totam corporis. Similique, omnis?",
        },
        {
          id: 3,
          title: "Learning Angular",
          url: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
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
