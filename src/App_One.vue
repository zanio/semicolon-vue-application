<template>
  <v-app>
    <v-main class="">
      <v-row style="height:100%;" no-gutters>
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <v-col cols="12" sm="12" lg="3" md="12">
          <v-container>
            <div class="d-flex flex-column">
              <v-form ref="form" lazy-validation v-model="isValid">
                <v-responsive class="pt-5 pb-5">
                  <v-img
                    alt="Semicolon Logo"
                    class="shrink"
                    contain
                    src="../static/semicolon.svg"
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
                </v-responsive>

                <h2 class="heading nuetral--text pt-5 pb-5">
                  Become an Innovator
                </h2>

                <div class="d-flex justify-space-between">
                  <v-text-field
                    name="firstname"
                    label="First Name"
                    id="firstname"
                    v-model="firstname"
                    outlined
                    class="mr-2"
                    type="text"
                    required
                    :rules="[v => !!v || 'first name is required']"
                  ></v-text-field>

                  <v-text-field
                    name="lastname"
                    outlined=""
                    label="Last Name"
                    id="lastname"
                    v-model="lastname"
                    type="text"
                    required
                    :rules="[v => !!v || 'Last name is required']"
                  ></v-text-field>
                </div>

                <v-text-field
                  outlined
                  name="email"
                  label="Email"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  :rules="[v => !!v || 'Email is required']"
                ></v-text-field>

                <vue-tel-input-vuetify
                  label="Phone Number"
                  required
                  name="phone_number"
                  outlined
                  flat
                  :rules="[
                    v => !!v || 'Only digits are valid for phone number'
                  ]"
                  mode="international"
                  full-width
                  v-model="phone"
                  @input="countrySelected"
                  @country-changed="countrySelected"
                >
                  <span>
                    <v-icon>{{ mdiChevronDown }}</v-icon>
                  </span>
                </vue-tel-input-vuetify>

                <v-autocomplete
                  label="Age"
                  :items="dropdown"
                  outlined
                  dense
                  chips
                  :append-icon="mdiChevronDown"
                  small-chips
                  required
                  hint="click to select"
                  persistent-hint
                  :rules="[v => !!v || 'Age range is required']"
                  menu-props="auto, overflowY"
                  :search-input.sync="search"
                  cache-items
                >
                </v-autocomplete>

                <v-radio-group
                  :rules="[v => !!v || 'Gender is required']"
                  v-model="gender"
                  required
                  row
                >
                  <!-- <template v-slot:label>
                    <p class="secondary-text text-darken-1 font-weight-bold">
                      Gender
                    </p>
                  </template> -->
                  <v-radio color="primary" label="Male" :value="0"> </v-radio>
                  <v-radio color="primary" label="Female" :value="1"> </v-radio>
                </v-radio-group>

                <v-checkbox dense :rules="checkbox" required v-model="checkbox">
                  <template v-slot:label>
                    <div>
                      I agree to the
                      <a
                        class="text-decoration-none font-weight-normal"
                        target="_blank"
                        href="http://vuetifyjs.com"
                      >
                        Terms and Conditions
                      </a>
                    </div>
                  </template>
                </v-checkbox>

                <v-btn
                  @click.prevent="onSignup"
                  elevation="0"
                  width="100%"
                  class=""
                  color="primary"
                  :disabled="!isValid"
                >
                  Apply
                </v-btn>
              </v-form>
            </div>
          </v-container>
        </v-col>
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <v-col cols="12" lg="7" class="hidden-md-and-down pt-4 pb-4 secondary">
          <v-row>
            <v-col cols="12" lg="2" />
            <v-col cols="12" lg="6">
              <div
                class="d-flex flex-column justify-center align-center"
                style="height:500px;"
              >
                <v-img
                  alt="Semicolon Logo"
                  class="shrink"
                  contain
                  src="../static/doorway-illo.png"
                  transition="scale-transition"
                  max-width="300"
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
              </div>
            </v-col>
            <v-col cols="12" lg="2">
              <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                elevation="0"
                class="ma-2"
                outlined
                color="primary"
              >
                Login
              </v-btn>
            </v-col>
            <v-col cols="12" lg="2" />
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { mdiChevronDown } from "@mdi/js";
export default {
  name: "App",

  components: {
    HelloWorld
  },

  data() {
    return {
      dropdown: ["10-15", "16-20", "20-30", "30-40", "40-above"],
      gender: null,
      checkbox: false,
      phone: null,
      countryCode: null,
      errorPhoneNumber: "",
      isValid: true,
      firstname: null,
      lastname: null,
      ageRange: null,
      search: "",
      mdiChevronDown
    };
  },

  mounted() {},
  computed: {
    regexValidationForNumber(val) {
      const reg = /^\d+$/;
      return [reg.test(val) || "Only digits are valid for Phone Number"];
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
      console.log(val);
    }
  },
  methods: {
    setAgeRange() {
      console.log(this.$refs.autocomplete.selectedItem);
      this.ageRange = this.$refs.autocomplete.selectedItem;
    },
    isPhoneNumberValid(value) {
      return value >= 21 || value != "" || value != "undefined";
    },
    onFocus(e) {
      this.$refs.autocomplete.isMenuActive = true; // open item list
    },
    countrySelected(val) {
      this.countryCode = val.dialCode;
    },
    onSignup() {
      console.log(this.search);
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        console.log(this.search);
      }
      // this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      //        console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
    }
  }
};
</script>

<style scoped>
.no-shadow {
  box-shadow: none;
}
</style>
