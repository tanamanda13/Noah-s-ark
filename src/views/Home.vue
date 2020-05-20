<template>
  <div class="home">
    <div class="intro">
      <div class="intro__text">
        <p>Une terre sans des animaux </p>
        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua dkhlskhhsg</span>
        <router-link to="/list"><div class="button">Decouvrir des animaux</div></router-link>
      </div> 
    </div>

    
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


.intro span{  
  color:#fff;
  margin-bottom:50px;
  font-family:sans-serif;
  line-height:25px;
  font-size:20px;

}

.button{
  text-decoration:none;
  background-color:#fff;
  color:#062F11;
}


.intro{
  display:flex;
  flex-direction:column;
  align-items:center;
}

.intro__text{
  width:80vw;
  max-width:600px;
  display:flex;
  flex-direction:column;
  align-items:center;

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