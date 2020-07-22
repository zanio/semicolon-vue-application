<template>
  <router-link :to="btnLink">
    <v-btn elevation="0" large class="d-inline-block" outlined color="primary">
      <slot></slot>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "layout-button",
  props: {
    btnLink: {
      type: String
    }
  }
};
</script>
