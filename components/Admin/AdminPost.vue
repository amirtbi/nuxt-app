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
      v-model="editedPost.imageUrl"
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
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="emitPost">
        Save
      </v-btn>
      <v-btn color="gray" class="mr-4" @click="resetForm"> Cancel </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  inject: ["cancelHanlder", "modifyPost"],
  props: {
    loadedPost: {
      type: Object,
      required: false,
    },
    id: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      valid: true,
      editedPost: this.loadedPost
        ? { ...this.loadedPost }
        : { title: "", author: "", previewText: "", imageUrl: "" },

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
      this.cancelHanlder();
      if (!!this.loadedPost) {
        this.$router.push("/admin");
      }
    },

    async emitPost() {
      const formIsValid = this.$refs.form.validate();
      if (formIsValid) {
        const editedPost = {
          title: this.editedPost.title,
          author: this.editedPost.author,
          previewText: this.editedPost.previewText,
          imageUrl: this.editedPost.imageUrl,
        };

        this.modifyPost(editedPost);

        this.cancelHanlder();
      }
    },
  },
};
</script>
