<template>
<div>
 <HeaderMain />
  <v-content align-center justify-center align-content-center>
    <v-flex fluid>
      <v-img src="https://images.ctfassets.net/pinw8ucllktt/6JLfvNfnn5ti7JMkddjN5e/dff65f5e80197e06f4eda3922974443d/37954915406_b4b672f478_h.png">
       <v-card-title class="justify-center align-content-center align-center " style="color:white;" >
       <h1 class="display-4 font-weight-bold text-uppercase fill-height" style="margin-top:38%;">The future is Now </h1>
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
      :src="item.src"
      flat
    ></v-carousel-item>
  </v-carousel>
  </v-layout>


    <v-layout row wrap align-center style="background:#F5F5F5;">
       <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <div class="display-3 card-main font-weight-medium">45</div>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline card-main text-xs-center font-weight-medium">Number of Participants</div>
            </v-card-title>
          </v-card>
        </v-flex>
          <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <div class="display-3 card-main font-weight-medium">15</div>
              </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline card-main font-weight-medium">Participating companies</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <div class="display-3 card-main font-weight-medium">10</div>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline card-main text-xs-center font-weight-medium">Social Impact Wildcard</div>
            </v-card-title>
         </v-card>
        </v-flex>
      <v-layout justify-center align-content-center align-center style="background:#F5F5F5; margin-top:0.01%;height:120px;">
       <v-flex xs12 sm2 md1>
         <v-btn to="/register" large round color="blue" dark> Apply now</v-btn>
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
        <v-flex xs6 sm3 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-img src="https://images.ctfassets.net/pinw8ucllktt/4NicMIQXrv2trhdO2X29av/5f657605f5bc82ed1246bdae4047552d/icons8-brainstorm-100.png" width="96"  style="margin-left:35%;"></v-img>
              </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="title font-italic font-weight-thin card-main">Personal development, systems thinking and coaching.</div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6 sm3 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-img src="https://images.ctfassets.net/pinw8ucllktt/47Dv5JfBUZtKqEwpMsxs8B/bb3a407c0d8643e45d0e3ba490578856/icons8-creativity-100.png" width="96"  style="margin-left:35%;"></v-img>
              </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="title font-italic font-weight-thin card-main">Experience creativity techniques and how to continuously innovate.</div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6 sm3 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-img src="https://images.ctfassets.net/pinw8ucllktt/2CXqs6WS3SInmqAs8MmCMW/387500fcd206490db0f18496a10551d4/icons8-experience-skill-100.png" width="96"  style="margin-left:35%;"></v-img>
              </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="title font-italic font-weight-thin card-main">Gain cutting edge knowledge from inspirational and influential thought leaders. </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs6 sm3 md3 lg2 text-sm-center text-xs-center text-lg-center>
          <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-img src="https://images.ctfassets.net/pinw8ucllktt/27whGuvq498j650cGH8kUd/459e4d7fe45f08076b54dc31dc5774ab/icons8-customer-insights-manager-100__1_.png" width="96"  style="margin-left:35%;"></v-img>
              </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="title font-italic font-weight-thin card-main">Network, co-create and acquire new mind sets with new generation leaders.</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

    </v-layout justify-center>
        <v-img src="https://images.ctfassets.net/pinw8ucllktt/28RVgHDvBY0EzVin4FyINn/8783dfc9b36abe3e66a84b4e800ee4f2/swash.svg" style="margin-top:2%;">

        <v-layout row style="margin-top:8%;">
         <!-------------------------->
          <v-flex xs6 sm6 >
            <v-card-text style="width:480px; margin-left:6%;">
               <div class="headline font-weight-medium" style="color:#202565;"> Great Minds Challenge is a two months program, with an exclusive 3 days of impactful challenge. The challenge is focused on growing a New Generation of Leaders with New Mindset.</div>
             <v-btn to="/register" outline  color="#202565" class="" style="margin-top:4%;">Get Started</v-btn>
            </v-card-text>
          </v-flex>
          <v-flex xs12 sm10 hidden-md-and-down>
            <v-card flat color="transparent" >
              <v-card-media
                contain
                height="350"
                src="https://images.ctfassets.net/pinw8ucllktt/4413O2WCLFr6ta7jvJrqvt/cef678e65e78c61798b2eb58d1936173/Group_126.png"
            />
            </v-card>
          </v-flex>
          <!-------------------------->
        </v-layout>
    <!------------------------------------------>
      </v-img>
    </v-layout>
  </v-layout>
  </v-content>

  <Footer />
</div>
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
        items: [
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/5lFs14MKwYsVf6fNDIH92a/22a50fe88a416b99ca6f8cc7acb7429a/Vimal.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/5pHNT8ufND8Gjjs82OZl0V/2fb352aec2be969b89829c3750f28c72/Arthue.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/1nVqVTmhBJNLUMumjOVXK0/26ac1a9a17ebe83e84d0697ec9949691/Susan.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/5wgUPTN4elswkuoyQq0FmT/09ee90a2346f60be0a1899de599efe13/Decimar_Ogutu.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/2sDZSJslWJj0OMBGpKi7ki/77325ba523d2bbf34325d65f6f346b83/Irene_Fwaya.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/6Vo2BpTyPCvdooHfEmlGqU/d0e73e42be6c9b9a10ca2e470dea5914/Hibert_Omondi.svg'
          }
        ]
      }
    }

}
</script>

<style>
.card-main{
  color: #5C5C5C;
}


</style>

