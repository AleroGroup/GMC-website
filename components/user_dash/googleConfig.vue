<template>
<v-content>
  <v-layout justify-center>
      <v-flex xs12 >
        <h1 class="display-1 text-xs-center text-xl-center"> Google settings</h1>
        <p class="text-xs-center text-xl-center">.</p>
        <v-divider></v-divider>
      </v-flex>
  </v-layout>
  <v-layout row wrap justify-center style="margin-top:5%;">
    <v-card flat>
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field
              color="blue"
              label="Your Gmail email"
              name="gmail"
              :value="gmailConfig.username"
              @input="updateUsername"
              type="email"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              color="blue"
              label="Your Gmail password"
              name="gmail"
              :value="gmailConfig.password"
              @input="updatePassword"
              type="password"
            ></v-text-field>
          </v-flex>

        </v-layout>
      </v-container>
      <v-card-actions>
            <v-btn
            @click.stop="changeGmailValue"
            flat
            color="primary"
            > {{ message.value ? 'UPDATED' : 'SAVE'}} </v-btn>
          </v-card-actions>
      </v-card>
  </v-layout>
</v-content>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import { setTimeout } from 'timers';

export default {
name: 'GmailConfig',
  data () {
    return {
      username: '',
      password: '',
      message: {
        text: 'UPDATED',
        time: 8500,
        value: false
      }
    }
  },
  props: {
    gmailConfig: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateUsername (e) {
      this.username = e.target.value
    },
    updatePassword (e) {
      this.password = e.target.value
    },
    changeGmailValue () {
      const emailProvider = {
        service: 'gmail',
        username: this.username,
        password: this.password
      }
      this.$store.commit('setNewEmailProvider', emailProvider)
      let time = this.message.time
      this.message.value = true
      setTimeout(() => {
        this.message.value = false
      },time)
    }
  }
}
</script>

<style>

</style>
