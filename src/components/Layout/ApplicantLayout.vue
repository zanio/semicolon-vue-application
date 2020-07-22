<template>
  <v-app class="app">
    <v-container>
      <v-app-bar class="app-bar pt-5 pb-5" elevation="0" app color="white">
        <v-container>
          <v-layout row justify-space-between align-center>
            <v-flex>
              <Logo></Logo>
            </v-flex>
            <v-flex offest-xs6 offset-lg6 d-flex>
              <v-layout row justify-space-between>
                <v-flex offset-xs5 offset-md11 offset-sm9 offset-lg8>
                  <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                  ></v-app-bar-nav-icon>
                  <v-menu> </v-menu>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-app-bar>
    </v-container>
  </v-app>
</template>

<script>
import Logo from "../Logo/Logo";
export default {
  name: "ApplicantLayout",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.app {
  background: #f6f6f6;
  .app-bar {
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(130, 130, 130, 0.1);
    height: 90px !important;
  }
}
</style>
