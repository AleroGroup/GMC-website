<template>
    <v-content v-if="loading" class="loading-page">
        <v-layout column justify-center align-center style="margin-top:10%;" color="white">
          <img
            src="../assets/imgs/logo.png"
            alt="GMClogo"
            height="150"
            style="margin-left:2%; margin-bottom:9%;"
          />
          <div
            primary-title
            class="headline font-italic font-weight-medium green--text"
          >
            "The Future is now"
          </div>
        </v-layout>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
