<template>
<v-content>
  <v-flex fluid>
  <v-toolbar height="95">
        <v-toolbar-title >
          <img src="../../assets/imgs/logo.png" alt="GMClogo" height="95" style="margin-left:8%;">
        </v-toolbar-title>
        <v-spacer />
          <v-btn to="/register" flat large color="#0074C1">Back</v-btn>
    </v-toolbar>
  </v-flex>
      <v-jumbotron color="#C1ECF9" style="height:300px;">
       <v-container fill-height>
          <v-layout align-center>
           <v-flex text-xs-left>
              <h3 class="display-2 font-weight-medium" style="color:#5C5C5C;">Company Participants</h3>
           </v-flex>
          </v-layout>
      </v-container>
      </v-jumbotron>

    <v-content style="margin-bottom:3%;">
      <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Registration successful!</span>
      <v-icon dark>check_circle</v-icon>
    </v-snackbar>

    <v-flex  xs12 sm12 md12 class="justify-center" style="margin-top:5%;">
      <!-- This is the company form -->
      <v-form ref="form" @submit.prevent="submit" lazy-validation>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm4 md3 style="margin-left: 0.8%;">
              <v-text-field
                v-model="form.surname"
                :rules="rules.surname"
                label="Surname"
                required
                id="surname"
                ></v-text-field>
          </v-flex>
           <v-flex xs12 sm4 md3 style="margin-left: 0.8%;">
              <v-text-field
                v-model="form.name"
                name="names"
                :rules="rules.names"
                label="Given Names*"
                 required
                id="givenNames"
                ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
           <v-flex xs12 sm8 md6 class="justify-center">
            <v-text-field
              v-model="form.dob"
              :rules="rules.dob"
              color="primary"
              hint="dd/mm/yyyy"
              required
              label="Date of Birth*">
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
           <v-flex xs12 sm4 md3 style="margin-left: 0.8%;">
            <v-text-field
              v-model="form.noc"
              :rules="rules.noc"
              color="primary"
              hint="'Company name'.ltd"
              label="Name of your company*"
               required>
            ></v-text-field>
           </v-flex>
            <v-flex xs12 sm4 md3 style="margin-left: 0.8%;">
            <v-text-field
              v-model="form.jobPosition"
              :rules="rules.jobPosition"
              color="primary"
              label="Job title*"
              required
              >
            ></v-text-field>
            </v-flex>
        </v-layout>

        <v-layout justify-center style="margin-top:3%;">
           <v-flex xs12 sm8 md6 class="justify-center">
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              color="primary"
              label="Your email*"
              type="email"
              required
              >
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
           <v-flex xs12 sm8 md6 class="justify-center">
            <v-text-field
              v-model="form.phone"
              :rules="rules.phone"
              color="primary"
              label="Telephone number*"
              required
              >
            ></v-text-field>
          </v-flex>
        </v-layout>

         <v-layout justify-center >
           <v-flex xs12 sm8 md6 class="justify-center">
             <v-card class="elevation-0 transparent">
               <v-card-title class="subheading card-main">
                  Upload your photo
               </v-card-title>
               <v-btn large color="#0074C1" style="border-radius:6px;" dark>Select from file</v-btn>
             </v-card>

            <v-card class="elevation-0 transparent">
               <v-card-title class="subheading card-main">
                  Upload your CV
               </v-card-title>
               <v-btn large color="#0074C1" style="border-radius:6px;" dark>Select from file</v-btn>
             </v-card>
          </v-flex>
        </v-layout>

        <v-layout justify-center style="margin-top:3%;">
           <v-flex xs12 sm8 md6 class="justify-center">
            <v-textarea
              v-model="form.list"
              color="primary"
              label="Names and email of your accountability partner (one should be your current employer)*"
              hint="John Doe/johndoe@example.com, Jane Doe/janedoe123@example.com,"
              >
            ></v-textarea>
          </v-flex>
        </v-layout>

        <v-layout justify-center style="margin-top:3%;">
           <v-flex xs12 sm8 md6 class="justify-center">
            <v-textarea
              v-model="form.description"
              color="primary"
              label="What are your expectations for Great Minds Challenge?"
              hint="John Doe/johndoe@example.com, Jane Doe/janedoe123@example.com,"
              >
            ></v-textarea>
          </v-flex>
        </v-layout>

        <v-layout justify-center style="margin-top:3%;">
           <v-flex xs12 sm8 md6 class="justify-center">
            <v-checkbox
              v-model="form.terms"
              color="green"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a href="javascript:;" @click.stop="terms = true">Terms</a>?
                </div>
              </template>
            </v-checkbox>
          </v-flex>
        </v-layout>

        <v-layout justify-center style="margin-top:3%;">
          <v-flex xs12 sm8 md6 class="justify-center">
            <v-card-actions>
               <v-btn flat @click="resetForm">Cancel</v-btn>
               <v-spacer></v-spacer>
                <v-btn :disabled="!formIsValid" flat color="primary" type="submit">Register</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-content>

  <!--These are the models for the application terms-->
<v-dialog v-model="terms" width="70%">
    <v-card>
      <v-card-title class="title"> Terms</v-card-title>
      <v-card-text>
        {{ termsContent }}
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="#0074C1"
            @click="terms = false"
          >Ok</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>

</v-content>
</template>

<script>

    export default{
      head () {
        return {
        title: "Wildcard application form • Great Minds Challenge Nairobi",
        }
      },
  data () {
      const defaultForm = Object.freeze({
        surname: '',
        names: '',
        company: '',
        dob: '',
        noc: '',
        jobPosition:'',
        email:'',
        phone: '',
        list: '',
        description:'',
        terms: false,
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          surname: [val => (val || '').length > 0 || 'This field is required'],
          names: [val => (val || '').length > 0 || 'This field is required'],
          dob: [val => (val || '').length > 0 || 'This field is required'],
          noc: [val => (val || '').length > 0 || 'This field is required'],
          jobPosition: [val => (val || '').length > 0 || 'This field is required'],
        },
        termsContent: `Esteemed Great Mind, by submitting this application form, you unconditionally and without any reservation agree to abide by all Great Minds Challenge TCs, as stated on the application form. You faithfully declare that all the information provided above is true to the best of your knowledge. You agree not to hold us liable for any accidents or incidents when travelling to and from Naivasha, during meet and greet and during your stay on the 3 exclusive days. You agree to fully take responsibility of your actions and indemnify Great Minds Challenge from any accidents or incidents. You declare to freely attend in good faith and be committed during the 2 months engagement with GMC. We commit to endeavour to offer you a world class experience observing international best practice standards.
        `,
        terms:false,
        snackbar: false,
        defaultForm
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.surname &&
          this.form.names   &&
          this.form.dob     &&
          this.form.noc     &&
          this.form.email   &&
          this.form.phone   &&
          this.form.list
        )
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>
