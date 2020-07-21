<template>
  <v-alert
    v-if="text"
    type="primary"
    tile
    dense
    class="white--text darken-2 remove-margin font-weight-bold text-center"
    @input="onClose"
    :value="true"
    v-text="text"
  >
  </v-alert>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.v-alert {
  margin: 0;
  position: fixed;
  box-shadow: 10px 10px 18px -6px rgba(0, 0, 0, 0.37) !important;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
}
</style>
