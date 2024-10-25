<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Deconnexion from './Deconnexion.vue';

const allPays = ref([]);
const dataPays = ref([]);
const score = ref(0);
const currentIndex = ref(0);
const selectedOption = ref(null);
const answerCorrect = ref(false);

// Fonction pour mélanger les options de réponse
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fonction pour charger les pays
const pays = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then((listPays) => {
      allPays.value = listPays;
      for (let index = 0; index < 100; index++) {
        dataPays.value.push({
          flags: allPays.value[index].flags.png,
          name: allPays.value[index].name.common,
          options: shuffleArray([
            allPays.value[Math.floor(Math.random() * 100)].name.common,
            allPays.value[Math.floor(Math.random() * 100)].name.common,
            allPays.value[index].name.common
          ])
        });
      }
      dataPays.value = shuffleArray(dataPays.value);
      console.log(dataPays.value);
    })
    .catch(console.error);
};

// Fonction pour passer à la question suivante
function nextQuestion() {
  if (currentIndex.value < dataPays.value.length - 1) {
    currentIndex.value++;
  } else {
    // Logique pour réinitialiser ou terminer le jeu
  }
}

// Fonction pour vérifier la réponse
function checkAnswer(option) {
  selectedOption.value = option;
  answerCorrect.value = option === dataPays.value[currentIndex.value].name;

  if (answerCorrect.value) {
    score.value += 100;
  }

  // Avancer à la question suivante après un délai
  setTimeout(() => {
    nextQuestion();
    selectedOption.value = null;
    answerCorrect.value = false;
  }, 1000); // 1 seconde avant de passer à la question suivante
}

// Lance le jeu au montage
onMounted(() => {
  pays();
});
</script>

<template>
  <div class="container">
    <header>
      <div v-if="dataPays.length > 0">
        <div class="drap">
          <img :src="dataPays[currentIndex].flags" alt="Drapeau" class="Pays"/>
          <div> 
            <nav>
              <ul>
                <li 
                  v-for="(option, index) in dataPays[currentIndex].options" 
                  class="maClasse" 
                  :key="index" 
                  @click="checkAnswer(option)" 
                  :class="{
                    'correct': selectedOption === option && answerCorrect,
                    'incorrect': selectedOption === option && !answerCorrect
                  }">
                  {{ option }}
                </li>
              </ul>
            </nav>
          </div>
          <p>Score: {{ score }}</p>
          <!-- Barre de progression pour le timer -->
        </div>
        <Deconnexion />
      </div>
    </header>
  </div>

  <RouterView />
</template>

<style scoped>

.container {
  text-align: center;
  padding: 100px;
  position: relative;
  background-image: url(../article_combien_pays.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
}
.drap {
  margin-top: 5%;
  padding: 5%;
}
.Pays {
  border-radius: 15px; 
}
ul > li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
li {
  align-items: center;
  border: 1px solid;
  border-radius: 15px;
  background-color: white;
  margin: 20px 42% 0px 40%;
  padding: 15px;
  cursor: pointer;
}
.correct {
  background-color: green;
  color: white;
}
.incorrect {
  background-color: red;
}
</style>
