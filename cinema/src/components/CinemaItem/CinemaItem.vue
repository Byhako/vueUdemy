<template lang="pug">
  CinemaItem.col-md-12.col-xs-12
    div.col-md-5.col-xs-12
      img.img-responsive(:src="cinema.cinema_screenshot")
    
    div.col-md-7.col-xs-12
      h2
        router-link(
          :to="{ name: 'cinema', params: { id: cinema.id } }"
        ) {{ $t('cinema.name') }} : {{ cinema.cinema_name }}

      h3 {{ $t('cinema.address') }} : {{ cinema.cinema_address }}

      p {{ $t('cinema.details') }} : {{ cinema.cinema_details }}

      p {{ $t('cinema.telephone') }} : {{ cinema.cinema_phone }}

      p {{ $t('cinema.seats') }} : {{ cinema.cinema_seat_capacity }}

      p {{ $t('cinema.rooms') }} : {{ cinema.__meta__.number_of_rooms }}

</template>

<script>
import { CinemaItem } from './styles';

export default {
  name: 'cinemaItem',
  components: {
    CinemaItems,
  },
  props: {
    cinema: {
      type: Object,
      required: true,
    },
  },
};
</script>
