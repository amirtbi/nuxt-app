<template>
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
</template>
