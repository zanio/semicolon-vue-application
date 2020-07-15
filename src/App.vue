<template>
  <div id="app">
    <!-- <SemicolonHeader /> -->
    <router-view/>
    <!-- <SemicolonFooter /> -->
  </div>
</template>

<script>
import SemicolonHeader from "@/components/footer/Footer";
import SemicolonFooter from "@/components/header/Header";

export default {
  name: "App",
  components: {
    SemicolonHeader,
    SemicolonFooter
  }
};
</script>

<style></style>
