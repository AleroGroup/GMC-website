<template>
<v-content class="body">
 <HeaderMain />
  <v-content align-center justify-center>
    <v-flex fluid>
      <v-img :src="mainurl">
       <v-card-title class="justify-center align-content-center align-center " style="color:white;" >
       <h1 class="display-4 font-weight-bold text-uppercase fill-height" style="margin-top:38%">The future is Now </h1>
       </v-card-title>
       <v-icon dark color="red">arrow-down</v-icon>
       </v-img>
    </v-flex>

<v-flex xs12 sm12 md12 justify-center align-center hidden-xs-only>
  <v-layout style="background-color:#F5F5F5;">
  <v-carousel hide-delimiters hide-controls flat class="elevation-0" style="margin-top:5%;">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      flat
    >
    <v-layout justify-center>
      <v-flex xs12 md10>
        <v-img :src="item.src"></v-img>
      </v-flex>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
  </v-layout>

  <v-layout row wrap align-center style="background:#F5F5F5;">
       <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-layout column align-center>
            <v-card-text class="text-xs-center">
              <div class="display-3 card-main font-weight-medium">45</div>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline card-main text-xs-center font-weight-medium">Number of Participants</div>
            </v-card-title>
            <v-divider color="green" width="180"></v-divider>
            </v-layout>
          </v-card>
        </v-flex>
          <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-layout column align-center>
              <v-card-text class="text-xs-center">
                <div class="display-3 card-main font-weight-medium">15</div>
              </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline card-main font-weight-medium">Participating companies</div>
            </v-card-title>
              <v-divider color="green" width="180"></v-divider>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-layout column align-center>
            <v-card-text class="text-xs-center">
              <div class="display-3 card-main font-weight-medium">10</div>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline card-main text-xs-center font-weight-medium">Social Impact Wildcard</div>
            </v-card-title>
            <v-divider color="green" width="180"></v-divider>
            </v-layout>
         </v-card>
        </v-flex>
      <v-layout justify-center align-center style="background:#F5F5F5; margin-top:0.01%;height:120px;">
       <v-flex xs12 sm2 md1>
        <nuxt-link to="/register" style="text-decoration:none;">
        <v-btn large
        round
        color="blue"
        class="font-weight-bold"
        dark>
        Apply now
        </v-btn>
        </nuxt-link>
       </v-flex>
     </v-layout>
    </v-layout>
</v-flex>

  <v-layout column wrap justify-center align-content-center align-center style="margin-top:4%;">
    <v-flex xs12 sm11 md3 lg6 style="width:900px;">
      <v-card-title primary-title class="layout justify-center">
        <div class="headline card-main text-xs-center font-weight-bold">Inspiring a transformative new generation of leaders who co-create to achieve sustainable, inclusive and future-proof businesses</div>
      </v-card-title>
    </v-flex>

      <v-layout row wrap justify-center align-center align-content-center style="margin-top:4%;">
        <v-flex xs10 sm7 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
            <v-layout column justify-center align-center>
            <v-img :src="src1" width="120"></v-img>
            <v-card-title primary-title class="layout justify-center">
              <div class="title font-italic font-weight-thin card-main">Personal development, systems thinking and coaching.</div>
            </v-card-title>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs10 sm7 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
            <v-layout column justify-center align-center>
              <v-img :src="src2" width="120"></v-img>
                <v-card-title primary-title class="layout justify-center">
                <div class="title font-italic font-weight-thin card-main">Experience creativity techniques and how to continuously innovate.</div>
              </v-card-title>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs10 sm7 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
              <v-layout column justify-center align-center>
                 <v-img :src="src3" width="120"></v-img>
                  <v-card-title primary-title class="layout justify-center">
                  <div class="title font-italic font-weight-thin card-main">Gain knowledge from inspirational &influential leaders. </div>
            </v-card-title>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs10 sm7 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
            <v-layout column justify-center align-center>
                <v-img :src="src4" width="120"></v-img>
                <v-card-title primary-title class="layout justify-center">
                <div class="title font-italic font-weight-thin card-main">Network, co-create and acquire new mind sets with new generation leaders.</div>
            </v-card-title>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

    </v-layout>
      <v-img :src="greenwave" style="margin-top:2%;margin-bottom:5%;">

        <v-layout row style="margin-top:5%;" text-xs-left text-lg-left align-center>
         <!-------------------------->
          <v-flex xs11 md8 >
            <v-card-text style="margin-left:6%;">
               <div class="headline font-weight-medium" style="color:#202565;"> Great Minds Challenge is a two months program, with an exclusive 3 days of impactful challenge. The challenge is focused on growing a New Generation of Leaders with New Mindset.</div>
              <nuxt-link to="/register" style="text-decoration:none;"><v-btn outline large color="#202565" class="" style="margin-top:4%;">Get Started</v-btn></nuxt-link>
            </v-card-text>
          </v-flex>
          <!-------------------------->
         <!-------------------------->
          <v-flex xs11 md8 hidden-sm-and-down>
            <v-card-media
            src="https://images.ctfassets.net/pinw8ucllktt/6JHwk2ypecZrTwPbnhdYYd/123edbff5d6556871f3b90a62ea7cfb1/img.png"
            style="margin-left:6%;margin-bottom:7%;">
            </v-card-media>
          </v-flex>
          <!-------------------------->
        </v-layout>

    <!------------------------------------------>
      </v-img>


  <v-layout column justify-center align-center hidden-sm-and-down style="margin-top:7%;">
   <v-layout column align-center ma-3>
     <div class="layout justify-center display-1 font-weight-bold"
     >

         <span>
          Partners
         </span>
     </div>

    <v-carousel
    hide-delimiters
    hide-controls flat class="elevation-0 justify-center"
    height="260">
        <v-carousel-item>
          <img :src="logos1"/>
        </v-carousel-item>
         <v-carousel-item>
          <img :src="logos2" />
         </v-carousel-item>
       </v-carousel>
       </v-layout>
       </v-layout>
  </v-content>
<Footer />
</v-content>
</template>

<script>
import Footer from '../components/Footer.vue'
import HeaderMain from "../components/header_one.vue"

export default {
  components: {
    HeaderMain,
    Footer
  },
  head () {
    return {
      title: 'Home • Great Minds Challenge Nairobi'
    }
  },
   data () {
      return {
        mainurl: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/37954915406_b4b672f478_h_uRQHlkktZ.png',

        greenwave: 'https://images.ctfassets.net/pinw8ucllktt/28RVgHDvBY0EzVin4FyINn/8783dfc9b36abe3e66a84b4e800ee4f2/swash.svg',
        
        items: [
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_178_rDslrDayd.svg'
          },
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_177_rWj3ob6sx.svg'

          },
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_179_r9ITp_PVv.svg'
          },
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_181_01fRmn9-96.svg'
          },
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_180_uREPpdmRX.svg'
          },
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_182_Fk012NwHs.svg'
          },
          {
            src: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/t2/Group_183_gRxYuPyaD.svg'
          },

        ],
       //icons
         src1:"https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/icons/icon_pd_7Invefz8x5.svg",
          src2:"https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/icons/icon_mind_fN5byLkByb.svg",
          src3:"https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/icons/icon_knowledge_3Coeb6eaa2.svg",
          src4:"https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/icons/icon_group_KmChfgSbM.svg",

        //  logos
        logos1:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/Group_142_boLLYnMr8.svg',
        logos2:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/Group_140_1PjnffdQI.svg'
      }

      let to = '/home'    // this is dynamic in my code...
        if (this.$router.currentRoute.path === to) {
          this.$refs.page.$forceUpdate()
        } else {
       this.$router.push(to)
    }
  }

    }

</script>

<style>
.card-main{
  color: #5C5C5C;
}
.body{
  bottom: 0;
  top: 0;
}
</style>

