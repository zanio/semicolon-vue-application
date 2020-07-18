<template>
  <v-form ref="resetPassword" lazy-validation v-model="isValid">
    <h2 class="heading nuetral--text pt-5 pb-5">
     Reset Your Password
    </h2>

    <v-text-field
      name="email"
      label="Email Address"
      v-model="email"
      outlined
      type="email"
      required
      :rules="[v => !!v || 'Please enter a valid email address']"
    ></v-text-field>

    <v-btn
      @click.prevent="onResetPassword"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      color="primary"
      :disabled="!isValid"
    >
      Send email with reset password link
    </v-btn>
    <v-container>
      <v-layout row justify-space-between >
        <v-flex>
          <router-link to="/create-password">
            <div class="text-center">
              <p class="default--text pr-1 font-weight-medium lighten-3 d-inline-block">
                Remember you password?
              </p>
              <a class="primary--text d-inline-block
          font-weight-medium darken-3 text-decoration-none"> Log In</a>
            </div>

          </router-link>
        </v-flex>

      </v-layout>
    </v-container>


  </v-form>

</template>

<script>
  export default {
    name: "reset-password",
    props: {},
    data() {
      return {
        email: "",
        isValid: true
      };
    },

    methods: {
      onResetPassword() {
        if (this.$refs["resetPassword"].validate()) {
          console.log("The Login button has been clicked");
        }
      }
    }
  };
</script>

