<template>
  <section class="home">
    <ul>
      <li v-for="select in species" :key="select.name">
        <router-link :to="{ path: '/species/'+ select.url}">
          <a>{{ select.name }}</a>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  // @ is an alias to /src
  import BloowatchService from '@/services/entities/bloowatch.js';

  const bloowatchService = new BloowatchService();
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        species: [],
        speciesFocused: []
      }
    },
    methods: {
      async getAllSpecies() {
        this.species = await bloowatchService.getAllSpecies()
        console.log(this.species)
      }
    },
    created() {
      this.getAllSpecies()
    }
  }
</script>
