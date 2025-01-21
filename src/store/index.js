import { createStore } from 'vuex';

export default createStore({
  state: {
    cep: '',
    address: null,
  },
  mutations: {
    setCep(state, cep) {
      state.cep = cep;
    },
    setAddress(state, address) {
      state.address = address;
    },
    resetAddress(state) {
      state.address = null;
    }
  },
  actions: {
    async searchCep({ commit }, cep) {
      try {
        const response = await fetch(`http://localhost:8000/cep?cep=${cep}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            commit('setAddress', jsonResponse.data);
        } else {
          alert('CEP não encontrado');
        }
      } catch (error) {
        alert('Erro ao buscar CEP');
      }
    }
  },
  getters: {
    getAddress(state) {
      return state.address;
    }
  }
});
