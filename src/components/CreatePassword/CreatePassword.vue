<template>
  <v-form ref="createPassword" lazy-validation v-model="isValid">
    <h2 class="heading nuetral--text pt-5 pb-5">
      Create Password
    </h2>

    <v-text-field
      name="Password"
      label="Password"
      id="password"
      v-model="password"
      outlined
      type="password"
      required
      :rules="[v => !!v || 'password  is required']"
    ></v-text-field>

    <v-text-field
      name="confirmPassword"
      label="Confirm Password"
      id="password"
      v-model="confirmPassword"
      outlined
      type="password"
      required
      :rules="[v => !!v || 'Please type your password again']"
    ></v-text-field>

    <v-btn
      @click.prevent="onCreatePassword"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      color="primary"
      :disabled="!isValid"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "create-password",
  props: {},
  data() {
    return {
      password: "",
      confirmPassword: "",
      isValid: true
    };
  },

  methods: {
    onCreatePassword() {
      if (this.$refs["createPassword"].validate()) {
        console.log("The create password link has been clicked");
      }
    }
  }
};
</script>
