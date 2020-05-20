<template>
  <div class="home">
    <div class="intro">
      <div class="intro__text">
        <p>A future without animals ?</p>
        <span>Half the number of animals on the planet in 40 years: this is the alarmist observation of the 2018 report from the World Wildlife Fund. Let’s act before it’s too late.</span>
        <router-link to="/list"><div class="button">Discover animals in danger</div></router-link>
      </div> 
    </div>

    
  </div>
</template>

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