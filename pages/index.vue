<template>
<v-content>
    <v-layout xs12 md4>
       <v-flex fluid>
  <v-toolbar height="95">
        <v-toolbar-title >
          <img src="../assets/imgs/logo.png" alt="GMClogo" height="95" style="margin-left:8%;">
        </v-toolbar-title>
        <v-spacer />

    </v-toolbar>
  </v-flex>
    </v-layout>
    <v-layout justify-center align-center style="margin-top:25%;">
       <v-progress-circular
            :rotate="360"
            :size="60"
            :width="8"
            :value="value"
            color="blue">

            </v-progress-circular>
    </v-layout>
</v-content>
</template>
 <style scoped>
    .alignment{
        text-align:center;
        font-weight: 500;
        font-size: 30px;
        margin-top: 20%;
        color: red;
    }

</style>
<script>

export default {
    name: 'SplashScreen',
    data (){
        return{
            interval: {},
            value: 0
        }
    },
    beforeDestory() {
        clearInterval(this.interval)
    },

    mounted () {
        this.interval = setInterval(() => {
            if(this.value === 100){
                return  this.$router.push('/home')

            }
            this.value += 10
        }, 340)
    }
}
</script>

