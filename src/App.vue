<template>
  <v-app>
    <v-container v-if="errors && errors.length > 0" fluid>
      <v-layout row>
        <v-flex xs12>
          <v-alert
            type="error"
            dense
            class="white--text darken-2 font-weight-bold text-center"
          >
            {{ errors }}
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <SemicolonHeader /> -->
    <router-view />
    <!-- <SemicolonFooter /> -->
  </v-app>
</template>

<script>
import SemicolonHeader from "@/components/footer/Footer";
import SemicolonFooter from "@/components/header/Header";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    SemicolonHeader,
    SemicolonFooter
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors,
      isLoading: state => state.auth.isLoading
    })
  }
};
</script>

<style></style>
