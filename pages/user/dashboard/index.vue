<template>
  <div id="app">
  <v-app dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile v-on:click="component = 'HomeMain'">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


      <v-list-group  no-action sub-group  value="true">
          <template v-slot:activator>
            <v-list-tile>
                <v-list-tile-action>
                  <v-icon>category</v-icon>
                </v-list-tile-action>
              <v-list-tile-title>Forms</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile v-on:click="component = 'companyForms'">
            <v-list-tile-title>Company Forms</v-list-tile-title>
            <v-list-tile-action>
              <v-icon>group</v-icon>
            </v-list-tile-action>
          </v-list-tile>

           <v-list-tile v-on:click="component ='wildcardForms'">
            <v-list-tile-title>Wildcard Forms</v-list-tile-title>
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-tile v-on:click="component ='contactForm'">
           <v-list-tile-action>
              <v-icon>email</v-icon>
           </v-list-tile-action>
           <v-list-tile-content>
             <v-list-tile-title>Contact Admin</v-list-tile-title>
           </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-on:click="component ='google'">
           <v-list-tile-action>
              <v-icon>settings</v-icon>
           </v-list-tile-action>
           <v-list-tile-content>
             <v-list-tile-title>Google Mail</v-list-tile-title>
           </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-xs>
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
    </v-container>

  </v-app>
</div>
</template>

<script>
import DashHeader from '../../../components/user_dash/header'
import companyForms from './forms/company'
import wildcardForms from './forms/wildcard'
import HomeMain from './home'
import contactForm from './contact'

export default {
  components: {
    'companyForms': companyForms,
    'wildcardForms': wildcardForms,
    'HomeMain': HomeMain,
    'contactForm': contactForm,
    'google': google,

  },
  head () {
    return{
      title: "Dashboard"
    }
  },
  data () {
    return {
    drawer: true,
    component: 'HomeMain'
    }
  }
}
</script>

<style>

</style>
