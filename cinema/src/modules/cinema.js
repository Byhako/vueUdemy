import Vue from 'vue';
import types from '../types/cinema';
import globalTypes from '../types/global';

const state = {
  cinemas: [],
  query: {
    search: '',
    rooms: null,
    seats: null,
  },
};

const actions = {
  [types.actions.fetchCinemas]: ({ commit }) => {
    commit(globalTypes.mutations.startProcessing);
    Vue.http.get('cinemas').then((cinemas) => {
      commit(types.mutations.receivedCinemas, { apiResponse: cinemas });
      commit(globalTypes.mutations.stopProcessing);
    });
  },
};

const getters = {
  [types.getters.search]: () => state.query.search,
  [types.getters.rooms]: () => state.query.rooms,
  [types.getters.seats]: () => state.query.seats,
  [types.getters.cinemas]: () => {
    let { cinemas } = state;
    if (state.query.search) {
      cinemas = cinemas.filter(
        cinema => cinema.cinema_name.toLowerCase().includes(state.query.search),
      );
    }
    if (state.query.rooms) {
      // eslint-disable-next-line no-underscore-dangle
      cinemas = cinemas.filter(cinema => cinema.__meta__.number_of_rooms >= state.query.rooms);
    }
    if (state.query.seats) {
      cinemas = cinemas.filter(cinema => cinema.cinema_seat_capacity >= state.query.seats);
    }
    return cinemas;
  },
};

const mutations = {
  [types.mutations.receivedCinemas]: (State, { apiResponse }) => {
    state.cinemas = apiResponse.data;
  },
  [types.mutations.setSearch]: (State, query) => {
    state.query.search = query;
  },
  [types.mutations.setRooms]: (State, rooms) => {
    state.query.rooms = rooms;
  },
  [types.mutations.setSeats]: (State, seats) => {
    state.query.seats = seats;
  },
  [types.mutations.clearFilter]: () => {
    state.query = {
      search: '',
      rooms: null,
      seats: null,
    };
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
