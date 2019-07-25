<template>
<v-flex xs12 fluid>
     <v-toolbar height="95">
      <v-toolbar-title >
        <img src="../assets/imgs/logo.png" alt="GMClogo" height="95" style="margin-left:8%;">
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down" >
          <nuxt-link to="/home" style="text-decoration:none;"> <v-btn flat color="#0074C1" style="font-size:16px;margin-top:35%;">Home</v-btn></nuxt-link>
          <nuxt-link to="/error" style="text-decoration:none;">
          <v-btn flat color="#0074C1" style="font-size:16px;margin-top:26%;">our story</v-btn></nuxt-link>
          <nuxt-link to="/error" style="text-decoration:none;">
          <v-btn flat color="#0074C1" style="font-size:16px;margin-top:23%;">Challenges</v-btn></nuxt-link>
          <nuxt-link to="/error" style="text-decoration:none;">
          <v-btn flat color="#0074C1" style="font-size:16px;margin-top:16%;">Coaches & Experts</v-btn></nuxt-link>
          <nuxt-link to="/error" style="text-decoration:none;">
          <v-btn flat color="#0074C1" style="font-size:16px;margin-top:30%;">Services</v-btn></nuxt-link>
      </v-toolbar-items>
    <nuxt-link to="/error" style="text-decoration:none;"> <v-btn to="/error" outline large color="#0074C1" style="font-size:16px;border-radius:9px;border: 2px solid">  Talk to us</v-btn></nuxt-link>
    </v-toolbar>
</v-flex>
</template>

<script>
export default {
  data () {
     return {}
     let to = '/home'    // this is dynamic in my code...
      if (this.$router.currentRoute.path === to) {
        this.$refs.page.$forceUpdate()
       } else {
        this.$router.push(to)
      }

  }
}

</script>

