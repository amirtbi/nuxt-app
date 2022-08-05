<template>
  <v-container class="mt-4">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card width="700px">
          <h3 v-if="loading">Sending data...</h3>
          <v-card-title class="text-center">
            Course Registeration
          </v-card-title>
          <!-- <div class="d-flex align-items-center justify-center">
            <v-avatar :class="avatarClasses" size="90">
              <img v-if="course.image" :src="imageURL" alt="course" />
              <v-icon v-else size="90"> mdi-account </v-icon>
            </v-avatar>
          </div> -->
          <v-form ref="form" lazy-validation v-model="valid" class="pa-4">
            <v-text-field
              outlined
              label="Author"
              :rules="authorRules"
              v-model="course.author"
              required
            >
            </v-text-field>
            <v-text-field
              outlined
              label="Title"
              :rules="titleRules"
              v-model="course.title"
              required
            >
            </v-text-field>
            <v-textarea
              outlined
              label="Description"
              v-model="course.description"
              :rules="descriptionRules"
              required
            >
            </v-textarea>
            <v-autocomplete
              :items="professions"
              v-model="profession"
              item-value="field"
              item-text="field"
              outlined
              clearable
              small-chips
              label="Field"
              @change="setField($event)"
            ></v-autocomplete>
            <v-file-input
              prepend-inner-icon="mdi-tooltip-image-outline"
              outlined
              label="Course Picture"
              prepend-icon=""
              @change="uploadImageHandler($event)"
            >
            </v-file-input>

            <v-btn @click="submitForm" :disabled="!valid" color="success">
              Submit</v-btn
            >
            <!-- <v-btn @click="clearForm" color="error"> Cancel</v-btn> -->
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { postRequest } from "~/assets/js/axios/crud.js";
export default {
  data() {
    return {
      // Rules
      authorRules: [(v) => !!v || "Author is required"],
      descriptionRules: [(v) => !!v || "Description must be filled"],
      titleRules: [(v) => !!v || "Title must be filled"],

      valid: true,
      loading: false,
      course: {
        author: "",
        title: "",
        description: "",
        image: null,
      },

      professions: [
        { field: "Frontend", id: 1 },
        { field: "Backend", id: 2 },
        { field: "Mobile App", id: 3 },
      ],
      profession: "",
    };
  },
  computed: {
    imageURL() {
      if (this.course.image) {
        return this.course.image;
      } else {
        return "";
      }
      // return URL.createObjectURL(this.course.image);
    },
    avatarClasses() {
      if (this.course.image == null) {
        return "avatar-bg";
      } else {
        return "";
      }
    },
  },
  methods: {
    setField(e) {
      this.profession = e;
    },
    // clearForm() {
    //   this.$refs.form.reset();
    // },
    async submitForm() {
      this.valid = true;
      this.valid = this.$refs.form.validate();
      if (this.valid) {
        this.loading = true;
        const postInfo = {
          title: this.course.title,
          author: this.course.author,
          imageUrl: this.course.image,
          previewText: this.course.description,
          profession: this.profession,
        };
        await postRequest("posts", postInfo);
        this.loading = false;
        this.$router.push("/");
      }
    },
    uploadImageHandler(e) {
      console.log("e", e);
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        this.course.image = event.target.result;
      });
      reader.readAsDataURL(e);
    },
  },
};
</script>

<style scoped>
.avatar-bg {
  background-color: #ccc !important;
  border: 1px solid #ccc !important;
}
</style>
