<template>
  <v-row>
    <v-col cols="12" lg="2" />
    <v-col cols="12" lg="6">
      <div
        class="d-flex flex-column justify-center align-center"
        style="height:500px;"
      >
        <v-img
          alt="Semicolon Logo"
          class="shrink"
          contain
          src="../../../static/doorway-illo.png"
          transition="scale-transition"
          max-width="300"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-col>
    <v-col cols="12" lg="2">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        elevation="0"
        class="ma-2"
        outlined
        color="primary"
      >
        Login
      </v-btn>
    </v-col>
    <v-col cols="12" lg="2" />
  </v-row>

</template>

<script>
export default {
  name: "apply-left",
  props: {}
};
</script>
