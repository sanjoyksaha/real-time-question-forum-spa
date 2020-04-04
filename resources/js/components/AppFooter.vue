<template>
  <v-footer color="indigo" dark class="footer">
      QuestionForumApp
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  <!-- <v-footer height="auto" color="indigo" dark>
        <v-layout justify-center row wrap>
          <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
            &copy;2018 — <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-footer> -->
</template>

<script>
    export default {
    }
</script>
<style scoped>
  .footer{
    position: static;
    left: 0px;
    right: 0px;
    bottom:0px;
  }
</style>