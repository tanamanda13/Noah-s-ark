<template>
  <section class="species">

   
    
    <article v-if="speciesFocused.length">
     
      <div v-for="species in speciesFocused" :key="species.name">
     
      <div class="intro">

       <div class="back">Back</div>
      
      <span class="status__span">{{ species.status }}</span>
        <div class="status">{{ species.population }} population</div>
        
        
        <p>{{ species.name }}<br><span>{{species.scientific_name}}</span></p>
      </div>
      <main>

        
        <div class="imageWrapper">
          <img v-bind:src="species.image.url" alt="species.image.url">
        </div>
        <p>{{ species.location }}</p>
        <p>{{ species.habitat }}</p>
        <p class="description">{{ species.description }}</p>

      </main>
        
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
<style scoped>
html{

  background-color: #062F11;
}
body{
 margin: 0!important;
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
}
.intro {
  background-color: #062F11;
  width: 100vw;
  height: 100vh;

}

img{
  width:100%;
  max-width:500px;
}

.description{
  font-size:25px;
  line-height:30px;
  font-weight:bold;
  width:90%;
  margin-left:5%;
}

.status{
  background-color:#fff;
  border-radius:30vw;
  font-weight:bold;
  padding:10px;
  font-size:17px;
  margin-top:2vw;
  margin-right:2vw;
  display:flex;
  width:60%;
  
  position:relative;
  max-width:300px;
}

.status__span{
  color:#fff;
  font-weight:bold;
  margin-top:20px;
}

.status::before{
  background-color:red;
  border-radius:50%;
  width:30px;
  height:30px;
  display:block;
  content:"";
  left:10px;
  top:7px;
  position:absolute;
}
 

.species article div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

.imageWrapper{
  background-color:green;
  padding:2vw;
}

main {
  width: 100vw;
  max-width: 1440px;
  margin-bottom: 5.5vw;
  padding: 2vw;

  margin-top: -60vh;
  background-color: #fff;
  width: 90vw;
  max-width: 1200px;
  }

.intro p {
  color: #fff;
  font-family: sans-serif;
  font-size: 40px;
  line-height: 35px;
  text-align: center;
  padding:0px;
  margin:0;
  margin-top:10vh;
}
.intro span {
  font-size:17px;
}

.back{
  background-color:#fff;
  border-radius:20vw;
  padding:0.5vw 1vw;
  position:absolute;
  left:3vw;
  top:3vw;

}


</style>