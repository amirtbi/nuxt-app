<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="postName"
      :counter="20"
      :rules="postNameRules"
      label="Title"
      required
    ></v-text-field>
    <v-text-field
      v-model="author"
      :counter="10"
      label="Author"
      required
    ></v-text-field>
    <v-textarea v-model="postPreview" color="teal">
      <template v-slot:label>
        <div>Post Preview text</div>
      </template>
    </v-textarea>
    <v-text-field
      label="url input"
      v-model="imageUrl"
      filled
      prepend-icon="mdi-camera"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-file-input
      label="File input"
      v-model="chosenImage"
      filled
      prepend-icon="mdi-camera"
      @change="showFile(value)"
    ></v-file-input>

    <!-- <v-card class="pa-6" width="600" height="300" raised>
      <v-card-title>Post image</v-card-title>
      <v-card-text width="200"
        ><img max-width="100%" width="200" v-if="data" :src="data" alt=""
      /></v-card-text>
    </v-card> -->
    <div>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submitPost"
      >
        Create Post
      </v-btn>
      <v-btn color="gray" class="mr-4" @click="resetForm"> Cancel </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    postName: "",
    postTitle: "",
    postPreview: "",
    author: "",
    imageUrl: "",
    chosenImage: null,
    data: null,
    postNameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    importImage() {
      var reader = new FileReader();
      reader.readAsDataURL(this.chosenImage);
      reader.onload = () => {
        this.data = reader.result;
      };
    },
    validate() {
      console.log("form submit", this.$refs.form.validate());
    },
    showFile(v) {
      console.log(v);
    },
    resetForm() {
      this.$refs.form.reset();
      this.$emit("onCancel");
    },
    submitPost() {
      const formIsValid = this.$refs.form.validate();
      if (formIsValid) {
        const postInfo = {
          id: new Date().toISOString(),
          author: this.author,
          title: this.postName,
          previewText: this.postPreview,
          imageSrc: this.chosenImage,
          imageUrl: this.imageUrl,
        };
        // this.importImage();
        this.$emit("submitForm", postInfo);
        this.resetForm();
      }
    },
  },
};
</script>
