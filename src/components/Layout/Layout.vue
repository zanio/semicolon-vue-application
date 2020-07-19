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
            <v-col cols="12" lg="2" />
            <v-col cols="12" lg="6">
              <div
                class="d-flex flex-column justify-center align-center"
                style="height: 500px;"
              >
                <slot name="right"></slot>
              </div>
            </v-col>
            <v-col cols="12" lg="2">
              <slot name="button"></slot>
            </v-col>
            <v-col cols="12" lg="2" />
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { mdiChevronDown } from "@mdi/js";
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
export default {
  name: "App",

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
      search: null,
      select: null,
      mdiChevronDown
    };
  },

  mounted() {
    console.log(this.$route);
  },
  computed: {
    regexValidationForNumber() {
      return [(v) => !!v || "phone number is required"];
    },
    emailRule() {
      return [
        (v) => !!v,
        (v) => /.+@.+/.test(v) || "Email is required and Email must be valid"
      ];
    },
    ...mapState({
      errors: (state) => state.auth.errors,
      isLoading: (state) => state.auth.isLoading
    })
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    setAgeRange() {
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
    onSignUp() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch(REGISTER, {
            firstname: this.firstname,
            lastname: this.lastname,
            phoneNumber: this.phone,
            email: this.email,
            gender: this.gendeer,
            select: this.select
          })
          .then(() => this.$router.push({ name: "welcome" }));
      }
    }
  }
};
</script>

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
