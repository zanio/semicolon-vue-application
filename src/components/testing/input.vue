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

    <v-container grid-list-xl class="mt-16">
      <v-layout row class="mx-auto">
        <v-flex v-for="n in 30" :key="n" d-flex xs12>
          <v-layout row justify-space-around>
            <v-flex class="mt-2 mb-2" sm3 xs12 md6>
              <v-card
                class="mx-auto"
                color="red lighten-2"
                :style="{ width: '400px' }"
                dark
              >
                <v-card-text class="text-center">{{
                  lorem.slice(0, 40)
                }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="mt-2 mb-2" xs12 sm3 md6>
              <v-card
                :style="{ width: '400px' }"
                color="red lighten-2"
                class="mx-auto"
                dark
              >
                <v-card-text class="text-center">{{
                  lorem.slice(0, 40)
                }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  mounted() {},
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
