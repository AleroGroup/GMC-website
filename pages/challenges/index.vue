<template>
<v-content>
  <Header />
  <v-img
      src="https://images.ctfassets.net/pinw8ucllktt/6DYgh9tfinHHrEWDzYcPDj/4749be8f78dbee4d17dd8e0f9d1792d1/GMC-two.png"
      style="height:300px;"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-left>
            <img /> <div class="display-2 font-weight-bold" color="primary">CHALLENGES</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  <v-content >

  <v-layout row style="margin-top:9%;">
         <!-------------------------->
          <v-flex xs10 md8 fluid>
            <v-card flat  class="display-1 text-uppercase font-weight-bold" color="transparent" style="margin-left:14%;">
              <v-card-title style="color:#5C5C5C;">Why Great Minds Challenge?</v-card-title>
            </v-card>
            <v-card flat color="transparent">
              <v-card-text style="margin-left:14%; color:#707070;">
               <div class="font-weight-regular headline">
                 The essence and urgency to empower a New Generation of Leaders of Africa with innovative, future-proof ideas is at an all-time high.  We need to promote sustainable, circular economies and skills development among the young population.<br /> <br />

                 Although endowed with vast opportunities, a lot of Africa’s inhabitants still live in deplorable conditions where most basic human needs remain inaccessible. The continent stands at a decisive moment in time where it must decide which direction her future takes.<br /><br />

                 There is urgency to empower and inspire young talents within the business environment, who will become today’s New Generation Leaders and the igniters of a new era, bringing breakthrough for sustainable and purpose-driven businesses with their new mindsets. This is what we will co-create together at the Great Minds Challenge.
               </div>
            </v-card-text>
            </v-card>
       <!--      <nuxt-link to="/register" style="text-decoration:none;"><v-btn outline  color="#202565" class="" style="margin-top:4%;">Get Started</v-btn></nuxt-link> -->
          </v-flex>
          <!-------------------------->
        </v-layout>
  </v-content>

  <v-content style="margin-top:10%; margin-bottom:10%">
      <v-layout row justify-center align-center>
      <v-flex xs12 md2 hidden-sm-and-down style="margin-left:6%;">
         <v-avatar
          size="200"
          color="blue lighten-1"
          class="elevation-1 display-2 white--text font-weight-black"

          >
           2018
        </v-avatar>
      </v-flex>
      <v-layout row justify-center hidden-sm-and-down>
      <v-flex xs10 sm4 md5>
        <v-card raised width="250" class="rounded-card elevation-1">
         <v-img
         height="auto"
         src="https://images.ctfassets.net/pinw8ucllktt/XMOrHElVxks7xYDnorFe3/3e654af1170e3ca9d9d365fc59ac529c/GKS_1324__1_.png"
        /><v-img>
         <nuxt-link to="/error" style="text-decoration:none;"> <v-btn block flat class="title" color="blue darken-2">
          Induction
        </v-btn> </nuxt-link>
      </v-img>
     </v-card>
   </v-flex>

   <v-flex xs10 sm4 md5>
        <v-card raised width="250" class="rounded-card elevation-1">
         <v-img
         height="auto"
         src="https://images.ctfassets.net/pinw8ucllktt/1PrbqfOLUUcUlRkiTPOQL1/edf0f9ee5a9985300ec63147b68e1fb3/Group_144.png"
        />

      <v-img>
         <nuxt-link to="/error" style="text-decoration:none;"> <v-btn block flat class="title" color="blue darken-2">
          3Day Challenge
        </v-btn> </nuxt-link>
      </v-img>
    </v-card>
   </v-flex>

   <v-flex xs10>
        <v-card raised width="250" class="rounded-card elevation-1">
         <v-img
         height="auto"
         src="https://images.ctfassets.net/pinw8ucllktt/4BcC4ICxlILxfDrZUVwJbH/87947bcf866acd390355c12c9f9f3665/Group_145.png"
        />

      <v-img>
         <nuxt-link to="/error" style="text-decoration:none;"> <v-btn block flat class="title" color="blue darken-2">
          Commencement
        </v-btn> </nuxt-link>
      </v-img>
    </v-card>
   </v-flex>
  </v-layout>
    </v-layout>
  </v-content>
  <Footer />
</v-content>
</template>

<script>
import Header from '@/components/header_one'
import Footer from '@/components/Footer'

export default {

  components: {
    Header,
    Footer
  },
   head () {
    return {
      title: 'Challenges • Great Minds Challenge Nairobi'
    }
  },
  data() {

    return {

    }
    let to = '/home' // this is dynamic in my code...
    if (this.$router.currentRoute.path === to) {
      this.$refs.page.$forceUpdate()
    } else {
      this.$router.push(to)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap');
.notoFont {
 font-family: 'Noto Sans', sans-serif;
 font-weight: 700;
}
.rounded-card{
   border-radius:12px;
}
</style>
