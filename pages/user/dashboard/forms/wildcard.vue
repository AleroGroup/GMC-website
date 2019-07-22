<template>
  <v-content>
    <v-responsive  style="height:100px;">
      <v-layout align-center color="" >
        <v-flex text-xs-left>
          <h3 class="headline font-weight-medium" style="color:#5C5C5C;">Wildcard Participants</h3>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-divider></v-divider>
    <v-layout column="">
       <v-flex xs12 md6 >
        <v-card v-for="wildcard of wildcards" v-bind:item ="wildcards"  v-bind:index="index" v-bind:key="wildcard._id" width="200" height="200"
        style="margin:20px">

          <!--Card title-->
          <v-card-title primary-title>
            <div class="title"><p>{{ wildcard.surname }},</p> {{ wildcard.names }}</div>
            <span class="grey--text">{{ wildcard.timeStamp }} </span>
          </v-card-title>
        <v-card-actions>
          <v-btn disabled flat color="orange">View</v-btn>
         <!--  <v-btn flat color="danger" @click="deleteData(wildcard, wildcard._id)">Delete</v-btn> -->
        </v-card-actions>
        </v-card>
         </v-flex>
    </v-layout>
    <v-layout row wrap>
    </v-layout>
  </v-content>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dash_wildcard',
   data () {
    return {
       wildcards: [],
       wildcard: {},
       wildcard_id:'' ,
       errors: ''
         }
   },


   created() {
     axios.get('http://localhost:3000/wildcard')
     .then(res => {
       this.wildcards = res.data
     })
     .catch(err => {
       this.errors.push(err);
     })
   },
   methods: {

   deleteData(wildcards, id) {
      axios.delete('http://localhost:3000/wildcard' + id)
        .then(res => this.wildcards.splice(index, 1));
      window.location.reload();
    },
}
}
</script>

<style>

</style>
