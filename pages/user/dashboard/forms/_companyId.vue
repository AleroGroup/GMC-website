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
