<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 class="text-4xl font-bold text-blue-600">Bem-vindo à Página Inicial</h1>
      <p class="mt-4 text-lg text-gray-700">Aqui você pode pesquisar informações sobre CEPs rapidamente.</p>
      <img class="mt-6 w-64 h-auto rounded-lg shadow-md" src="@/assets/map.jpg" alt="Mapa do Projeto" />
      <router-link
        to="/search"
        class="mt-6 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Ir para Pesquisa
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped></style>
  