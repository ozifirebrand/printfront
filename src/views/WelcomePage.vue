<template>
  <div class="main-body">
    <div id="home-button">
      P R I N T A P P
    </div>
      <div id="center-circle">ORDER FOR<br>
        <span style="position:relative; top: 10px; color:#FDC537; font-size: 37px; font-weight: normal">
        PRINTS
      </span>
      </div>

      <router-link to="/order-page">
        <div id="click-here">HERE!</div>
      </router-link>

  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  components: {
  }
}
</script>
<!--#211432
-->
<style scoped>
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

#center-circle{
  top: 80px;
  position: relative;
  width: 190px;
  margin: auto;
  border-radius: 50%;
  background-color:#211432;
  padding: 60px 0;
  font-size: 22px;
  font-weight: bold;
  color: white ;
}

#click-here{
  position: relative;
  width: 70px;
  margin: 120px auto auto;
  padding: 25px 0;
  border-radius: 50%;
  background-color: #211432;
  font-size: 15px;
  font-weight: bold;
  color: white;
}
</style>