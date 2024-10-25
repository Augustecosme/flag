<script setup>
import router from '@/router';
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const score = route.params.score;

const isVisible = ref(true);

const startGame = () => {
    score.value = 0;
    isVisible.value = false;
}

const retryGame = () => {
    startGame();
    router.push('/streak');
}
const showScore = newScore => {
    score.value = newScore
    isVisible.value = true
}

</script>


<template>
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
            <button class="retry-button" @click="retryGame"> <Router-Link to="/loaedhome">Rejouer</Router-Link></button>
        </div>
    </div>
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

</style>