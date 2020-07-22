<template>
  <v-app class="secondary">
    <v-container grid-list-xl>
      <v-layout>
        <logo></logo>
      </v-layout>
      <v-layout class="layout-height" row>
        <v-flex xs12 class="mx-auto" :style="{ width: '37.5rem' }">
          <v-card
            elevation="0"
            class="response-card mx-auto pl-lg-8 pa-sm-6 pt-8 pl-5"
          >
            <v-img
              alt="Login Page Image"
              class="shrink mt-8 mb-8"
              contain
              width="90px"
              height="90px"
              :src="require(`../../static/thumbs-up.svg`)"
              transition="scale-transition"
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
            <v-card-title
              class="primary--text font-weight-black darken-4 heading pb-3 ft-lg-sm"
              >Application Submitted</v-card-title
            >
            <v-card-subtitle
              class="light-color--text font-weight-medium subtitle-2 py-10"
              :style="{ width: '300px', fontSize: '21px' }"
            >
              Your application has been submitted. Kindly check your mail for
              next steps
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                elevation="0"
                x-large
                min-width="50%"
                class="d-inline-block"
                color="primary"
              >
                Back to Site
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Logo from "../Logo/Logo";
export default {
  name: "ResponseLayout",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.response-card {
  height: 700px;
  width: 600px;
  border: 2px solid rgba(150, 12, 12, 0.5);
  box-sizing: border-box;
  border-radius: 18px 18px 0px;
  background: transparent !important;
}
.ft-lg-sm {
  font-size: 2.1rem;
}
@media (min-width: 768px) {
  .response-card {
    padding-top: 9rem !important;
  }
}
.layout-height {
  height: 1200px;
}
@media (max-width: 768px) {
  .response-card {
    height: 500px;
    width: 400px;
    padding-top: unset !important;
  }
  .layout-height {
    height: 500px;
  }
  .ft-lg-sm {
    font-size: 1.3rem;
  }
}
</style>
