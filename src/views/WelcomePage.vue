<template>
      <div id="center-circle">ORDER FOR<br>
        <span style="position:relative; top: 10px; color:#FDC537; font-size: 37px; font-weight: normal">
        PRINTS
      </span>
      </div>

      <router-link to="/order-page">
        <button id="click-here">HERE!</button>
      </router-link>
    <router-view/>

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
  padding: 24px 0;
  border-radius: 50%;
  background-color: #211432;
  font-size: 15px;
  font-weight: bold;
  color: white;
}
</style>