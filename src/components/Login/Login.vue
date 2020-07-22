<template>
  <v-form ref="login" lazy-validation v-model="isValid">
    <h2 class="heading nuetral--text pt-5 pb-5">
      Welcome Back
    </h2>

    <v-text-field
      name="email"
      label="Email "
      v-model="email"
      outlined
      type="email"
      required
      :rules="[(v) => !!v || 'Please enter a valid email address']"
    ></v-text-field>

    <v-text-field
      name="password"
      label="password"
      v-model="password"
      outlined
      type="password"
      required
      :rules="[(v) => !!v || 'Please type a valid password']"
    ></v-text-field>

    <v-btn
      @click.prevent="onLogin"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      color="primary"
      :disabled="!isValid"
    >
      Login
    </v-btn>
    <v-container>
      <v-layout row justify-space-between>
        <v-flex>
          <router-link to="/create-password">
            <div class="text-center">
              <a
                class="primary--text d-inline-block font-weight-medium darken-3 text-decoration-none"
                >Forgot Your Password</a
              >
            </div>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "login-form",
  props: {},
  data() {
    return {
      password: "",
      email: "",
      isValid: true
    };
  },

  methods: {
    onLogin() {
      if (this.$refs["login"].validate()) {
        this.$store
          .dispatch("auth/SetLogin", {
            email: this.email,
            password: this.password
          })
          .then(() => this.$router.push({ name: "welcome" }));
      }
    }
  }
};
</script>
