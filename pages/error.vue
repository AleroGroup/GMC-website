<template>
  <v-content id="error">
    <v-flex xs12 fluid>
      <v-toolbar height="95">
        <v-toolbar-title>
          <img
            src="../assets/imgs/logo.png"
            alt="GMClogo"
            height="95"
            style="margin-left:8%;"
          />
        </v-toolbar-title>
        <v-spacer />
        <nuxt-link to="/home"
          ><v-btn flat large color="#0074C1">Back to home</v-btn></nuxt-link
        >
      </v-toolbar>
    </v-flex>

    <v-layout row wrap align-center justify-center align-content-center>
      <v-flex xs12 md8 style="margin-top:4%;">
        <v-card
          class="elevation-0 transparent text-xs-center text-sm-center text-md-center "
        >
          <v-card-title primary-title class="text-lg-center  justify-center">
            <div class="display-2 card-main green--text font-weight-bold">
              Oops!!
            </div>
          </v-card-title>
          <v-card-text class="layout justify-center">
            <div class="title card-main font-weight-medium text-md-center">
              Sorry this page is under construction for more information contact
              us.
            </div>
          </v-card-text>
          <v-layout row wrap justify-center>
            <v-card-title text-lg-center justify-center>
              <a
                href="mailto:info@greatmindsnairobi.org"
                class="title blue--text font-italic  font-weight-medium justify-center"
                style="text-decoration:none;"
                >info@greatmindsnairobi.org</a
              >
            </v-card-title>
            <v-icon color="blue">arrow_forward</v-icon>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <FooterOther />
  </v-content>
</template>

<script>
import FooterOther from '../components/Footer_other'

export default {
  name: 'error',
  components: {
    FooterOther
  },
  head() {
    return {
      title: 'Error • Great Minds Challenge Nairobi'
    }
  },
  data() {
    return {}
    let to = '/home' // this is dynamic in my code...
    if (this.$router.currentRoute.path === to) {
      this.$refs.page.$forceUpdate()
    } else {
      this.$router.push(to)
    }
  }
}
</script>
