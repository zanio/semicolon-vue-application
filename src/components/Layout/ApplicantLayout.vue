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
                <v-flex offset-xs5 offset-md3 offset-sm9 offset-lg3 d-flex>
                  <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                  ></v-app-bar-nav-icon>
                  <v-layout
                    class="hidden-sm-and-down"
                    row
                    justify-space-around
                    align-center
                  >
                    <v-flex md3>
                      <v-icon>$bell</v-icon>
                    </v-flex>
                    <v-flex md6>
                      <v-menu
                        nudge-bottom="52"
                        nudge-left="20"
                        min-width="140px"
                        internal-activator
                      >
                        <template v-slot:activator="{ on: menu, attrs }">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                              <v-layout row justify-space-between align-center>
                                <v-flex>
                                  <v-toolbar-items
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                  >
                                    <v-avatar>
                                      <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                      />
                                    </v-avatar>
                                  </v-toolbar-items>
                                </v-flex>
                                <v-flex>
                                  <span
                                    :style="{ fontSize: '18px' }"
                                    v-bind="attrs"
                                    v-on="{ ...tooltip, ...menu }"
                                    class="deep-red--text font-weight-bold"
                                  >
                                    Me
                                    <v-icon
                                      large
                                      color="#960C0C"
                                      dark
                                      v-bind="attrs"
                                      v-on="{ ...tooltip, ...menu }"
                                      >$dropdown</v-icon
                                    >
                                  </span>
                                </v-flex>
                              </v-layout>
                            </template>
                          </v-tooltip>
                        </template>

                        <v-list>
                          <v-list-item
                            v-for="(item, index) in items"
                            :key="index"
                            @click=""
                          >
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-flex>
                  </v-layout>

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
  data() {
    return {
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me2" }
      ]
    };
  },
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
