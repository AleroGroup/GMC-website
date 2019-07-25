<template>
   <v-content>
    <v-responsive  style="height:100px;">
      <v-layout align-center >
        <v-flex text-xs-left>
          <h3 class="headline font-weight-medium" style="color:#5C5C5C;">GMC Dashboard</h3>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-divider></v-divider>
    <v-layout column wrap>
      <v-flex xs12 md4 style="margin-top:2%;">
        <h2 class="title font-weight-thin">Hello these are the things you can do on your dashboard</h2>
      </v-flex>
       <v-flex xs12 md6 >
         <v-layout row >
            <v-card style="margin:20px" class="elevation-1 ">
                <v-card-title class="title">
                  Company Participants
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-card-text style="margin-left:6%;" >
                       Please click on the Company form on the left drawer to see the data.
                    </v-card-text>
                    </v-card-actions>
            </v-card>

             <v-card style="margin:20px" class="elevation-1 ">
                <v-card-title class="title">
                  Wildcard Participants
                </v-card-title>
                 <v-divider></v-divider>
                <v-card-actions>
                 <v-card-text style="margin-left:6%;" >
                       Please click on the Wildcard form on the left drawer to see the data.
                    </v-card-text>
                 </v-card-actions>
            </v-card>
         </v-layout>

        </v-flex>
    </v-layout>

  </v-content>
</template>

<script>
export default {
  name: 'dash_home'

}
</script>

<style>

</style>
