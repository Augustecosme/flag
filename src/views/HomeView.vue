<script setup>
<<<<<<< HEAD
import LoaderComponent from '../components/LoaderComponent.vue';
import MaisonComponent from '../components/MaisonComponent.vue';
import SecondeComponent from '../components/GameComponent.vue';

import { ref } from 'vue';
const load =ref(true);
function affiche() {
  load.value = false;
}
setTimeout (()=>{
affiche()
}, 2000)
</script>

<template>
  <div>
    <MaisonComponent v-if="!load "></MaisonComponent>
    <LoaderComponent v-else></LoaderComponent>
    <SecondeComponent></SecondeComponent>
  </div>
</template>
<style scoped>
</style>
=======

</script>

<template>
<div>
<h1>je suis le composant home</h1>
</div>

</template>
>>>>>>> 8e4a5a1afe304824ea801498ca183f3822677d09
