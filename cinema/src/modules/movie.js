import Vue from 'vue';
import types from '../types/movie';
import globalTypes from '../types/global';

const state = {
  cinemaInfo: {},
  genres: [],
  query: {
    search: '',
    rows: null,
    seats: null,
    hour: null,
    genre: null,
  },
};

const actions = {
  [types.actions.fetchMovies]: ({ commit }, cinemaId) => {
    commit(globalTypes.mutations.startProcessing);
    Vue.http.get(`movies/${cinemaId}/byCinema`).then((movies) => {
      commit(types.mutations.receivedMovies, { apiResponse: movies });
      commit(globalTypes.mutations.stopProcessing);
    });
  },
  [types.actions.fetchGenres]: ({ commit }) => {
    commit(globalTypes.mutations.startProcessing);
    Vue.http.get('genres').then((genres) => {
      commit(types.mutations.receivedGenres, { apiResponse: genres });
      commit(globalTypes.mutations.stopProcessing);
    });
  },
};

const getters = {
  [types.getters.movies]: () => {
    let movies = state.cinemaInfo.movie_showings;
    if (state.query.search) {
      // eslint-disable-next-line max-len
      movies = movies.filter(movie => movie.movie.movie_name.toLowerCase().includes(state.query.search));
    }
    if (state.query.rows) {
      movies = movies.filter(movie => movie.room.room_rows >= state.query.rows);
    }
    if (state.query.seats) {
      movies = movies.filter(movie => movie.room.room_seats >= state.query.seats);
    }
    if (state.query.genre) {
      // eslint-disable-next-line max-len
      movies = movies.filter(movie => movie.movie.genres.some(genre => genre.pivot.genre_id === state.query.genre));
    }
    if (state.query.hour) {
      // eslint-disable-next-line camelcase
      movies = movies.filter(movie => movie.movie_showing_times.some((movie_showing_time) => {
        const arrayHour = movie_showing_time.hour_to_show.split(':');
        // eslint-disable-next-line radix
        return parseInt(arrayHour[0]) === state.query.hour;
      }));
    }
    return movies;
  },
  [types.getters.genres]: () => state.genres,
  [types.getters.genre]: () => state.query.genre,
  [types.getters.search]: () => state.query.search,
  [types.getters.rows]: () => state.query.rows,
  [types.getters.seats]: () => state.query.seats,
  [types.getters.hour]: () => state.query.hour,
};

const mutations = {
  [types.mutations.receivedMovies]: (State, { apiResponse }) => {
    state.cinemaInfo = apiResponse.data;
  },
  [types.mutations.receivedGenres]: (State, { apiResponse }) => {
    state.genres = apiResponse.data;
  },
  [types.mutations.setSearch]: (State, query) => {
    state.query.search = query;
  },
  [types.mutations.setGenre]: (State, genre) => {
    state.query.genre = genre;
  },
  [types.mutations.setSeat]: (State, seats) => {
    state.query.seats = seats;
  },
  [types.mutations.setRow]: (State, rows) => {
    state.query.rows = rows;
  },
  [types.mutations.setHour]: (State, hour) => {
    state.query.hour = hour;
  },
  [types.mutations.clearFilters]: () => {
    state.query = {
      search: '',
      rows: null,
      seats: null,
      hour: null,
      genre: null,
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
