<template>
  <v-app>
    <v-layout row v-if="errors">
      <v-flex xs12>
        <alert :text="errors" />
      </v-flex>
    </v-layout>

    <!-- <SemicolonHeader /> -->
    <router-view />
    <!-- <SemicolonFooter /> -->
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Alert from "./components/Alert/Alert";

export default {
  name: "App",
  data() {
    return { errorMessage: null, textError: null };
  },
  components: {
    Alert
  },
  watch: {
    errors: function (currentError, previousError) {
      if (
        currentError &&
        currentError.response &&
        currentError !== previousError
      ) {
        this.textError = currentError.response.data.error;
      }
    }
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
      isLoading: (state) => state.auth.isLoading
    })
  }
};
</script>
