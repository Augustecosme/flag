<script setup>
import HomeView from '@/views/HomeView.vue';
import Loarding from './Loarding.vue';

import { ref } from 'vue';
import Deconnexion from './Deconnexion.vue';
const load = ref(true);
function affiche() {
    load.value = false;
}
setTimeout(() => {
    affiche()
}, 2000)
</script>

<template>
    <div>
        <HomeView v-if="!load"></HomeView>
        <Loarding v-else></Loarding>
       

    </div>
</template>
<style scoped></style>