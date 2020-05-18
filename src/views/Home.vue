<template>
  <div class="home">
    <div class="intro">
      <p>Une terre sans des animaux </p>
    </div>
    <main>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua dkhlskhhsg</p>
      <router-link to="/list"><button>Decouvrir des animaux</button></router-link>
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
body{
 margin: 0;
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
}

.intro{
  background-color:#062F11;
  width: 100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
}

.home .intro p{
  color: #fff;
  font-family: sans-serif;
  font-size: 6vw;
}

.home main{
  width:100vw;
  max-width:1440px;
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 5.5vw;

}

.home main p{
  width:90vw;
  text-align: center;
  font-size: 40px;
}




</style>
