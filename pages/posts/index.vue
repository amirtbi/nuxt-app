<template>
  <v-container>
    <h1 class="mb-2">Get the latest news</h1>
    <v-row>
      <Post
        v-for="post in posts"
        :post="post"
        :key="post.id"
        :url="post.url"
        :posts="posts"
      />
    </v-row>
  </v-container>
</template>

<script>
import Post from "../../components/Posts/PostLists.vue";
export default {
  components: {
    Post,
  },
  layout: "default",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Learning Vue.js ",
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
