<template>
  <div class="home">
    <div class="intro">
      <p>Une terre sans des animaux </p>
    </div>
    <main>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua dkhlskhhsg</p>
      <router-link to="/list"><div class="button">Decouvrir des animaux</div></router-link>
    </main>
    
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

/*export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}*/
</script>
<style scoped>

.home{
  display:flex;
  flex-direction:column;
  align-items:center;
}


.intro p{  
}

.button{
  width:300px;
  text-decoration:none;
}


main{
  margin-top: -35vh;
  display:flex;
  flex-direction:column;
  align-items:center;
}

main p{
  width:90%;
  text-align: center;
  font-size: 35px;
  font-weight:bold;
  padding:2vw;
  
}
@media only screen and (max-width: 600px) {
  .home main p{
    font-size: 20px;
    line-height:25px;
    padding:4%;
  }
}




</style>