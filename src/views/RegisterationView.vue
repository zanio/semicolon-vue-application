<template>
  <layout>
    <template v-slot:left>
      <registration></registration>
    </template>

    <template v-slot:right>
      <registration-image></registration-image>
    </template>

    <template v-slot:button>
      <layout-button btn-link="/login">Login</layout-button>
    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout/Layout";
import RegistrationImage from "../components/Registration/RegistrationImage";
import LayoutButton from "../components/LayoutButton/LayoutButton";
import Registration from "../components/Registration/Registration";
export default {
  name: "RegisterationView",
  components: {
    Layout,
    RegistrationImage,
    LayoutButton,
    Registration
  }
};
</script>

<style scoped></style>
