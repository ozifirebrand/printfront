<template>
<div>
  <InputComponent placeholder="Description"/>
  <ButtonComponent placeholder="Order"/>
</div>
</template>

<script>
import InputComponent from "@/components/InputText";
import ButtonComponent from "@/components/Button";
export default {
  name: "OrderPage",
  components: {ButtonComponent, InputComponent}
}
</script>

<style scoped>

</style>