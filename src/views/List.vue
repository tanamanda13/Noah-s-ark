<template>
  <div class="list">
    <div class="intro">
    <router-link to="/"><div class="back">Back</div></router-link>
    </div>
    <main>
     
      <div class="list__headline">
        <p>Don't let them disappear</p>
        <h2>Animals in danger</h2>
      </div>

      <article class="wrapper__list" >
        <div class="wrapper__list__elmenet"  v-for="select in species" :key="select.image.url">
          <router-link :to="{ path: '/species/'+ select.url}">
            <a class="link--article"><img v-bind:src="select.image.url" v-bind:alt="select.image.url"></a>
          </router-link>
        </div>
      </article>

    </main>

  </div>
</template>

<style scoped>


  .link--article{
    padding:5%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }



  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .list__headline {
    text-align-last: left;
    line-height: 3vw;
    margin-top: 2vw;
    

  }

  .list__headline p, h2 {
    line-height: 20px;
    font-size: 20px;
    padding: 0;
    margin: 0;
  }


  main {
    margin-top: -80vh;
  }



  .wrapper__list {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }

  .wrapper__list__elmenet {
    width: 31%;
    height: 200px;
    background-color: green;
    margin-bottom: 20px;
    position:relative;
    transition: all 0.5s;
    
  }

  .wrapper__list__elmenet:hover{
    background-color: #062F11;;
  }

  img{
    max-width:70%;
    max-height:70%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%)translateY(-50%);
  }

  @media only screen and (max-width: 600px) {
    .wrapper__list__elmenet {
      width: 100%
    }
  }


</style>

<script>
  // @ is an alias to /src
  import BloowatchService from '@/services/entities/bloowatch.js';

  const bloowatchService = new BloowatchService();
  export default {
    name: 'List',
    components: {},
    data() {
      return {
        species: []
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