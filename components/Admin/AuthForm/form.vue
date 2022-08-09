<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <v-form @submit.prevent="emitHandler" class="pa-4">
      <validation-provider v-slot="{ errors }" name="Author" rules="required">
        <v-text-field
          :error-messages="errors"
          outlined
          required
          label="Author"
          v-model="course.author"
        >
        </v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" rules="required" name="Title">
        <v-text-field
          outlined
          label="Title"
          :error-messages="errors"
          v-model="course.title"
          required
        >
        </v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="description"
        rules="required"
      >
        <v-textarea
          :error-messages="errors"
          outlined
          label="Description"
          v-model="course.description"
          required
        >
        </v-textarea>
      </validation-provider>
      <validation-provider
        name="Profession"
        v-slot="{ errors }"
        rules="required"
      >
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
      </validation-provider>

      <v-file-input
        prepend-inner-icon="mdi-tooltip-image-outline"
        outlined
        label="Course Picture"
        prepend-icon=""
        @change="uploadImageHandler($event)"
      >
      </v-file-input>

      <v-btn type="submit" color="success" :disabled="invalid"> Submit</v-btn>
      <!-- <v-btn @click="clearForm" color="error"> Cancel</v-btn> -->
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
