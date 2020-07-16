/* eslint-disable prettier/prettier */
<template>
  <v-app>
    <v-main class="">
      <v-row style="height:100%;" no-gutters>
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <!--Right Section-->
        <apply-form v-if="$route.name === 'apply' || $route.name === 'login'" />
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <v-col cols="12" lg="7" class="hidden-md-and-down pt-4 pb-4 secondary">
          <!-- View Template would go here -->
          <apply-left v-if="$route.name === 'apply'" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import ApplyForm from "../ApplyForm/ApplyForm";
import ApplyLeft from "../ApplyLeft/ApplyLeft";
import Alert from "../Alert/Alert";

export default {
  name: "Layout",
  components: {
    Alert,
    ApplyLeft,
    ApplyForm
  }
};
</script>

<style scoped>
.no-shadow {
  box-shadow: none;
}
</style>
