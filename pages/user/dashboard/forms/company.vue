<template>
  <v-content>
    <v-responsive  style="height:100px;">
      <v-layout row align-start >
        <v-flex text-xs-left>
          <h3 class="headline font-weight-medium" style="color:#5C5C5C;">Company Participants</h3>
        </v-flex>
      </v-layout>
    </v-responsive>

    <v-divider></v-divider>
 <v-layout row justify-end>
    <v-btn color="green" @click="csvExport(csvData)"> Export all to CSV </v-btn>
 </v-layout>

    <v-layout row wrap>
       <v-hover v-slot:default="{ hover }" v-for="(company,index) in companies" :key="index">
             <v-card
               width="300px"
               :elevation="hover ? 12 : 2"
               style="margin-top:2%; margin-right:2%;"
               @click="toMember(company.companyId)"
             >
               <v-img :src="company.cloudImage" height="200px">
               </v-img>
               <v-card-title primary-title>
                  <div class="headline mb-3 green--text text--darken-4">
                    {{ company.surname }} , {{ company.names }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <div class="subtitle text-uppercase">
                    {{ company.noc }}
                  </div>
                  <div style="margin-top:5%">{{ company.email }}</div>
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
   computed: {
    csvData() {
      return this.companies.map(item => ({
        ...item,
        'type of form': 'company'
      }));
    }
  },
   methods: {
      toMember(companyId) {
        this.$router.push({name:'company',params:{Pid:companyId}})
      },

    csvExport(arrData) {
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(arrData[0]).join(";"),
        ...arrData.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "company.csv");
      link.click();
    }
  },
   created() {
     axios.get('http://ec2-3-17-164-106.us-east-2.compute.amazonaws.com:8000/company/')
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
