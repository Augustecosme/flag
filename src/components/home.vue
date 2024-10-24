<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const allPays = ref([]);
const dataPays = ref([]);

const pays = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then((listPays) => {
      allPays.value = listPays
      for (let index = 0; index < allPays.value.length; index++) {
        if (index <= 99) {
          dataPays.value.push({
            flags: allPays.value[index].flags.png,
            name: allPays.value[index].name.common,
            shitOption: shuffleArray([allPays.value[Math.floor(Math.random() * 100)].name.common,
                        allPays.value[Math.floor(Math.random() * 100)].name.common,
                        allPays.value[index].name.common])
          })
        }

      }

      console.log(dataPays.value);

    })
    .catch(console.error());
};
onMounted(() => {
  pays();

})
function reinitialiseObj() {
  obj.value = {
    id: "",
    drapeau: "",
    nom: "",
  }
};

let objListPays = ref({
  id: "",
  drapeau: "",
  nom: "",
})
let obj = ref({
  id: "",
  drapeau: "",
  nom: "",
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Choisir un index aléatoire
        // Échanger les éléments
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function addListPays(array, length) {
  for (let i = 0; i < length; i++) {
    objListPays.nom = array[i].name.common,
      objListPays.drapeau = array[i].flags.png

    allPays.value.push(objListPays);
  }
}

function nextQuestion() {
  if (currentIndex.value < dataPays.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Recommencer si c'est la dernière question
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Streack</RouterLink>
    </nav>
    <div v-if="dataPays.length > 0">
      <img :src="dataPays[currentIndex].flags" alt="Drapeau" />
      <h2>{{ dataPays[currentIndex].name }}</h2>
      <div>
        <p>Choisissez l'option correcte :</p>
        <ul>
          <li v-for="(option, index) in dataPays[currentIndex].shitOption" :key="index">
            {{ option }}
          </li>
        </ul>
      </div>
      <button @click="nextQuestion">Next</button>
    </div>
  </header>

  <RouterView />
</template>

<!-- </script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Streack</RouterLink>
    </nav>
    <div v-for="(x, index) in dataPays">
      {{ x.flags }} ::: {{ x.name }}
    </div>
    <div v-for="(x, index) in allPays">
      {{ index }}: "{{ x.flags?.png }}"
    </div>

  </header>

  <RouterView />
</template> -->

<style scoped></style>
