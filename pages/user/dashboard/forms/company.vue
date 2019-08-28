<template>
  <v-content>
    <v-responsive  style="height:100px;">
      <v-layout row align-start >
        <v-flex text-xs-left>
          <h3 class="headline font-weight-medium" style="color:#5C5C5C;">Company Participants</h3>
        </v-flex>
      </v-layout>
      
      <v-btn small flat color="blue darken-3">
          Back
          </v-btn>
    </v-responsive>
    <v-divider></v-divider>

    <v-layout row wrap>
       <v-hover v-slot:default="{ hover }" v-for="(company,index) in companies" :key="index">
             <v-card
               width="300px"
               :elevation="hover ? 12 : 2"
               style="margin-top:2%; margin-right:2%;"
               @click="toMember(item.itemId)"
             >
               <v-img :src="company.url" height="200px">
               </v-img>
               <v-card-title primary-title>
                  <div class="headline mb-3 green--text text--darken-4">
                    {{ company.title }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="subtitle text-uppercase">
                    {{ company.type }}
                  </div>
                  <div style="margin-top:5%">{{ company.description }}</div>
                </v-card-text>
              </v-card>
           </v-hover>
    </v-layout>
    <v-layout row wrap>
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
     axios.get('http://localhost:3000/company/getall')
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
