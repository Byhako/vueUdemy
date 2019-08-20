<template lang="pug">
  Container
    Title Lista de Cines

    div.col-md-3.col-xs-12 filtros
    div.col-md-9.col-xs-12 listado
</template>

<script>
import { mapGetters } from 'vuex';
import cinemaType from '@/types/cinema';
import {
  Container, Title,
} from './styles';

export default {
  name: 'cinemas',
  components: {
    Title,
    Container,
  },
  mounted() {
    this.$store.dispatch(cinemaType.actions.fetchCinemas)
  },
};
</script>