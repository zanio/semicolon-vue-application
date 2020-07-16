// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib";
import light from "./theme";
import { preset } from "vue-cli-plugin-vuetify-preset-crane/preset";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

const options = {
  theme: {
    themes: { light }
  },
  breakpoint: { scrollbarWidth: 12 },
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
};

export default new Vuetify({
  // The provided global preset is first merged with defaults
  preset,
  // User options are then merged, overwriting defaults and the global preset
  ...options
});
