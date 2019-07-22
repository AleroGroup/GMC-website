<template>
  <v-content>
    <v-responsive  style="height:100px;">
      <v-layout align-center color="" >
        <v-flex text-xs-left>
          <h3 class="headline font-weight-medium" style="color:#5C5C5C;">Company Participants</h3>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-divider></v-divider>
    <v-layout row wrap>
        <v-card v-for="company of companies" v-bind:item ="companies"  v-bind:index="index" v-bind:key="company._id">
           <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75" />
          <!--Card title-->
          <v-card-title primary-title>
            <div class="headline">{{ company.surname }}, {{ company.names }}</div>
          </v-card-title>
        </v-card>
    </v-layout>
    <v-layout row wrap>
<v-btn to="/welcome" color="success">text</v-btn>
    </v-layout>
  </v-content>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dash_company',
   data() {
     return {
       companies: [],
       errors: ''
   }
   },
   created() {
     axios.get('http://localhost:3000/company')
     .then(res => {
       this.companies = res.data
     })
     .catch(err => {
       this.errors.push(err);
     })
   }

}
</script>

<style>

</style>
