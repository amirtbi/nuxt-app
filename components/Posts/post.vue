<template>
  <v-card max-width="600" class="mx-auto">
    <v-card-text class="text-center">
      <!-- Image -->
      <v-img height="250" :src="loadedPost.imageUrl"></v-img>
      <!-- Title of post -->
      <p class="text-h4 text--primary">{{ loadedPost.title }}</p>
      <div>
        <!-- Date -->
        <p class="my-0">Last updated:{{ loadedPost.lastUpdated | date }}</p>
        <!-- Author -->
        <p>Written By:{{ loadedPost.author }}</p>
      </div>
      <div class="text--primary">
        {{ loadedPost.content }}
      </div>
      <div>
        <p class="font-weight-medium text--primary">
          Let me know if you want to know about me, Email to :<span
            color="primary"
            >{{ loadedPost.email }}</span
          >
        </p>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal accent-4">
        <nuxt-link to="/posts">Back to Posts</nuxt-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: "default",
  props: {
    postId: {
      type: String,
      required: true,
    },
    loadedPost: {
      type: Object,
      required: true,
    },
    res: {
      type: Object,
      required: false,
    },
  },
};
</script>
