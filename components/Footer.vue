<template>
  <v-footer height="auto" dark>
    <v-card class="flex" flat tile>
      <v-card-title style="background-color:#343434;">
        &copy;2018 &nbsp;<strong class="subheading">GMC, Nairobi.&nbsp;</strong
        >All rights reserved

        <v-spacer></v-spacer>
          <v-layout row justify-end>
          <div
          v-for="social in socials"
          :key="social.id"
           >
          <v-btn :href="social.url"  dark icon>
            <img :src="social.logo"  width="20" />
          </v-btn>
        </div>
        </v-layout>
      </v-card-title>
      <v-card-actions class="grey darken-4 justify-end">
        Powered by
        <strong>
          <a href="https://www.alero.co.ke" class="white--text link"
            >&nbsp;Alero Group</a
          >
        </strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>

  export default{
    data () {
      return {
        socials: [
          {
              logo: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/icons8-facebook-old-96_0TtSVJzeNQ.svg',
              url: 'https://www.facebook.com/GMCNairobi/?ref=br_rs'
          },
          {
              logo: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/icons8-instagram-96_9CuP6LjO71.svg',
              url: 'https://www.instagram.com/greatmindschallenge/'
          },
          {
              logo: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/icons8-twitter-96_NhPrIDzjMz.svg',
              url: 'https://twitter.com/GMCNairobi'
          },
          {
              logo: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/linkedin_OuMk8ysvZ.svg',
              url: 'https://www.linkedin.com/school/greatmindsnairobi/'
          },
        ]
      }
    }
  }
</script>
