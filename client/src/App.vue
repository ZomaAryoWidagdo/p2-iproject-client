<script>
import NavBar from "./components/NavBar.vue";
import MidTrans from "./components/MidTrans.vue";
export default { components: { NavBar, MidTrans } };
</script>

<template>
  <NavBar></NavBar>
  <div style="background-color: aliceblue">
    <router-view></router-view>
  </div>

  <MidTrans></MidTrans>
</template>

<style></style>
