<script setup>
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
