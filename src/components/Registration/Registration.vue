<template>
  <v-form ref="form" lazy-validation v-model="isValid">
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
        :rules="[(v) => !!v || 'first name is required']"
      ></v-text-field>

      <v-text-field
        name="lastname"
        outlined=""
        label="Last Name"
        id="lastname"
        v-model="lastname"
        type="text"
        required
        :rules="[(v) => !!v || 'Last name is required']"
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
      :rules="emailRule"
    ></v-text-field>

    <vue-tel-input-vuetify
      label="Phone Number"
      required
      name="phone_number"
      outlined
      flat
      :rules="regexValidationForNumber"
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
      v-model="select"
      label="Age"
      :items="dropdown"
      outlined
      dense
      chips
      :append-icon="mdiChevronDown"
      small-chips
      required
      :rules="[(v) => !!v || 'Age range is required']"
      menu-props="auto, overflowY"
      :search-input.sync="search"
      cache-items
    >
    </v-autocomplete>

    <v-radio-group
      :rules="[(v) => !!v || 'Gender is required']"
      v-model="gender"
      required
      label="Gender"
      row
    >
      <v-radio color="primary" label="Male" value="male"> </v-radio>
      <v-radio color="primary" label="Female" value="female"> </v-radio>
    </v-radio-group>

    <v-checkbox
      dense
      :rules="[(v) => !!v || 'Please accept the terms and condition']"
      required
      v-model="checkbox"
    >
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
      class="mt-3 mb-3"
      color="primary"
      :disabled="!isValid || isLoading"
    >
      Apply
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import { mdiChevronDown } from "@mdi/js";

export default {
  name: "registration",
  props: {},
  data() {
    return {
      dropdown: ["10-15", "16-20", "20-30", "30-40", "40-above"],
      gender: null,
      checkbox: false,
      phone: null,
      countryCode: null,
      errorPhoneNumber: "",
      isValid: true,
      email: null,
      firstname: null,
      lastname: null,
      ageRange: null,
      search: null,
      select: null,
      mdiChevronDown
    };
  },

  mounted() {
    console.log(this);
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
      console.log(val && val !== this.select && this.querySelections(val));
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
    onSignup() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("auth/setRegister", {
            firstname: this.firstname,
            lastname: this.lastname,
            phoneNumber: this.phone,
            email: this.email,
            gender: this.gender,
            select: this.select
          })
          .then(() => this.$router.push({ name: "welcome" }));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-form {
  .country-code {
    padding: 0;
    margin: 0;
  }
  .vue-tel-input-vuetify .country-code {
    background: green;
    border: solid 1rem purple;
  }
}
</style>
