<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Deconnexion from './Deconnexion.vue';
import router from '@/router';


const allPays = ref([]);
const dataPays = ref([]);
const score = ref(0);
const currentIndex = ref(0);
const timeLeft = ref(10); // 10 secondes pour répondre
let timer;
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

// Fonction pour passer à la question suivante ou réinitialiser le jeu
function nextQuestion() {
  if (currentIndex.value < dataPays.value.length - 1) {
    currentIndex.value++;
    resetTimer();
    selectedOption.value = null;
    answerCorrect.value = false;
  } else {
    // alert(`Félicitations ! Votre score total est de ${score.value}`);
    resetGame();
  }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  score.value = 0;
  currentIndex.value = 0;
  resetTimer();
}

// Fonction pour vérifier la réponse
// function checkAnswer(option) {
//   selectedOption.value = option;
//   answerCorrect.value = option === dataPays.value[currentIndex.value].name;

//   if (answerCorrect.value) {
//     score.value += 100;
//     setTimeout(nextQuestion, 1000); // Passer à la question suivante après 1 seconde
//   } else {
//     // Rediriger vers la page score si la réponse est incorrecte
//     router.push('/score');
//   }
// }

function checkAnswer(option) {
  selectedOption.value = option;
  answerCorrect.value = option === dataPays.value[currentIndex.value].name;

  if (answerCorrect.value) {
    score.value += 100;
    setTimeout(nextQuestion, 1000);
  } else {
    // Rediriger vers la page score avec le score
    router.push(`/score/${score.value}`);
  }
}

// Fonction pour réinitialiser le timer
function resetTimer() {
  clearInterval(timer);
  timeLeft.value = 10;
  timer = setInterval(() => {
    timeLeft.value--;
    if (timeLeft.value <= 0) {
      // Rediriger vers la page Game Over si le temps est écoulé
      // router.push(`/loaedhome`);
      
    }
  }, 1000);
}

// Lance le jeu au montage
onMounted(() => {
  pays();
  resetTimer();
});
</script>

<template>
  <div class="container">
    <header>
      <div v-if="dataPays.length > 0">
        <div>
          <img :src="dataPays[currentIndex].flags" alt="Drapeau" class="drap"/>
          <div>
            <div style="background: #eee; height: 20px; margin-top: 10px;" class="barre">
              <div :style="{ width: `${timeLeft * 10}%`, background: 'green', height: '100%' }" class="barre-1"></div>
            </div>
            <p>Choisissez l'option correcte :</p>
            <nav>
              <ul>
                <li 
                  v-for="(option, index) in dataPays[currentIndex].options" 
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
}

.barre {
  margin: 20px 41% 10px 41%;
  border: 1px solid;
  border-radius: 15px;
}
.drap {
  margin-top: 5%;
  padding: 5%;
}
ul > li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

li {
  text-align: center;
  align-items: center;
  border: 1px solid;
  border-radius: 15px;
  background-color: white;
  margin: 20px 42% 0px 40%;
  padding: 15px;
  cursor: pointer;
}

p{
  font-size: 30px;
}
.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}
</style>
