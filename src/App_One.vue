<template>
  <v-app >      
    <v-main  class="">
    <v-row style="height:100%;" no-gutters>
      <v-col cols=12 lg="1" class="hidden-md-and-down" />
      <v-col
        cols="12"
        sm="12"
        lg="3"
        md="12"
      >
      <v-container >
       <div class="d-flex flex-column">
       <v-responsive class="pt-5 pb-5">
         <v-img
          alt="Semicolon Logo"
          class="shrink"
          contain
          src="../static/semicolon.svg"
          transition="scale-transition"
          max-width="200"
          
        >
        <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
        </v-img>
         </v-responsive> 

        <h2 class="heading default--text pt-5 pb-5">Become an Innovator</h2> 

        <div class="d-flex justify-space-between">
          <v-autocomplete
            v-model="values"
            outlined
            dense
            chips
            small-chips
            label="First Name"
            multiple
            class="mr-2"
          ></v-autocomplete>
          <v-autocomplete
            v-model="values"
            outlined
            dense
            chips
            small-chips
            label="Last Name"
            multiple
          ></v-autocomplete>
          </div>  

          <v-autocomplete
            v-model="values"
            outlined
            dense
            chips
            small-chips
            label="Email Address"
            multiple
          ></v-autocomplete>  

          <v-autocomplete
            v-model="values"
            outlined
            dense
            chips
            small-chips
            label="Phone Number"
            multiple
          ></v-autocomplete> 

        <v-autocomplete
         ref="autocomplete"
        label="Your Age Range"
          :items="dropdown"
          outlined
          dense
          chips
          append-icon
          small-chips
      ></v-autocomplete>

    <v-radio-group v-model="gender" row>
      <template v-slot:label>
        <p class="secondary-text text-darken-1 font-weight-bold">Gender</p>
      </template>
      <v-radio  color="primary" name="gender" label="Male" :value="male" key="0">
        <template v-slot:label>
        <p class="secondary-text text-lighten-1 font-weight-medium">male</p>
      </template>
      </v-radio>
     <v-radio  color="primary" name="gender" label="Female" :value="female" key="1">

        <template v-slot:label>
        <p class="secondary-text text-lighten-1 font-weight-light font-weight-medium">female</p>
      </template>
     </v-radio>
    </v-radio-group>


     <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div >
      I agree to the      
              <a class="text-decoration-none font-weight-normal"
                target="_blank"
                href="http://vuetifyjs.com"
              >
                Terms and Conditions
              </a>
        </div>
      </template>
    </v-checkbox>

     <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank" elevation="0"
        class="ma-2"  color="primary" >
        Apply
      </v-btn>
        
      </div>
       </v-container>
      </v-col>
        <v-col cols="12" lg="1" class="hidden-md-and-down" />
        <v-col cols="12" lg="7" class="hidden-md-and-down pt-4 pb-4 secondary">
          <v-row>
            <v-col cols="12" lg="2" />
        <v-col cols="12" lg="6">
              <div
                class="d-flex flex-column justify-center align-center"
                style="height:500px;"
              >

           <v-img
          alt="Semicolon Logo"
          class="shrink"
          contain
          src="../static/doorway-illo.png"
          transition="scale-transition"
          max-width="300"          
        >
        <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
        </v-img>
          </div>


        </v-col>
        <v-col cols="12" lg="2">
          <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank" elevation="0"
        class="ma-2" outlined color="primary" >
        Login
      </v-btn>
          </v-col> 
          <v-col cols="12" lg="2" />
         </v-row>
       
      </v-col>
    </v-row>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data() {
    return { 
      dropdown: ['10-15', '16-20', '20-30', '30-40', '40-above'],
     gender:"male",
     checkbox:false
    }},

    mounted () {
    let autocompleteInput = this.$refs.autocomplete.$refs.input;

    autocompleteInput.addEventListener('focus', this.onFocus, true);
  },
  methods: {
    onFocus (e) {
      this.$refs.autocomplete.isMenuActive = true; // open item list
    }
  }
};
</script>


<style scoped>
.no-shadow{
  box-shadow:none;
}


</style>
