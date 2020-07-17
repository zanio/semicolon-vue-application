<template>
  <v-app>
    <v-container v-if="errors && errors.length > 0" fluid>
      <v-layout row>
        <v-flex xs12>
          <alert
            :text="errors"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <SemicolonHeader /> -->
    <router-view />
    <!-- <SemicolonFooter /> -->
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      errors: state => state.auth.errors,
      isLoading: state => state.auth.isLoading
    })
  }
};
</script>

