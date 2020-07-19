<template>
  <v-img
    alt="Login Page Image"
    class="shrink ml-12"
    contain
    :src="require(`../../static/desk-illo.png`)"
    transition="scale-transition"
    max-width="650"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: "LoginImage"
};
</script>

<style scoped></style>
