<template>
  <v-content id="contact">
     <Header />
    <v-img
      src="https://images.ctfassets.net/pinw8ucllktt/EQEmC6FZHKLwLg7Ga7gGT/451c6daf10b04c0c36a8e0fb6882908a/Welcome.png"
      style="height:300px;"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-left>
            <img />
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
<v-content>
    <v-layout row wrap align-center justify-center align-content-center>
      <v-flex xs12 md8 style="margin-top:4%;">
        <v-card
          class="elevation-0 transparent text-xs-center text-sm-center text-md-center "
        >
          <v-card-text primary-title class="text-lg-center  justify-center">
            <div class="headline card-main gray--text font-weight-bold">
             “In Africa, change is due and there is a group of talented young people working towards that. The launch of the Great Minds Challenge today signifies hope, a sustainable future and New Generation Leadership.”
            </div>
          </v-card-text>

          <v-layout row wrap justify-center style="margin-top:6%;">
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
          <v-layout row wrap justify-center style="margin-bottom:15%;">
            <v-card-title text-lg-center justify-center>
              <a href="tel:+254710183926"
               class="title blue--text font-italic  font-weight-medium justify-center"
               style="text-decoration:none;"> +254710183926</a>
            </v-card-title>
            <v-icon color="blue">arrow_forward</v-icon>
          </v-layout>

</v-container>
        </v-card>
      </v-flex>
    </v-layout>
</v-content>
    <Footer />
  </v-content>
</template>

<script>
import Header from '@/components/header_one'
import Footer from '@/components/Footer'
export default {
  name: 'error',
  components: {
    Footer,
    Header
  },
  head() {
    return {
      title: 'Talk to us • Great Minds Challenge Nairobi'
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
