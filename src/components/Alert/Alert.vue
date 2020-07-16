<template>
  <v-alert
    type="error"
    dense
    class="red--text darken-2 font-weight-bold text-center"
    @input="onClose"
    :value="true"
  >
    {{ text }}
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
