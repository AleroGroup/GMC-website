<template>
<div id="register">
  <HeaderSec />
    <v-content>
     <v-layout row wrap align-center justify-center align-content-center>
        <v-flex xs12 sm12 md12 lg12 style="margin-top:4%;">
            <v-card class="elevation-0 transparent text-xs-center text-sm-center text-md-center ">
              <v-card-title primary-title class="text-lg-center  justify-center">
                <div class="display-2 card-main font-weight-bold" color="grey darken-2">Who are we looking for?</div>
              </v-card-title>
              <v-card-text  class="layout justify-center">
                <div class="title card-main font-weight-medium text-md-center">Are you a go-getter? <br/>
                a dreamer? <br/>
                or a believer?</div>
             </v-card-text>
             <v-card-title class="display-1 green--text font-italic  font-weight-medium   justify-center" text-lg-center justify-center>
                We are looking for you
             </v-card-title>
            </v-card>
          </v-flex>
     </v-layout>
     <v-divider></v-divider>
     <v-layout row wrap align-center justify-center align-content-center>
        <v-flex xs12 sm12 md12 lg12 style="margin-top:4%;">
          <v-card class="elevation-0 transparent">
            <v-card-title >Enter your information in the application form below and we will do the rest!</v-card-title>
          </v-card>
        </v-flex>
     </v-layout>
   </v-content>
  </div>
</template>

<script>
import HeaderSec from '../components/header_two'
    export default{
      components: {
        HeaderSec
      },
        head () {
           return {
             title: 'Register • Great Minds Challenge Nairobi'
             }
        }
        //
    }
</script>

<style>
.card-main{
  color: #5C5C5C;
}

</style>
