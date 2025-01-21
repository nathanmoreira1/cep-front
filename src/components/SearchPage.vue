<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
    <h1 class="text-3xl font-bold text-blue-600">Pesquisa de CEP</h1>
    <div class="mt-4">
      <input
        v-model="cep"
        type="text"
        placeholder="Digite o CEP"
        maxlength="9"
        class="w-64 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        @input="formatCep"
      />
      <button
        @click="searchCepHandler"
        class="ml-4 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition disabled:opacity-50"
        :disabled="loading"
      >
        Buscar
      </button>
    </div>
    <!-- Loading Spinner -->
    <div v-if="loading" class="mt-4 flex items-center justify-center space-x-2">
      <div class="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span class="text-blue-500">Carregando...</span>
    </div>
    <!-- Endereço -->
    <div v-if="address && !loading" class="mt-4">
      <p><strong>CEP:</strong> {{ address.cep }}</p>
      <p><strong>Logradouro:</strong> {{ address.logradouro }}</p>
      <p><strong>Complemento:</strong> {{ address.complemento }}</p>
      <p><strong>Bairro:</strong> {{ address.bairro }}</p>
      <p><strong>Cidade:</strong> {{ address.localidade }}</p>
      <p><strong>Estado:</strong> {{ address.uf }}</p>
      <p><strong>Região:</strong> {{ address.regiao }}</p>
    </div>
    <router-link
      to="/"
      class="mt-6 px-6 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100 transition"
    >
      Voltar
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      cep: "",
      loading: false,
    };
  },
  computed: {
    ...mapState(["address"]),
  },
  methods: {
    ...mapActions(["searchCep"]),
    ...mapMutations(["resetAddress"]),
    
    formatCep(event) {
      let value = event.target.value.replace(/\D/g, "");

      if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
      }

      this.cep = value;
    },

    async searchCepHandler() {
      this.loading = true;

      const cepWithoutHyphen = this.cep.replace("-", "");

      await this.searchCep(cepWithoutHyphen);
      this.loading = false;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.resetAddress();
    next();
  },
};
</script>
