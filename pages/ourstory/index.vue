<template>
<v-content>
  <Header />
  <v-img
      :src="mainurl"
      style="height:300px;"
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-left>
            <img /> <div class="display-2 font-weight-bold" color="primary">OUR STORY</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  <v-content >

  <v-layout row style="margin-top:10%;"  >
         <!-------------------------->
          <v-flex xs10 sm11 md7 fluid>
            <v-card flat class="display-1 text-uppercase font-weight-bold" color="transparent" style="margin-left:10%;">
              <v-card-title style="color:#5C5C5C;">Why Great Minds Challenge?</v-card-title>
            </v-card>
            <v-card flat color="transparent">
              <v-card-title  class="headline font-weight-medium" style="color:#0074C1; margin-left:10%;" primary-title>
                Did you know?
              </v-card-title>
              <v-card-text style="margin-left:10%; color:#707070;" class="font-weight-thin headline text-justify">
               <div >  1.  Africa has the fastest-growing and most youthful population in the world, according to AfDB (African Development Bank) <br /> <br />
               2 .  Over 40% are under the age of 15, 20% are between the ages of 15 and 24.<br /><br />
               3.  80% of global CEOs are worried about availability and mastery of key skills amongst their workforce, according to PWC’s CEOs Survey 2018.
               </div>
            </v-card-text>
            </v-card>
            <v-card flat color="transparent">
              <v-card-title  class="headline font-weight-medium" style="color:#0074C1; margin-left:10%;" primary-title>
               These numbers are a Challenge and a Great Opportunity
              </v-card-title>
              <v-card-text style="margin-left:10%; color:#707070;">
               <div class=" font-weight-thin text-xs-justify title">
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

      <v-layout justify-center align-center hidden-sm-and-down>
        <v-flex xs12 md7>
          <nuxt-link to="/register" >
            <v-img :src="signup">
                <v-container fill-height>
                  <v-layout align-center>
                      <img />
                  </v-layout>
                </v-container>
            </v-img>
          </nuxt-link>
        </v-flex>
      </v-layout>

        <v-layout row style="margin-top:7%;">
        <v-flex xs10 sm11 md9 fluid>
          <v-card flat color="transparent">
              <v-card-title  class="headline font-weight-medium" style="color:#0074C1; margin-left:10%;" primary-title>
               WHAT IS THE GREAT MINDS CHALLENGE?
              </v-card-title>
              <v-card-text style="margin-left:10%; color:#707070;">
               <div class=" font-weight-thin text-xs-justify title">
                 The Great Minds Challenge is a two-months top performance, process acceleration elite program, which will culminate with a three-day high-powered challenge. The program will bring most innovative global thinkers, thought leaders, scholars, entrepreneurs and change-makers under one platform, in order to facilitate the transformation and formation of the future for work of New Generation Leaders. The goal of these leaders will be to focus on sustainable and innovative future-proof solutions for the companies or organizations they are already working for. <br/><br/>

                 We believe that nurturing young talents with integrity, new creative mindsets, values and character is key to attaining strategy, vision and mission of organizations and nations at large. We also believe that investing in young talents through world-class training in performance process, sustainability and break-through innovation is in line with any future-proof organization’s purpose to be driven by People, Planet and Prosperity.
               </div>
            </v-card-text>
            </v-card>
            </v-flex>
        </v-layout>
    </v-content>

    <v-content style="margin-top:4%;">
      <div class='Board of Inspiration'>
           <div class="headline font-weight-medium" style="color:#0074C1; margin-left:8%;" >
            BOARD OF INSPIRATION
            </div>
       <v-flex xs12>
         <v-layout row justify-center>
             <v-hover v-slot:default="{ hover }"
             v-for="board in boards"
            :key="board.id">
               <v-card
               :elevation="hover ? 6 : 0"
               flat
               style="margin-top:2%; margin-right:2%; border-radius:10px;"
               width="200"
               color="transparent"
               >
              <v-card-media :src="board.url" width="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                   <h3 class="headline mb-0">{{ board.name }}</h3>
                  <div style="margin-top:10%;">{{ board.description }}</div>
                </div>
              </v-card-title>
          </v-card>
      </v-hover>
    </v-layout>
  </v-flex>
</div>
    </v-content>

  <v-content style="margin-top:10%;">
    <v-img src="https://images.ctfassets.net/pinw8ucllktt/1S3UFfLMiRj6wrWKLziOXx/31fefbfedd6eb78dac9290e92fa0fc64/footer.svg">

    <v-layout column wrap justify-center style="margin-top:5%;">
     <v-flex xs9 md2 text-xs-center text-lg-center>
            <v-card flat color="transparent">
               <v-card-text class="headline text-uppercase" color="transparent"  style="color:#5C5C5C;">
                 <div class="notoFont">VISION</div>
               </v-card-text>
              <v-card-text style="color:#707070;">
               <div class="font-weight-thin headline text-justify">
                 Become the Epicenter of Inspiration, Impact-challenge and Transformative Innovation
               </div>
            </v-card-text>
            </v-card>
<!-- Embedding the images -->
            <v-card flat color="transparent" style="margin-top:2%;margin-bottom:2%;">
              <v-layout column justify-center align-center>
               <v-card-text class="headline text-uppercase" color="transparent"  style="color:#5C5C5C;">
                 <div class="notoFont">MISSION</div>
               </v-card-text>
              <v-card-text style="color:#707070;">
                <v-flex>
               <div class=" font-weight-thin title">
                Nurture a New Generation of Leaders with new Mind sets, who will be agents of transformation <br/> in businesses and society through innovation, sustainability and future proof breakthroughs <br/> for People, planet and Prosperity
               </div>
               </v-flex>
            </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
    </v-layout>
    </v-img>
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
      title: 'Our story • Great Minds Challenge Nairobi'
    }
  },
  data() {
    return {
      mainurl: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/Group_137_gHAHRMU1J.png',
      signup:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/logos/Group_153_vXSJwlkWf.svg',
      boards:[
        {
          url:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/Screenshot-2018-08-13-at-16.34.12-1_cgXxhtudK5.png',
          name:'Dr. Vimal Shah',
          description:'Co-Founder BIDCO Group    Chairman of Board'
        },
        {
          url:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/Screenshot-2018-08-13-at-16.34.27-1_k59ZhPkLJM.png',
          name:'Jane Ngige',
          description:'CEO Kenya Horticultural Exporters'
        },
        {
          url:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/Screenshot-2018-08-13-at-16.34.37-1_BhzsOGl302.png',
          name:'Wahu Kagwi',
          description:'Manager KEPSA Foundation'
        },
        {
          url:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/WhatsApp-Image-2019-05-03-at-13.03.46_vFYJoHVqzK.jpeg',
          name:'Amb. Prof Ruthie Rono',
          description:'Deputy VC USIU-A'
        },
        {
          url:'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/WhatsApp-Image-2019-05-03-at-12.44.07_H6vH-W3Qb.jpeg',
          name:'Eddine Sarroukh',
          description:'Senior Advisor Innovation & Technology at United Nations'
        }
      ]
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
</style>
