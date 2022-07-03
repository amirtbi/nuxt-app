<template>
  <div>
    <v-row justify="center">
      <v-col cols class="text-center">
        <BaseButton
          @click="isClicked = true"
          classes="white--text"
          rounded
          color="deep-purple"
          tile
          >Create a post</BaseButton
        >
        <h1 class="mt-2">Existing Posts</h1>
      </v-col>
    </v-row>
    <v-row v-if="isClicked" justify="center">
      <v-col cols="8" class="text-center">
        <v-card>
          <form>
            <base-form
              input-name="name"
              :value-type="name"
              :control-type="'input'"
            ></base-form>
            <base-form
              input-name="email"
              :value-type="email"
              :control-type="'input'"
            ></base-form>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
    <div>
      {{ response }}
    </div>
    <div v-if="error">
      <h1>Error happend</h1>
    </div>
    <PostLists :posts="posts" />
  </div>
</template>

<script>
import BaseButton from "../../components/UI/BaseButton.vue";
import PostLists from "../../components/Posts/PostLists.vue";
import BaseForm from "../../components/UI/BaseForm.vue";

export default {
  components: {
    PostLists,
    BaseButton,
    BaseForm,
  },
  layout: "default",
  async asyncData({ $axios, redirect }) {
    const api = "https://jsonplaceholder.typicode.com/todos/1";
    try {
      const response = await $axios.$get(api);
      return { response };
    } catch (error) {
      redirect("/error");
    }
  },

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
  methods: {
    submit() {
      console.log("submitted");
    },
  },
};
</script>
