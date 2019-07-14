<template>
<v-flex xs12 fluid>
     <v-toolbar height="95">
      <v-toolbar-title >
        <img src="../assets/imgs/logo.png" alt="GMClogo" height="95" style="margin-left:8%;">
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-btn to="/" flat color="#0074C1" style="font-size:16px;">Home</v-btn>
        <v-btn  flat color="#0074C1" style="font-size:16px;">our story</v-btn>
        <v-btn flat color="#0074C1" style="font-size:16px;">Challenges</v-btn>
        <v-btn flat color="#0074C1" style="font-size:16px;">Coaches & Experts</v-btn>
        <v-btn flat color="#0074C1" style="font-size:16px;">Services</v-btn>
      </v-toolbar-items>
    <v-btn to="/contacts" outline large color="#0074C1" style="font-size:16px;border-radius:9px;border: 2px solid">Talk to us</v-btn>
    </v-toolbar>
</v-flex>
</template>
