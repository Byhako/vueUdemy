<template lang="pug">
  CinemaItem.col-md-12.col-xs-12
    div.col-md-5.col-xs-12
      Img(:src="cinema.cinema_screenshot")
    
    div.col-md-7.col-xs-12
      h2
        router-link(
          :to="{ name: 'cinema', params: { id: cinema.id } }"
        ) {{ $t('cinema.name') }} : {{ cinema.cinema_name }}

      H4 {{ $t('cinema.address') }} : &nbsp;
        span {{ cinema.cinema_address }}

      P {{ $t('cinema.details') }} : &nbsp;
        span {{ cinema.cinema_details }}

      P {{ $t('cinema.telephone') }} : &nbsp;
        span {{ cinema.cinema_phone }}

      P {{ $t('cinema.seats') }} : &nbsp;
        span {{ cinema.cinema_seat_capacity }}

      P {{ $t('cinema.rooms') }} : &nbsp;
        span {{ cinema.__meta__.number_of_rooms }}

</template>

<script>
import { CinemaItem, Img, H4, P } from './styles';

export default {
  name: 'cinemaItem',
  components: {
    CinemaItem,
    Img,
    H4,
    P,
  },
  props: {
    cinema: {
      type: Object,
      required: true,
    },
  },
};
</script>
