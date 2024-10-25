<script setup>


</script>

<template>
    <div class="loading">
        <div class="loader"></div>
    </div>
</template>

<style scoped>
.loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #333300 0%, #ff99cc 100%);
    /* / border: 1px solid black; / */
}

.loader {
    width: 50px;
    /* / margin: auto; / */
    aspect-ratio: 1;
    position: relative;
    animation: l40 .5s infinite alternate;

}

.loader:before,
.loader:after {
    content: "";
    position: absolute;

    inset: 0;
    background-size: 25px 25px;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-repeat: no-repeat;
}

.loader:before {
    background-image:
        radial-gradient(farthest-side at top left, #ff0000 96%, #0000),
        radial-gradient(farthest-side at top right, #ff7f00 96%, #0000),
        radial-gradient(farthest-side at bottom right, #ffff00 96%, #0000),
        radial-gradient(farthest-side at bottom left, #00ff00 96%, #0000);
    animation: l40-1 1s infinite;
}

.loader:after {
    background-image:
        radial-gradient(farthest-side at top left, #00ffff 94%, #0000 96%),
        radial-gradient(farthest-side at top right, #0000ff 94%, #0000 96%),
        radial-gradient(farthest-side at bottom right, #4b0082 94%, #0000 96%),
        radial-gradient(farthest-side at bottom left, #9400d3 94%, #0000 96%);
    animation: l40-2 1s infinite;
}

@keyframes l40-1 {

    0%,
    10%,
    90%,
    100% {
        inset: 0;
    }

    40%,
    60% {
        inset: -10px;
    }
}

@keyframes l40-2 {

    0%,
    40% {
        transform: rotate(0);
    }

    60%,
    100% {
        transform: rotate(90deg);
    }
}
</style>