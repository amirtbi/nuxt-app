<template>
  <section class="d-flex flex-column">
    <v-card class="pa-4">
      <v-form
        v-model="valid"
        lazy-validation
        width="600"
        class="pa-6"
        ref="form"
      >
        <v-text-field v-model="category.title" label="title"> </v-text-field>
        <v-text-field v-model="category.author" label="author"></v-text-field>
        <v-btn color="primary" @click="saveCategory"> Save </v-btn>
      </v-form>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="(item, i) in categories" :key="i">
          <v-card class="mt-lg" max-width="500">
            <v-card-text>
              {{ item.title }}
            </v-card-text>
            <v-card-text>
              {{ item.author }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="pa-4">
        <div>
          <h1 v-for="(item, index) in posts" :key="index">
            Post title:{{ item.title }}
          </h1>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      category: { title: "", author: "" },
      valid: false,
    };
  },
  methods: {
    saveCategory() {
      this.valid = true;
      if (this.category.title != "" && this.category.author != "") {
        const newCatgeory = { ...this.category, id: new Date().toISOString };
        this.$store.dispatch("adminModule/setCategory", newCatgeory);
      } else {
        this.valid = false;
      }
    },
  },
  computed: {
    ...mapGetters("adminModule", {
      posts: "showLoadPosts",
      categories: "categories",
    }),
  },
};
</script>
