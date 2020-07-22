<template>
  <div class="Logo">
    <v-responsive class="mb-sm-5 py-8 pl-2">
      <router-link to="/">
        <v-img
          alt="Semicolon Logo"
          class="shrink"
          contain
          :src="require(`../../static/semicolon.svg`)"
          transition="scale-transition"
          max-width="200"
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
      </router-link>
    </v-responsive>
  </div>
</template>

<script>
export default {
  props: {}
};
</script>
