<template>
  <div class="main-body">
    <div id="home-button">
      P R I N T A P P
    </div>
    <WelcomePage/>


  </div>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-body{
  margin: auto;
  width: 1640px;
  height: 720px;
  background-color: cornsilk;
  position: relative;
}
#home-button{
  border-radius: 0 10px 10px 0;
  width: 140px;
  background-color:#FDC537 ;
  padding: 15px 0;
  font-family: "Yu Gothic UI",sans-serif;
  font-weight: bold;
  text-align: center;
  color:#211432 ;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import WelcomePage from "@/views/WelcomePage";
export default {
  components: {WelcomePage}

}
</script>