<template>
  <layout>
    <template v-slot:left>
      <reset-password></reset-password>
    </template>

    <template v-slot:right>
      <login-image></login-image>
    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout/AuthLayout";
import LoginImage from "../components/Login/LoginImage";
import ResetPassword from "../components/ResetPassword/ResetPassword";
export default {
  name: "ResetPasswordView",
  components: {
    Layout,
    LoginImage,
    ResetPassword
  }
};
</script>

<style scoped></style>
