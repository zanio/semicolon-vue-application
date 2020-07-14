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
         <form @submit.prevent="onSignup">

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
       <v-text-field 
       name="firstname" label="First Name" 
       id="firstname" 
       v-model="firstname" 
       outlined
       class="mr-2"
       type="text" required></v-text-field>

         <v-text-field 
         name="lastname" 
         outlined=""
         label="Last Name" 
         id="lastname" 
         v-model="lastname" 
         type="text" required></v-text-field>

          </div>  

     <v-text-field 
     outlined name="email" label="Email" id="email" v-model="email" type="email" required></v-text-field>


      <vue-tel-input-vuetify 
      label="Phone Number"  
      placeholder="Phone Number" 
      required name="phone_number" 
      outlined flat  mode="international"
      :error-messages="errorPhoneNumber"
      dense full-width v-model="phone" @input="countrySelected" @country-changed="countrySelected"	>
      <span >
      <v-icon>arrow_drop_down</v-icon>
      </span>
      </vue-tel-input-vuetify>

    
     <v-autocomplete
         ref="autocomplete"
        label="Your Age Range"
          :items="dropdown"
          outlined
          dense
          chips
          :append-icon="mdiChevronDown"
          small-chips
      >
      </v-autocomplete>

    <v-radio-group v-model="gender" row>
      <template v-slot:label>
        <p class="secondary-text text-darken-1 font-weight-bold">Gender</p>
      </template>
      <v-radio  color="primary" name="gender" label="Male" :value="male" key="0">
        
      </v-radio>
     <v-radio  color="primary" name="gender" label="Female" :value="female" key="1">
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
        target="_blank" elevation="0" width="100%"
        class=""  color="primary" >
        Apply 
      </v-btn>
      </form>

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
import { mdiChevronDown } from '@mdi/js';
export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data() {
    return { 
      dropdown: ['10-15', '16-20', '20-30', '30-40', '40-above'],
     gender:"male",
     checkbox:false,
     mdiChevronDown,
    phone: null,
    countryCode: null,
    errorPhoneNumber:""

    }
    
    },

    mounted () {
    let autocompleteInput = this.$refs.autocomplete.$refs.input;

    autocompleteInput.addEventListener('focus', this.onFocus, true);
    autocompleteInput.addEventListener('click', this.onFocus, true);
  },
  
  methods: {
    isPhoneNumberValid(value){
      return value>=21|| value!="" || value !="undefined"
    },
    onFocus (e) {
      this.$refs.autocomplete.isMenuActive = true; // open item list
    },
    countrySelected(val) {
    this.countryCode = val.dialCode;
    console.log(this.phone)
  },
  onSignup () {
    if(this.isPhoneNumberValid(this.phone)){
      return this.errorPhoneNumber = "Phone Number is not valid"
    }
    // this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
//        console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
  },
  }
};
</script>


<style scoped>
.no-shadow{
  box-shadow:none;
}


</style>
