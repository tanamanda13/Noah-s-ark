<template>
  <section class="species">

   
    
    <article v-if="speciesFocused.length">
     
      <div v-for="species in speciesFocused" :key="species.name">
     
      <div class="intro">

       
      </div>
      <main>

        <router-link to="/list"><div class="back">Back</div></router-link>
        <div class="status__wrapper">
          <span class="status__span">{{ species.status }}</span>
          <div class="status">
            <div v-bind:class="[{status__circle: true}, species.status.toLowerCase()]"></div>
            <p>{{ species.population }} population</p>
          </div> 
          <p>{{ species.name }}<br><span>{{species.scientific_name}}</span></p>
        </div>
        

        
        <div class="imageWrapper">
          <img v-bind:src="species.image.url" alt="species.image.url">
        </div>
        <p>{{ species.location }}</p>
        <p>{{ species.habitat }}</p>
        <p class="description">{{ species.description }}</p>
         <div class="wrapper__button">
          <div class="button">Abonne toi du {{ species.name }}</div>
        </div>
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

img{
  max-width:70%;
  max-width:70%;
}

.description{
  font-size:25px;
  line-height:30px;
  font-weight:bold;
  width:90%;
  margin-left:5%;
}

main{
  overflow-x:hidden;
}

.status__wrapper{
  background-color:#062F11;
  position:relative;
  top:-15px;
  right:-20px;
  left:-20px;
  width:calc(100% + 40px);
}

.status__wrapper p{
  font-size: 40px;
  line-height: 40px;
    font-family: 'Bangers', cursive;
    color:#fff;
}

.status{
  background-color:#fff;
  border-radius:30vw;
  font-weight:bold;
  padding:10px;
  font-size:17px;
  margin-top:20px;
  margin-right:2vw;
  display:flex;
  
  position:relative;
  max-width:300px;
  display:flex;
  align-items:center;
  flex-direction:row !important;
}

.status__span{
  color:#fff;
  font-weight:bold;
  margin-top:20px;
}

.status p{
  margin-bottom:0;
}

@media only screen and (max-width: 600px) {
  .status__span{
    margin-top:50px;
  }
}


@media only screen and (max-width: 600px) {
  .intro p{
    margin-top:5vh!important;
  }
}
.status p{
  font-weight:bold;
  padding:10px;
  font-size:17px;
  line-height:22px;
  padding-top:0;
  padding-bottom:0;
  color:#000;
  font-family:sans-serif;
  text-align:left;
  margin-top:0 !important;
}

.status__circle{
  
  border-radius:50%;
  width:30px;
  height:30px;
  display:block;
}


.critically.endangered{
  background-color:red;
}

.endangered{
  background-color:orange;
}

.vulnerable{
  background-color:yellow;
}

 

.species article div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

.imageWrapper{
  background-color:green;
  padding:2vw;
  transition:all 1s;
  position:relative;
}

.imageWrapper:hover{
  background-color:#000;
}

.imageWrapper:hover:after{
  content:"La trist preview du futur";
  font-size:30px;
  color:#fff;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
}


main {
  margin-top: -90vh;
}

@media only screen and (max-width: 600px) {
  main{
    margin-top: -90vh;
  }
}

.intro p {
  margin:0;
  margin-top:10vh;
}
.intro span {
  font-size:17px;
}

  .wrapper__button {
    width: 100%;
    max-width:1440px;
    display: flex;
    justify-content: flex-end;

  }




</style>