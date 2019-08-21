<template lang="pug">
  Content
    div.col-md-3.col-xs-12
      CinemaFilter

    div.col-md-9.col-xs-12
      div(v-if="cinemas.length > 0")
        div(v-for="(cinema, index) in cinemas")
          CinemaItems(:cinema="cinema" :key="index")
          div.clearfix
          hr
      
      div(v-else)
        div.alert.alert-danger {{ $t('cinema.empty') }}

</template>

<script>
import { mapGetters } from 'vuex';
import cinemaType from '@/types/cinema';
import CinemaItems from '@/components/CinemaItem/CinemaItem.vue';
import CinemaFilter from '../../components/CinemaFilter/CinemaFilter.vue';
import {
  Container, Title, Content,
} from './styles';

export default {
  name: 'cinemas',
  components: {
    CinemaItems,
    CinemaFilter,
    Title,
    Container,
    Content,
  },
  mounted() {
    this.$store.dispatch(cinemaType.actions.fetchCinemas)
  },
  computed: {
    ...mapGetters({
      cinemas: cinemaType.getters.cinemas,
    })
  },
};
</script>