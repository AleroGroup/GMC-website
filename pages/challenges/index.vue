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
            <img /> <div class="display-2 font-weight-bold" color="primary">CHALLENGES</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

  <v-content>
  <v-layout row style="margin-top:9%;">
         <!-------------------------->
          <v-flex xs10 md8 fluid>
            <v-card flat  class="display-1 text-uppercase font-weight-bold" color="transparent" style="margin-left:14%;">
              <v-card-title style="color:#5C5C5C;">Why Great Minds Challenge?</v-card-title>
            </v-card>
            <v-card flat color="transparent">
              <v-card-text style="margin-left:14%; color:#707070;">
               <div class="font-weight-regular title text-xs-justify">
                 The essence and urgency to empower a New Generation of Leaders of Africa with innovative, future-proof ideas is at an all-time high.  We need to promote sustainable, circular economies and skills development among the young population.<br /> <br />

                 Although endowed with vast opportunities, a lot of Africa’s inhabitants still live in deplorable conditions where most basic human needs remain inaccessible. The continent stands at a decisive moment in time where it must decide which direction her future takes.<br /><br />

                 There is urgency to empower and inspire young talents within the business environment, who will become today’s New Generation Leaders and the igniters of a new era, bringing breakthrough for sustainable and purpose-driven businesses with their new mindsets. This is what we will co-create together at the Great Minds Challenge.
               </div>
            </v-card-text>
            </v-card>
          </v-flex>
          <!-------------------------->
        </v-layout>
  </v-content>

    <v-layout column justify-center align-center style="margin-top:6%">
      <v-flex xs12>
       <v-card flat color="transparent">
        <div class="display-1 font-weight-medium"> Annual challenges</div>
      </v-card>
    </v-flex>

      <v-layout row justify-center >
          <v-hover v-slot:default="{ hover }" v-for="(item,index) in items" :key="index">
            <nuxt-link :to="item.to" class="link ma-4" >
                <v-card
                flat
                color="transparent"
               width="300px"
               :elevation="hover ? 5 : 0"
               style="margin-top:2%; margin-right:2%;border-radius:20px;"
             >
             <v-layout column justify-center align-center>
               <img :src="item.url" height="300px"/>
               <v-card-title primary-title>
                  <div class="headline mb-3 blue--text text--darken-4 font-weight-medium">
                    {{ item.title }}
                  </div>
                </v-card-title>
              </v-layout>
          </v-card>
      </nuxt-link>
    </v-hover>
  </v-layout>
</v-layout>
      <v-layout column justify-center align-center style="margin-top:4%">
      <v-flex xs12>
       <v-card flat color="transparent">
        <div class="display-1 font-weight-medium"> In-house </div>
      </v-card>
    </v-flex>

       <v-layout row justify-center >
          <v-hover v-slot:default="{ hover }" v-for="(list,index) in lists" :key="index">
            <nuxt-link :to="list.to" class="link ma-4" >
                <v-card
               width="300px"
               :elevation="hover ? 12 : 2"
               style="margin-top:2%; margin-right:2%;"
             >
             <v-layout column justify-center align-center>
               <img :src="list.url" height="300px"/>
               <v-card-title primary-title>
                  <div class="headline mb-3 blue--text text--darken-4 font-weight-medium">
                    {{ list.title }}
                  </div>
                </v-card-title>
              </v-layout>
          </v-card>
      </nuxt-link>
    </v-hover>
  </v-layout>
    </v-layout>
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
      mainurl: 'https://ik.imagekit.io/qpt2onjfe/gmc/gmc_site/main/images/Group_128_Dhtsk2463.png',
        items: [
          {
            itemId:'Induction',
            url:'https://ik.imagekit.io/qpt2onjfe/GKS_1324__1__YICteF9aA.png',
            title: 'Induction',
             to: '/error/'
          },
          {
            itemId:'3-Day-Challenge',
            url:'https://ik.imagekit.io/qpt2onjfe/Group_144_59OAo0ANfP.png',
            title: '3-Day-Challenge',
            to: '/error/'
          },
          {
            itemId:'End',
            url:'https://ik.imagekit.io/qpt2onjfe/Group_145_FKY43YtSxD.png',
            title: 'End',
            to: '/error'
          },

        ],

        lists: [
          {
            listId:'Induction',
            url:'https://ik.imagekit.io/qpt2onjfe/GKS_1324__1__YICteF9aA.png',
            title: 'Induction',
             to: '/error'
          },
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
.rounded-card{
   border-radius:12px;
}
.link {
  text-decoration: none;
}
</style>
