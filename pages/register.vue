<template>
  <div id="register">
    <v-flex xs12 fluid>
      <v-toolbar height="95">
        <v-toolbar-title>
          <nuxt-link to="/home">
          <img
            src="../assets/imgs/logo.png"
            alt="GMClogo"
            height="95"
            style="margin-left:8%;"
          />
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />

        <v-btn to="/" flat large color="#0074C1">Back to home</v-btn>
      </v-toolbar>
    </v-flex>
    <v-content color="white">
      <v-layout row wrap align-center justify-center align-content-center>
        <v-flex xs12 md8 style="margin-top:4%;">
          <v-card
            class="elevation-0 transparent text-xs-center text-sm-center text-md-center "
          >
            <v-card-title primary-title class="text-lg-center  justify-center">
              <div
                class="display-2 card-main font-weight-bold"
                color="grey darken-2"
              >
                Who are we looking for?
              </div>
            </v-card-title>
            <v-card-text class="layout justify-center">
              <div class="title card-main font-weight-medium text-md-center">
                Are you a go-getter? a dreamer? or a believer?
              </div>
            </v-card-text>
            <v-card-title
              class="display-1 green--text font-italic  font-weight-medium   justify-center"
              text-lg-center
              justify-center
            >
              We are looking for you
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap align-center justify-center align-content-center>
        <v-card class="elevation-0 transparent">
          <v-flex column xs12 md12 style="margin-top:4%;">
            <v-card-title class="justify-center"
              >Enter your information in the application form below and we will
              do the rest!</v-card-title
            >

            <v-card-text
              class="layout justify-center"
              style="margin-bottom:10%;"
            >
              <v-btn
                round
                to="/registration/company"
                outline
                large
                color="#0074C1"
                style="font-size:16px; border: 2px solid;"
                dark
              >
                Company Participant</v-btn
              >

              <v-btn
                round
                to="/registration/wildcard"
                large
                color="#0074C1"
                dark
                >Wildcard Participant</v-btn
              >
            </v-card-text>
          </v-flex>
        </v-card>
      </v-layout>
      <FooterOther />
    </v-content>
  </div>
</template>

<script>
import FooterOther from '../components/Footer_other'

export default {
  components: {
    FooterOther
  },
  head() {
    return {
      title: 'Apply • Great Minds Challenge Nairobi'
    }
  }
  //
}
</script>

<style scoped>
#register {
  background-color: white;
}
.card-main {
  color: #5c5c5c;
}
</style>
