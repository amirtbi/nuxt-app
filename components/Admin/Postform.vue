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
    <v-autocomplete
      :items="people"
      item-text="name"
      item-value="name"
      v-model="values"
      label="profession"
      chips
      rounded
      multiple
      @change="display"
    >
      <template v-slot:selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @click="data.select"
          @click:close="remove(data.item)"
        >
          <v-avatar left>
            <v-img :src="data.item.avatar"></v-img>
          </v-avatar>
          {{ data.item.name }}
        </v-chip>
      </template>
    </v-autocomplete>
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
  inject: ["cancelHanlder", "submitPost"],
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
    editPost: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    };
    return {
      people: [
        { header: "Group 1" },
        { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
        { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
        { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
        { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
        { divider: true },
        { header: "Group 2" },
        { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
        { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
        { name: "John Smith", group: "Group 2", avatar: srcs[1] },
        { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
      ],
      items: ["Frontend", "Backend", "Fullstack", "Python developer"],
      values: [],

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
    display(e) {
      console.log("values", e);
    },
    remove(person) {
      const index = this.values.findIndex(
        (item) => person.name === person.name
      );
      this.values.splice(index, 1);
    },
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
        const newPost = {
          title: this.editedPost.title,
          author: this.editedPost.author,
          previewText: this.editedPost.previewText,
          imageUrl: this.editedPost.imageUrl,
        };

        this.submitPost(newPost);

        this.cancelHanlder();
      }
    },
  },
};
</script>
