<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <v-form @submit.prevent="emitHandler" class="pa-4">
      <validation-provider
        v-for="(field, index) in validations"
        v-slot="{ errors }"
        :name="field.name"
        rules="required"
        :key="index"
      >
        <v-text-field
          v-if="field.name !== 'description'"
          :error-messages="errors"
          outlined
          required
          :label="field.name"
          v-model="course[field.name]"
        >
        </v-text-field>
        <v-textarea
          v-if="field.name === 'description'"
          :error-messages="errors"
          outlined
          label="Description"
          v-model="course.description"
          required
        >
        </v-textarea>
      </validation-provider>
      <v-autocomplete
        :items="professions"
        v-model="profession"
        :error-messages="errors"
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

      <v-btn type="submit" color="success" :disabled="invalid"> Submit</v-btn>
    </v-form>
  </validation-observer>
</template>

<script>
export default {
  emits: ["emitForm"],

  data() {
    return {
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
      validations: [
        { name: "author", input: "course.author" },
        { name: "Title", input: "course.title" },
        { name: "description", input: "course.description" },
      ],
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
  },
  methods: {
    setField(e) {
      this.profession = e;
    },
    uploadImageHandler(e) {
      console.log("e", e);
      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        this.course.image = event.target.result;
      });
      reader.readAsDataURL(e);
    },
    async emitHandler() {
      this.loading = true;
      this.$refs.observer.validate();
      const postInfo = {
        title: this.course.title,
        author: this.course.author,
        imageUrl: this.course.image,
        previewText: this.course.description,
        profession: this.profession,
      };
      this.$emit("emitForm", postInfo);
    },
  },
};
</script>
