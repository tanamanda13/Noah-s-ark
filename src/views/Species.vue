<template>
  <section class="species">
    <article v-if="speciesFocused.length">
      <div v-for="species in speciesFocused" :key="species.name">
        Species :

        <ul>
          <li>
            Name : {{ species.name }}
          </li>
          <li>
            description : {{ species.description }}
          </li>
          <li>
            status : {{ species.status }}
          </li>
          <li>
            population : {{ species.population }}
          </li>
          <li>
            scientific_name : {{ species.scientific_name }}
          </li>
          <li>
            location : {{ species.location }}
          </li>
          <li>
            habitat : {{ species.habitat }}
          </li>
          <li>
            status_legend : {{ species.status_legend }}
          </li>
          <li>
            <img v-bind:src="species.image.url" alt="species.image.url">
          </li>
        </ul>
      </div>

    </article>
  </section>
</template>

<script>
  // @ is an alias to /src
  import BloowatchService from '@/services/entities/bloowatch.js';

  const bloowatchService = new BloowatchService();
  export default {
    name: 'Species',
    components: {},
    data() {
      return {
        speciesFocused: []
      }
    },
    methods: {
      async getSpeciesFocused(name) {
        this.speciesFocused = await bloowatchService.getSpeciesFocused(name)
        console.log(this.speciesFocused)
      }
    },
    created() {
      this.getSpeciesFocused(this.$route.params.id)
      console.log(this.$route.params.id)
    }
  }
</script>
