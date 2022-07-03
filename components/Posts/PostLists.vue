<template>
  <v-row justify="center">
    <v-col
      v-for="post in posts"
      :key="post.id"
      cols="12"
      sm="12"
      :md="12 / posts.length"
    >
      <v-card :loading="loading" min-width="300">
        <v-img height="250" :src="post.imageSrc"></v-img>

        <v-card-title>{{ post.title }}</v-card-title>

        <v-card-text>
          <div class="preview-text">
            {{ post.previewText }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn color="blue lighten-5 " nuxt @click="loadPost(post.id)">
            See the detail
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "default",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    loadPost(postId) {
      this.$router.push(`/posts/${postId}`);
    },
  },
};
</script>
