<template lang="pug">
  div#app
    //- router-view
    Navigation
    div(v-if='processing')
      BlockUI(:message="$t('messages.processing')")
</template>

<script>
  import globalTypes from './types/global';
  import { mapGetters } from 'vuex';
  import Navigation from './components/Navigation/Navigation.vue';

  export default {
    name: 'app',
    components: {
      Navigation,
    },
    computed: {
      ...mapGetters({
        processing: globalTypes.getters.processing,
      }),
    },
  };
</script>

<style>
  body {
    background-color: #384389 !important;
  }
  .well {
    background-color: #fff !important;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
  }
  h1, h3, h4, p {
    color: #fff !important;
  }
  h2, a {
    color: rgb(170, 182, 238);
    background-color: transparent;
  }
  a:hover {
    color: rgb(94, 207, 141);
  }
  th, td{
    color: #E33A2D !important;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  td {
    background-color: #fff;
  }
  hr {
    border: 1px solid #E33A2D !important;
    width: 100%;
  }
  a.router-link-exact-active {
    background-color: #05050570;
    border-bottom: 1px solid rgb(94, 207, 141);
  }
</style>
