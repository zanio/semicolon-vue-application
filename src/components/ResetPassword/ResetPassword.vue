<template>
  <v-form v-model.lazy="$v.$model">
    <h2 class="heading nuetral--text pt-5 pb-5">
      Reset Your Password
    </h2>

    <v-text-field
      name="email"
      label="Email Address"
      v-model="$v.email.$model"
      outlined
      :error-messages="emailErrors"
      type="text"
      required
      @input="$v.email.$touch()"
    ></v-text-field>

    <v-btn
      @click.prevent="onResetPassword"
      elevation="0"
      width="100%"
      ref="sendReply"
      class="mt-3 mb-3"
      type="submit"
      color="primary"
      :disabled="$v.$anyError"
    >
      Send email with reset password link
    </v-btn>
    <v-container>
      <v-layout row justify-space-between>
        <v-flex>
          <router-link to="/create-password">
            <div class="text-center">
              <p
                class="default--text pr-1 font-weight-medium lighten-3 d-inline-block"
              >
                Remember you password?
              </p>
              <a
                class="primary--text d-inline-block font-weight-medium darken-3 text-decoration-none"
              >
                Log In</a
              >
            </div>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "reset-password",
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  },
  props: {},
  data() {
    return {
      email: ""
    };
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    onResetPassword() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        console.log("The Login button has been clicked");
        console.log(this.email);
      }
    }
  }
};
</script>
