<template>
  <v-card class="mx-auto">
    <v-card-text class="text-center">
      <p class="text-h4 text--primary">{{ $route.params.id }}</p>
      <div>
        <p class="my-0">Last updated:XXXX</p>
        <p>Written By:XXXX</p>
      </div>
      <div class="text--primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nemo,
        aliquam deserunt fugit, quae exercitationem alias dolores adipisci rerum
        porro nesciunt pariatur, soluta ipsam beatae! Sequi, eius esse? Nulla,
        vitae?
      </div>
      <div>
        <p class="font-weight-medium text--primary">
          Let me know if you want to know about me, Email to :<span
            >Torabi46@gmail.com</span
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
  },
  
};
</script>
