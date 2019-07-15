<template>
  <v-content>
    <v-layout>
      <gmail-config :gmailConfig="emailProvider"/>
    </v-layout>
  </v-content>
</template>

<script>
import gmailConfig from '../../../components/user_dash/googleConfig.vue'
import {mapState} from 'vuex'

export default {
components: {
    gmailConfig
  },
  asyncData (context, callback) {
    if (process.client) {
      console.log('contextClient')
    }
    callback (null, {
      emailProvider: {
        service: context.store.state.emailProvider.service,
        username: context.store.state.emailProvider.username,
        password: context.store.state.emailProvider.password
      }
    })
  },
  methods: {
    send () {
      alert('HELL=')
    }
  }
}
</script>

<style>

</style>
