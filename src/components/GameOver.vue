<script setup>

</script>

<template>
    <div class="container">
        <div class="modal">
            <div class="modal-content">
                <h2>Game Over</h2>
                <p>Merci d'avoir joué !</p>
                <button class="retry-btn"> <router-link to="/loaedhome">Réessayer</router-link></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 90%;
}

h2 {
    margin-bottom: 15px;
    color: #e74c3c;
}

p {
    margin-bottom: 20px;
    color: #555;
}

.retry-btn {
    background-color: #3498db;
     color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none
}

.retry-btn:hover {
    background-color: #2980b9;
}

</style>