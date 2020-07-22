<template>
  <layout>
    <template v-slot:left>
      <create-password></create-password>
    </template>

    <template v-slot:right>
      <create-password-image></create-password-image>
    </template>
  </layout>
</template>

<script>
import CreatePassword from "../components/CreatePassword/CreatePassword";
import Layout from "../components/Layout/AuthLayout";
import CreatePasswordImage from "../components/CreatePassword/CreatePasswordImage";
import LayoutButton from "../components/LayoutButton/LayoutButton";
export default {
  components: {
    CreatePassword,
    Layout,
    CreatePasswordImage,
    LayoutButton
  }
};
</script>

<style scoped></style>
