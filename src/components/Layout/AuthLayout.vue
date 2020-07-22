<template>
  <v-app>
    <v-main>
      <v-row style="height: 100%;" no-gutters>
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <v-col cols="12" sm="12" lg="3" md="12">
          <v-container>
            <div class="d-flex flex-column">
              <v-responsive class="mb-lg-8 mb-sm-5 pt-10">
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
                </router-link>
              </v-responsive>
              <slot name="left"></slot>
            </div>
          </v-container>
        </v-col>
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <v-col cols="12" lg="7" class="hidden-md-and-down pt-4 pb-4 secondary">
          <v-row>
            <v-col offset-lg="4" />
            <v-col lg="3">
              <slot name="button"></slot>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-auto" cols="12" lg="12">
              <div
                class="d-flex flex-column justify-center align-center"
                :style="{ height: '550px' }"
              >
                <slot name="right"></slot>
              </div>
            </v-col>
            <!--            <v-col cols="12" lg="2" />-->
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped>
.no-shadow {
  box-shadow: none;
}
</style>

<script>
export default {
  name: "layout",
  props: {}
};
</script>

<style scoped>
.no-shadow {
  box-shadow: none;
}
</style>
