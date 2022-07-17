<template>
  <section class="mt-10">
    <v-container>
      <v-row justify="center">
        <!-- Message -->
        <v-col cols="5">
          <v-row class="d-flex flex-column">
            <v-col cols="12">
              <h1>Something went wrong</h1>
              <p>We can not find the page for loading</p>
            </v-col>
            <v-col class="d-flex justify-between">
              <v-btn link to="/" depressed class="mr-4">Cancel</v-btn>
              <v-btn link to="/" class="primary">Home</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <!-- Image -->
        <v-col cols="7">
          <v-img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/52b23111383219.560f6cdb40020.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
