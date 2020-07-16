<template>
  <v-footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        conduit
      </router-link>
      <span class="attribution">
        An interactive learning project from
        <a rel="noopener noreferrer" target="blank" href="https://thinkster.io"
          >Thinkster</a
        >. Code &amp; design licensed under MIT.
      </span>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "SemicolonFooter"
};
</script>
