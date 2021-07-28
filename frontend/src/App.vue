<template>
  <div id="app">
  
    <router-view></router-view>


    
</div>  
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
body, html {
  margin: 0;
  padding: 0;
  height: 100%; 
}
#app {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}
header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}
/* header a{
  text-decoration: none;
  color: white;
  margin: auto;
} */
/* header img {
  width: 22%;

}

@media screen and (max-width: 768px) {
  header img {
    width: 35%;
  }
}
@media screen and (max-width: 450px) {
  header img {
    width: 50%;
  }
} */
</style>
