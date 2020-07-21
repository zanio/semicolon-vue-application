<template>
  <div>
    <v-btn elevation="0" class="primary" @click="newevent"
      >Click me to see</v-btn
    >

    <p>{{ value }}</p>
    <input
      class="show-color"
      :value="value"
      v-bind="$attrs"
      type="text"
      name="firstname"
      @input="convertanduse"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  watch: {
    value: function (currentValue, oldValue) {
      console.log(
        "This is the current value =>",
        currentValue,
        "This is the old value =>",
        oldValue
      );
    }
  },
  methods: {
    //When This event is called, it is called with a value...
    convertanduse(e) {
      this.$emit(`myevent`, e);
    },
    newevent() {
      this.$emit("updateStatus", this.value.toUpperCase());
    }
  }
};
</script>

<style scoped lang="scss">
.no-shadow {
  box-shadow: none;
}
.show-color {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid #0074d9;
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  color: #004444;
}
</style>
