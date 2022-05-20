<template>
  <h1 id="welcome-text">Welcome to Printer</h1>
  <a href="/order-page"><ButtonComponent placeholder="Make order"/></a>
</template>

<script>
import ButtonComponent from "@/components/Button";
import OrderPage from "@/components/OrderPage";
const routes = {
  "/order-page": OrderPage
}
export default {
  name: "WelcomePage",
  components: {ButtonComponent},
  data(){
    return{
      currentPath: window.location.hash
    }
  },

  computed:{
    currentView(){
      return routes[this.currentPath.slice(1)]
    }
  },
  mounted() {
    window.addEventListener("hashchange", ()=>{
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style scoped>

</style>