<template>
  <v-col cols="12" sm="12" md="4">
    <v-card max-width="300">
      <v-img height="250" :src="url"></v-img>

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
</template>

<script>
export default {
  layout: "default",
  props: {
    post: {
      type: Object,
      required: true,
    },
    imageSource: {
      type: String,
      required: false,
      default: "",
    },
    url: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    loadPost(postId) {
      if (this.isAdmin) {
        this.$router.push(`/admin/${postId}`);
      } else {
        this.$router.push(`/posts/${postId}`);
      }
    },
  },
  computed: {
    imageUrl() {
      // if (!this.url) {
      //   var reader = new FileReader();
      //   reader.readAsDataURL(this.post.imageSrc);
      //   reader.onload = () => {
      //     this.data = reader.result;
      //   };
      //   return this.data;
      // } else {
      //   return this.url;
      // }
      return this.url;
    },
  },
};
</script>
