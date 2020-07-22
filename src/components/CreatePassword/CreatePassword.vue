<template>
  <v-form v-model.lazy="$v.$model">
    <h2 class="heading nuetral--text pt-5 pb-5">
      Create Password
    </h2>

    <v-text-field
      name="password"
      label="Password"
      outlined
      v-model.lazy="$v.password.$model"
      :error-messages="PasswordErrors"
      @input="$v.password.$touch()"
      type="password"
      class="mb-5-lg"
      required
    ></v-text-field>

    <v-text-field
      name="confirmPassword"
      label="Confirm Password"
      v-model.lazy="$v.confirmPassword.$model"
      :error-messages="ConfirmPasswordErrors"
      outlined
      class="mb-5-lg"
      @input="$v.confirmPassword.$touch()"
      @keydown.enter="onCreatePassword"
      type="password"
      required
    ></v-text-field>

    <v-btn
      @click.prevent="onCreatePassword"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      ref="sendReply"
      color="primary"
      :disabled="$v.$anyError"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "create-password",
  mixins: [validationMixin],

  props: {},
  data() {
    return {
      password: "",
      confirmPassword: "",
      isValid: true
    };
  },

  validations: {
    password: { required, minLength: minLength(8) },
    confirmPassword: {
      required,
      minLength: minLength(8),
      sameAs: sameAs("password")
    }
  },

  computed: {
    PasswordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must have at least a length of 8");
      !this.$v.password.required && errors.push("Password  is required.");
      return errors;
    },

    ConfirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      console.log(this.$v);
      !this.$v.confirmPassword.minLength &&
        errors.push("Password must have at least a length of 8");
      !this.$v.confirmPassword.required &&
        errors.push("Password  is required.");
      this.password !== this.confirmPassword &&
        errors.push("Password does not match");
      return errors;
    }
  },

  methods: {
    onCreatePassword() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        console.log("Credential is now valid");
      }
    },
    triggerBtn() {
      this.$refs["sendReply"].click();
    }
  }
};
</script>
