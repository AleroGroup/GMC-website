<template>
<div>
 <HeaderMain />
  <v-content align-center justify-center align-content-center>
    <v-flex fluid>
      <v-img src="https://images.ctfassets.net/pinw8ucllktt/6JLfvNfnn5ti7JMkddjN5e/dff65f5e80197e06f4eda3922974443d/37954915406_b4b672f478_h.png">
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
        <nuxt-link to="/register" style="text-decoration:none;"> <v-btn  large round color="blue" dark> Apply now</v-btn> </nuxt-link>
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

        <v-layout row style="margin-top:8%;" text-xs-left text-lg-left>
         <!-------------------------->
          <v-flex xs12 md4 >
            <v-card-text style="margin-left:6%;">
               <div class="headline font-weight-medium" style="color:#202565;"> Great Minds Challenge is a two months program, with an exclusive 3 days of impactful challenge. The challenge is focused on growing a New Generation of Leaders with New Mindset.</div>
              <nuxt-link to="/register" style="text-decoration:none;"><v-btn outline  color="#202565" class="" style="margin-top:4%;">Get Started</v-btn></nuxt-link>
            </v-card-text>
          </v-flex>
          <!-------------------------->
        </v-layout>
    <!------------------------------------------>
      </v-img>
    </v-layout>

  <v-flex xs9 md4 lg8
   justify-center hidden-xs-only style="margin-top:5%;">
  <v-card-title class="layout justify-center display-1 font-weight-bold">
    Partners
  </v-card-title>
  <v-layout>


  </v-layout>
  </v-flex>
  
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
            src: 'https://images.ctfassets.net/pinw8ucllktt/6aOZfH87XoB0reAQeXcidm/6af343393edfee508fe9eceaec72af51/Vimal.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/6qweuhyFBbd73HD2KgkSPE/a7fe8970142b03643cb03c813db868e7/Arthue.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/1HOMv8MHfD6VcR1lZqrm8g/4dbb9492d7498b6f542b80cbac6a1b4b/Susan.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/1s0xrmSopI8DpmDwCv9K9P/6c8e4eea52d9b15ca635612e94f33609/Irene_Fwaya.svg'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/40nEHEzpCyuaPhFGYUUXXe/d75883771aea318496537b5aa4bc5f78/Hibert_Omondi.png'
          },
          {
            src: 'https://images.ctfassets.net/pinw8ucllktt/36CrM3LQPVoOAJXxHRMPzc/bfb5c35f7ee7b7f231be82424c997f10/Decimar_Ogutu.svg'
          }
        ],
        logos: [
          {
              src: 'https://images.ctfassets.net/pinw8ucllktt/703ruGDou0XRzTqDV3j57o/848968f8b2f433150e901782d623e490/one.png'
          },
          {
              src: 'https://images.ctfassets.net/pinw8ucllktt/6ryffD1y7TjiBgDoOyFWOZ/9ec3f7f9ed5634c5a3ac4e5d9396b465/two.png'
          }
        ]
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


</style>

