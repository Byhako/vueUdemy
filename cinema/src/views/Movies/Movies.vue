<template lang="pug">
  MovieWrapper
    div.col-md-3.col-xs-12 filters
    div.col-md-9.col-xs-12 movies
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moviesTypes from '../../types/movie';
import { MovieWrapper } from './styles';

export default {
  name: 'movies',
  components: {
    MovieWrapper,
  },
  mounted () {
    const cinemaId = this.$route.params.id;
    this.fetchMovies(cinemaId);
  },
  methods: {
    ...mapActions({
      fetchMovies: moviesTypes.actions.fetchMovies,
    })
  },
  computed: {
    ...mapGetters({
      movies: moviesTypes.getters.movies,
    })
  },
}
</script>