<template>
<v-content>
  <Header />
  <v-img
      :src="url"
      style="height:300px;"
    >
   <nuxt-link to='/challenges' class="link">
      <v-btn flat >Back</v-btn>
   </nuxt-link>
      <v-container>
        <v-layout align-center>
          <v-flex text-xs-left>
            <img />
            <div class="display-2 font-weight-bold text-uppercase" color="primary">end</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-content>
     <!--  images go here -->
    </v-content>
  <Footer />
</v-content>
</template>

<script>
import Header from '@/components/header_one'
import Footer from '@/components/Footer'

export default {
  name: 'end',
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
       url:' https://images.ctfassets.net/pinw8ucllktt/6DYgh9tfinHHrEWDzYcPDj/4749be8f78dbee4d17dd8e0f9d1792d1/GMC-two.png'
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
