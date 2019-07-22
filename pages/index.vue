<template>
<v-content>
    <v-layout xs12 md4>
       <v-flex fluid>

    <v-layout column justify-center align-center style="margin-top:10%;">
       <img src="../assets/imgs/logo.png" alt="GMClogo" height="150" style="margin-left:2%; margin-bottom:9%;">
       <div primary-title class="headline font-italic font-weight-medium green--text">
         "The Future is now"
       </div>
    </v-layout>
     <v-layout column justify-center align-center style="margin-top:10%;">
        <v-progress-circular
            :rotate="360"
            :size="60"
            :width="8"
            :value="value"
            color="blue"
          ></v-progress-circular>

    </v-layout>
  </v-flex>
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
        }, 200)
    }
}
</script>

