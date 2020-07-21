<template>
  <div class="parentInput">
    <p>
      {{ upperCaseName }}
    </p>
    <my-input
      @updateStatus="updateStatus"
      :value="firstname"
      @myevent="onGetInput"
    ></my-input>
  </div>
</template>

<script>
import MyInput from "../input";
export default {
  data() {
    return {
      firstname: null,
      upperCaseName: null
    };
  },
  props: {},
  components: {
    MyInput
  },
  methods: {
    onGetInput(e) {
      this.$emit("myevent", e);
      this.firstname = e.target.value;
    },
    updateStatus(val) {
      this.upperCaseName = val;
    }
  }
};
</script>
