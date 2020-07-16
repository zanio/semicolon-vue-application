<template>
  <v-app>
    <v-container grid-list-xs3>
      <v-layout row justify-space-around>
        <v-flex md6>
          <v-alert
            type="error"
            dense
            rounded="false"
            class="white--text darken-2 font-weight-bold text-center"
          >
            This is an error
          </v-alert>
        </v-flex>
        <v-flex md6
          ><v-alert
            type="error"
            dense
            rounded="false"
            class="white--text darken-2 font-weight-bold text-center"
          >
            This is an error
          </v-alert></v-flex
        >
        <v-flex offset-xs3 md6
          ><v-alert
            type="error"
            dense
            rounded
            shaped
            class="white--text darken-2 font-weight-bold text-center"
          >
            This is an error
          </v-alert></v-flex
        >
      </v-layout>
    </v-container>
  </v-app>
</template>
