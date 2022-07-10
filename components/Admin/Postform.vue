<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="editedPost.title"
      :counter="20"
      :rules="postNameRules"
      label="Title"
      required
    ></v-text-field>
    <v-text-field
      v-model="editedPost.author"
      :counter="10"
      label="Author"
      required
    ></v-text-field>
    <v-textarea v-model="editedPost.previewText" color="teal">
      <template v-slot:label>
        <div>Post Preview text</div>
      </template>
    </v-textarea>
    <v-text-field
      label="url input"
      v-model="editedPost.url"
      filled
      prepend-icon="mdi-camera"
    ></v-text-field>

    <!-- <v-file-input
      label="File input"
      v-model="chosenImage"
      filled
      prepend-icon="mdi-camera"
    ></v-file-input> -->

    <div>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submitPost"
      >
        Save
      </v-btn>
      <v-btn color="gray" class="mr-4" @click="resetForm"> Cancel </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  props: {
    loadedPost: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      valid: true,
      editedPost: this.loadedPost
        ? { ...this.loadedPost }
        : { title: "", author: "", previewText: "", url: "", imageSrc: "" },

      chosenImage: null,
      data: null,
      postNameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
    };
  },

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
      this.editedPost.title = "";
      this.editedPost.author = "";
      this.editedPost.previewText = "";
      this.editedPost.url = "";
      this.$emit("onCancel");
    },
    submitPost() {
      const formIsValid = this.$refs.form.validate();
      if (formIsValid) {
        const newPost = {
          id: new Date().toISOString(),
          title: this.editedPost.title,
          author: this.editedPost.author,
          previewText: this.editedPost.previewText,
          url: this.editedPost.url,
        };

        this.$emit("submitForm", newPost);
        this.$emit("onCancel");
      }
    },
  },
};
</script>
