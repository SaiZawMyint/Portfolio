<template>
    <div class="loading-bar" :class="class" v-if="go"></div>
</template>
<script setup>
defineProps({
    class:{
        type:String,
        default: ''
    },
    go:{
        type: Boolean,
        default: false
    }
})
</script>
<style>
.loading-bar {
    position: absolute;
    width: 100%;
    padding: .2vh;
    z-index: 1;
}

.loading-bar::before {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 20%;
    background-color: var(--app-color);
    animation: loadingbar 1s linear infinite;
    transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes loadingbar {
    0% {
        left: 0%;
        right: 100%;
        width: 0%;
    }

    10% {
        left: 0%;
        right: 75%;
        width: 25%;
    }

    90% {
        right: 0%;
        left: 75%;
        width: 25%;
    }

    100% {
        left: 100%;
        right: 0%;
        width: 0%;
    }
}
</style>