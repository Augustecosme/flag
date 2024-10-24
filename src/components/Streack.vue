<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const allPays = ref([]);
const dataPays = ref([]);
const currentIndex = ref(0); // Pour suivre l'index actuel
const verif = ref('');

const pays = () => {
  return fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then((listPays) => {
      allPays.value = listPays;
      for (let index = 0; index < Math.min(100, allPays.value.length); index++) {
        dataPays.value.push({
          flags: allPays.value[index].flags.png,
          name: allPays.value[index].name.common,
          shitOption: shuffleArray([
            allPays.value[Math.floor(Math.random() * Math.min(100, allPays.value.length))].name.common,
            allPays.value[Math.floor(Math.random() * Math.min(100, allPays.value.length))].name.common,
            allPays.value[index].name.common
          ])
        });
      }
      dataPays.value = shuffleArray(dataPays.value);
      console.log(dataPays.value);
    })
    .catch(console.error);
};

onMounted(() => {
  pays();
  setInterval(nextQuestion, 10000);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function nextQuestion() {
  if (currentIndex.value < dataPays.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Recommencer si c'est la dernière question
  }
}

function verifPays() {
  if (verif.value !== dataPays.value[currentIndex.value].name) {
    currentIndex.value = 0;
    clearInterval(setInterval(nextQuestion, 10000));
  } else {
    currentIndex.value++;
  }
}
</script>

<template>
  <div class="container">
    <header>
      <div class="barre">
        <nav>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </li>
            <li class="score">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg> 00
            </li>
            <li class="score">00</li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
      <div v-if="dataPays.length > 0">
        <img :src="dataPays[currentIndex].flags" alt="Drapeau" width="200px" class="nextQuestion"/>
        
        <div>
          <ul>
            <p v-for="(option, index) in dataPays[currentIndex].shitOption" :key="index" @click="() => { verif.value = option; verifPays(); }">
              {{ option }}
            </p>
          </ul>
        </div>
      </div>
    </header>
  </div>

  <RouterView />
</template>

<style scoped>
.loader {
  height: 22px;
  border-radius: 20px;
  color: #4b827b;
  border: 2px solid;
  position: relative;
}

@keyframes l6 {
  0% {
    inset: 0
  }
}

.container {
  text-align: center;
}

.score {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 50px;
}

nav ul {
  display: flex;
  justify-content: center;
}

ul li {
  display: flex;
  justify-content: space-between;
}

li {
  border: 1px solid;
  border-radius: 30px;
  width: 30px;
  margin: 10px;
  background-color: white;
}

p {
  border: 1px solid;
  border-radius: 15px;
  background-color: white;
  margin: 20px 40% 0px 35%;
  padding: 15px;
}

.loader {
  margin: 20px 40% 0px 35%;
}
</style>
