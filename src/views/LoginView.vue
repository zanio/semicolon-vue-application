<template>
  <layout>
    <template v-slot:left>
      <login></login>
    </template>

    <template v-slot:right>
      <login-image></login-image>
    </template>

    <template v-slot:button>
      <layout-button btn-link="/apply">Become a Native</layout-button>
    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout/AuthLayout";
import LayoutButton from "../components/LayoutButton/LayoutButton";
import LoginImage from "../components/Login/LoginImage";
import Login from "../components/Login/Login";
export default {
  name: "LoginView",
  components: {
    Layout,
    LoginImage,
    LayoutButton,
    Login
  }
};
</script>

<style scoped></style>
