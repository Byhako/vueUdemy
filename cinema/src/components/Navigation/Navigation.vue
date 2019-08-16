<template lang="pug">
  Nav.navbar.navbar-expand-lg
    a.navbar-brand(href='#') Vue.js
    button.navbar-toggler(
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'
    )
      span.navbar-toggler-icon

    div.collapse.navbar-collapse#navbarSupportedContent
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link.nav-link(to='/') {{ $t('navigation.cinema') }}
        li.nav-item
          router-link.nav-link(to='/profile' v-if='isLogged') {{ $t('navigation.my-account') }}
        li.nav-item
          router-link.nav-link(to='/nooking'  v-if='isLogged') {{ $t('navigation.bookings') }}

      ul.navbar-nav
        li.nav-item
          router-link.nav-link(to='/login' v-if='!isLogged') {{ $t('navigation.login') }}
        li.nav-item
          router-link.nav-link(to='/register' v-if='!isLogged') {{ $t('navigation.register') }}
        li.nav-item
          a.nav-link(href='#' @click.prevent='logout' v-if='isLogged') {{ $t('navigation.logout') }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import authTypes from '@/types/auth';
import { Nav } from './styles';

export default {
  name: 'navigation',
  components: {
    Nav,
  },
  methods: {
    ...mapActions({
      _logout: authTypes.actions.logout,
    }),

    logout() {
      /* eslint-disable */
      this._logout();
      this.$router.push({ name: 'login' });
    },
  },
  computed: {
    ...mapGetters({
      isLogged: authTypes.getters.logged,
    }),
  },
};
</script>
