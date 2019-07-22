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
          <v-btn flat color="orange">View</v-btn>
          <v-btn flat color="danger" @click="deleteData(wc_room, wc_id)">Delete</v-btn>
        </v-card-actions>
        </v-card>
         </v-flex>
    </v-layout>
    <v-layout row wrap>
<div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this room? </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              <button type="button" class="btn btn-danger" @click="deleteData( wc_wildcard, wc_id)">Delete</button>
           
          </div>
        </div>
      </div>
    </div>
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
       wc_wildcard: {},
       wc_id:'' ,
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

      DELETE(wildcards1, id1) {
      $("#my-modal").modal('show');
      this.wc_wildcard = wildcards1;
      this.wc_id = id1;
   },
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
