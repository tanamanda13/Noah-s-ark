<template>
  <div class="list">
    <div class="intro">
      <p>Une terre sans des animaux<br><span>Une list des animau menace</span></p>
    </div>
    <main>
      <div class="wrapper__button">
        <button>Decouvrir des animaux</button>
      </div>
      <div class="list__headline">
        <p>Au revoir</p>
        <h2>Tous nos candidates</h2>
      </div>
    
      <div class="wrapper__list">
        <div class="wrapper__list__elmenet"></div>
        <div class="wrapper__list__elmenet"></div>
        <div class="wrapper__list__elmenet"></div>
        <div class="wrapper__list__elmenet"></div>
        <div class="wrapper__list__elmenet"></div>
        <div class="wrapper__list__elmenet"></div>
        <div class="wrapper__list__elmenet"></div>
      </div>
      
    </main>
      
  </div>
</template>

<style scoped>


.list{
   display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}

.list__headline{
  text-align-last: left;
  font-family: sans-serif;
  line-height: 3vw;
  margin-top: 2vw;
  
}
.list__headline p,h2{
  line-height: 3vw;
  padding:0;
  margin:0;
  font-size: 3vw;
}


main{
  width:100vw;
  max-width:1440px;
  margin-bottom: 5.5vw;
  padding:2vw;
  
  margin-top: -40vh;
  background-color: #fff;
  width:90vw;
  max-width:1200px;
}

.wrapper__button{
  width:100%;
  display: flex;
  justify-content: flex-end;
  
}

.wrapper__list{
  margin-top: 20px;
  display: flex;
  justify-content:space-between;
   flex-wrap:wrap;
  
}

.wrapper__list__elmenet{
  width:31%;
  height:200px;
  background-color:green;
  margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  .wrapper__list__elmenet{
    width:100%
  }
}

.intro{
  background-color:#062F11;
  width: 100vw;
  height:100vh;
  
}
.intro p{
  color: #fff;
  font-family: sans-serif;
  font-size: 6vw;
  line-height: 3.5vw;
  text-align: center;
  margin-top: 30vh;
}
.intro span{
  font-size: 3vw;
}

button{
  background-color: #062F11;
  color:#fff;
  padding:20px;
  border-radius:50px;
  font-size: 20px;
}

</style>
