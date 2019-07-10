<template>
  <v-app>
    <!-- <v-toolbar
      fixed
      app
    >
    </v-toolbar> -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>
