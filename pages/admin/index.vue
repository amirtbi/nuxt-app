<template>
  <div>
    <v-row justify="center">
      <v-col
        cols
        class="d-flex flex-column align-center justify-center text-center"
      >
        <BaseButton
          v-if="!show"
          @click="clickListener"
          classes="white--text"
          rounded
          color="deep-purple"
          tile
          >Create a post</BaseButton
        >
        <v-card max-width="500" width="500" class="pa-6" v-if="show">
          <PostForm @submitForm="addNewPost" @onCancel="show = false" />
        </v-card>
        <h1 class="mt-2">Existing Posts</h1>
      </v-col>
    </v-row>

    <v-row v-if="posts.length > 0" justify="start" class="px-4">
      <PostLists
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :url="post.imageUrl"
        isAdmin
      />
    </v-row>
    <v-row v-else justify="center" class="px-4">
      <v-card width="500" class="d-flex justify-center">
        <v-card-text class="font-weight-bold text-center"
          >Not any posts found!</v-card-text
        >
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import PostForm from "../../components/Admin/Postform.vue";
import BaseButton from "../../components/UI/BaseButton.vue";
import PostLists from "../../components/Posts/PostLists.vue";

export default {
  components: {
    PostLists,
    BaseButton,
    PostForm,
  },
  layout: "default",

  data() {
    return {
      dummyData: [],
      show: false,
    };
  },
  computed: {
    ...mapGetters("postModule", ["posts"]),
  },
  methods: {
    ...mapActions("postModule", ["setPosts"]),
    addNewPost(newPost) {
      this.$store.dispatch("postModule/setPosts", newPost);
    },
    clickListener() {
      this.show = !this.show;
    },
  },
};
</script>
