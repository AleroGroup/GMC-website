<template>
  <v-content>
    <v-flex fluid>
  <v-toolbar height="95">
        <v-toolbar-title >
          <img src="../assets/imgs/logo.png" alt="GMClogo" height="95" style="margin-left:8%;">
        </v-toolbar-title>
        <v-spacer />
          <v-btn to="/register" flat large color="#0074C1">Back</v-btn>
    </v-toolbar>
  </v-flex>
      <v-img src='https://images.ctfassets.net/pinw8ucllktt/EQEmC6FZHKLwLg7Ga7gGT/451c6daf10b04c0c36a8e0fb6882908a/Welcome.png' style="height:300px;">
       <v-container fill-height>
          <v-layout align-center>
           <v-flex text-xs-left>
              <img >
           </v-flex>
          </v-layout>
      </v-container>
      </v-img>

    <v-content>
      <v-flex xs12 class="justify-center text-xs-center" style="margin-top:5%;">
        <v-layout row justify-center align-center>
            <v-card class="elevation-0 transparent">
                <v-card-title class="headline font-weight-medium">
                  Thank your for registering to the Great Minds Challenge
                </v-card-title>

        </v-card>
        </v-layout>
      </v-flex>

      <v-flex xs12 class="justify-center">
        <v-layout column justify-center align-center>
                <v-card-title>
                  <p >Please check your email for further instructions about your participation. If you have furture questions you can contact us<a href="mailto:info@greatmindsnairobi.co.ke" style="text-decoration:none;" class="font-weight-medium"> here</a>.</p>
                </v-card-title>
          <v-btn flat color="primary" to="/" dark>go back to home page</v-btn>
        </v-layout>
      </v-flex>

    </v-content>

  </v-content>
</template>

<script>
export default {
name: 'welcome',
head () {
  return {
    title: "Welcome • Great Minds Challenge Nairobi",
  }
  }
}
</script>

<style>

</style>
