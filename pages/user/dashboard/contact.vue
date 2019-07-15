<template>
<v-content>
  <v-layout justify-center>
      <v-flex xs12 >
        <h1 class="display-1 text-xs-center text-xl-center"> DO YOU HAVE A PROBLEM ?</h1>
        <p class="text-xs-center text-xl-center">Please complete the form below and we will get back to you within 1-3 business days.</p>
        <v-divider></v-divider>
      </v-flex>
  </v-layout>
  <v-layout row wrap justify-center style="margin-top:5%;">
    <v-card flat>
       <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Message successful sent!</span>
          <v-icon dark>check_circle</v-icon>
       </v-snackbar>

    <v-form ref="form" @submit.prevent="sendEmail">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
            <v-flex xs12>
            <v-text-field
              v-model.trim="form.name"
              :rules="rules.name"
              color="blue"
              label="Your name"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model.trim="form.email"
              :rules="rules.email"
              color="blue"
              label="Email address"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
              v-model.trim="form.msg"
              color="blue"
            >
              <template v-slot:label>
                <div>
                  Message
                </div>
              </template>
            </v-textarea>
          </v-flex>

        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat @click="resetForm">Cancel</v-btn>
        <v-spacer></v-spacer>
            <v-btn
            :disabled="!formIsValid"
            flat
            color="primary"
            type="submit"
            >Register</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
  </v-layout>
</v-content>
</template>

<script>
  export default {
    data () {
      const defaultForm = Object.freeze({
        name: '',
        email: '',
        msg: ''
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          email: [val => (val || '').length > 0 || 'This field is required']
        },
        snackbar: false,
        defaultForm
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.name &&
          this.form.email &&
          this.form.msg
        )
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      sendEmail () {
        const emailData = {
            name: this.form.name,
            email: this.form.email,
            msg: this.form.msg,
        }
        this.$store.dispatch ('sendMail', emailData)


        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>


