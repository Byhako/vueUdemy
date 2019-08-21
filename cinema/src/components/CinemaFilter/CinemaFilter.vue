<template lang="pug">
  Wrapper
    Div.well
      h3.text-center {{ $t('filter.cinema') }}
      label.control-label {{ $t('filter.search') }}
      input.form-control(
        v-model='search'
        :placeholder="$t('filter.search')"
      )
      hr

      label.control-label {{ $t('filter.rooms') }}
      select.form-control(v-model="rooms")
        option(v-for="room in [5, 10, 15, 20, 25, 30]" :value="room") {{ room }}
      hr

      label.control-label {{ $t('filter.seats') }}
      select.form-control(v-model="seats")
        option(v-for="seat in [100, 200, 300, 400, 500, 600, 700, 800, 900]" :value="seat") {{ seat }}
      hr

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import cinemaTypes from '@/types/cinema';
import { Wrapper, Div } from './styles';

export default {
  name: 'cinemaFilter',
  components: {
    Wrapper,
    Div,
  },
  methods: {
    ...mapMutations({
      setSearch: cinemaTypes.mutations.setSearch,
      setRooms:  cinemaTypes.mutations.setRooms,
      setSeats:  cinemaTypes.mutations.setSeats,
      clearFilter:  cinemaTypes.mutations.clearFilter,
    }),
  },
  computed: {
    ...mapGetters({
      query: cinemaTypes.getters.search,
      numberOfRomms: cinemaTypes.getters.rooms,
      numberOfSeats: cinemaTypes.getters.seats,
    }),
    search: {
      get() {
        return this.query;
      },
      set(value) {
        this.setSearch(value);
      },
    },
    rooms: {
      get() {
        return this.numberOfRomms;
      },
      set(value) {
        this.setRooms(value);
      },
    },
    seats: {
      get() {
        return this.numberOfSeats;
      },
      set(value) {
        this.setSeats(value);
      },
    },
  },
};
</script>