<template>
  <v-app>
    <v-layout row v-if="errors && errors.response">
      <v-flex xs12>
        <alert :text="textError" />
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
