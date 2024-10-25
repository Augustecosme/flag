<script setup>
import { onMounted, ref } from 'vue';
import {  RouterView } from 'vue-router';
import Deconnexion from './Deconnexion.vue';
import router from '@/router';


import { useRoute } from 'vue-router';

const route = useRoute();
const score = route.params.score;

const isVisible = ref(false);

const startGame = () => {
    isVisible.value = true;
}

// const retryGame = () => {
//     startGame();
//     router.push('/streak');
// }
// const showScore = newScore => {
//     score.value = newScore
//     isVisible.value = true
// }

const allPays = ref([]);
const dataPays = ref([]);

const currentIndex = ref(0)
const selectedOption = ref(null);
const answerCorrect = ref(false);
const answernotcorrrect = ref(false);
let isIncorrectAnswer = ref(false);


// Fonction pour mélanger les options de réponse
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//creation de chronometre
let time = ref(60)

function timeSet (){
    const row = setInterval(function (){
       
        if (time.value>0) {
           
            time.value--
        }else{
            clearInterval(row) 
            isVisible.value = true;
        }
    },1000)
}

//Pour relancé le jeu
function restar(){
    isVisible.value = false;
    timeSet ();
    time.value = 60;
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
// function nextQuestion() {
//   if (currentIndex.value < dataPays.value.length - 1) {
//     currentIndex.value++;
//     resetTimer();
//     selectedOption.value = null;
//     answerCorrect.value = false;
//   } else {
//     alert(`Félicitations ! Votre score total est de ${score.value}`);
//     resetGame();
//   }
// }

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
//     answernotcorrrect.value = option !== dataPays.value[currentIndex.value].name;

//   if (answerCorrect.value) {
//     score.value += 100;
//   }
// //   else if (answernotcorrrect.value){
// //     isIncorrectAnswer.value = true;
// //   }
//   else {
//     isIncorrectAnswer.value = true;
//     // Rediriger vers la page score avec le score
//     router.push(`/score/${score.value}`);
//   }
// }
const correctAnswerMessage = ref('');

function checkAnswer(option) {
  selectedOption.value = option;
  const correctAnswer = dataPays.value[currentIndex.value].name; // Stocke la bonne réponse
  answerCorrect.value = option === correctAnswer;
  
  if (answerCorrect.value) {
    score.value += 100;
    // Rediriger immédiatement si la réponse est correcte
    router.push(`/score/${score.value}`);
  } else {
    // Si la réponse est incorrecte, afficher la bonne réponse
    correctAnswerMessage.value = `La bonne réponse est : ${correctAnswer}`;
    isIncorrectAnswer.value = true;

    // Rediriger vers la page score après un délai
    setTimeout(() => {
      router.push(`/score/${score.value}`);
    }, 2000); // Délai de 2 secondes pour permettre à l'utilisateur de voir la bonne réponse
  }
}


// // Fonction pour réinitialiser le timer
// function resetTimer() {
//   clearInterval(timer);
//   timeLeft.value = 60;
//   timer = setInterval(() => {
//     timeLeft.value--;
//     if (timeLeft.value <= 0) {
//       // Rediriger vers la page Game Over si le temps est écoulé
//       router.push(`/loaedhome`);
//     }
//   }, 60000);
// }

// Lance le jeu au montage
onMounted(() => {
  pays();
  timeSet();
  
});
</script>

<template>
  <div class="container">
    <header>
      <div v-if="dataPays.length > 0">
        <div>
          <img :src="dataPays[currentIndex].flags" alt="Drapeau" class="drap"/>
          <div>
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
            <p v-if="isIncorrectAnswer">{{ correctAnswer }}</p>
          </div>

          <p>Score: {{ score }}</p>
          <p>Temps restant : {{ time }} secondes</p>
        </div>
        <Deconnexion />
      </div>

    </header>

    <div v-if="isVisible" class="modal">
        <div class="modal-content">
            <div class="stars">
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
            </div>
            <br />
            <h2>Votre Score</h2>
            <p class="score">Score: {{ score }}</p>
            <button class="retry-button" @click="restar()">Rejouez</button>
            <button class="return-button" @click="retryGame()"> <Router-Link to="/loaedhome">Quitter</Router-Link></button>
        </div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    animation: fadeIn 0.5s ease;

    .modal-content {
        background: linear-gradient(135deg, #f3f4f6, #d1d5db);
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        width: 80%;
        max-width: 400px;
        position: relative;
    }

    h2 {
        margin-bottom: 10px;
        font-family: 'Arial', sans-serif;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .score {
        font-size: 2em;
        margin-bottom: 20px;
        color: #1f2937;
    }

    .retry-button {
        padding: 10px 20px;
        background-color: #4f46e5;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition:
            background-color 0.3s,
            transform 0.2s;
    }

    .retry-button:hover {
        background-color: #4338ca;
        transform: scale(1.05);
    }

    .stars {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
    }

    .star {
        font-size: 50px;
        color: gold;
        animation: twinkle 1s infinite alternate;
        margin: 0 2px;
    }

    @keyframes twinkle {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0.5;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
}

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

.correct {
  background-color: green;
}

.incorrect {
  background-color: red;
}
</style>
