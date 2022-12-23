<template>
    <div class="absolute top-0 left-0 w-full h-full bubble-wrapper"
    :style="`background: ${background}`">
        <div class="bubble" v-for="bubble in bubbles" :style="getBubbleClass(bubble.style)"
        :class="getAnimationClass(bubble.animation)">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
    bubbles: {
        type: Array,
        default: [
            {
                animation: {
                    delay: 3
                },
                style: {
                    width: '60px',
                    height: '60px',
                    top: '55%',
                    left: '68%'
                }
            },
            {
                animation: {
                    delay: 1
                },
                style: {
                    width: '200px',
                    height: '200px',
                    top: '50%',
                    left: '70%'
                }
            },
            {
                animation: {
                    delay: 2
                },
                style: {
                    width: '60px',
                    height: '60px',
                    top: '50%',
                    left: '85%'
                }
            },
        ]
    },
    background: {
        type: String,
        default: '#334155'
    }
})

const emits = defineEmits(['scroll'])

const getBubbleClass = function (bubble) {
    let style = ``;
    for (let key in bubble) {
        
        style += `${key}: ${bubble[key]};`
    }
    console.log(style)
    return style
}
const getAnimationClass = function(animation){
    let anicls = ``
    for(let key in animation){
        anicls += `itech-${key}-${animation[key]}`
    }
    return anicls
}
onMounted(()=>{
    document.addEventListener('wheel',function(e){
        emits('scroll',e)
    })
})
</script>

<style lang="scss" scoped>
.bubble {
    position: absolute;
    border-radius: 50%;
    box-shadow: inset 0 0 25px rgba(235, 235, 235, 0.25);
    background-color: #006aff21;
    transition: all .4s ease-in-out;
    animation: bubble 8s ease-in-out infinite;
}

.bubble::before,
.bubble::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 20%;
    top: 23%;
    left: 23%;
    border-radius: 50%;
    background-color: #FFFFFF;
    filter: blur(2px);
    z-index: 10;
}

.bubble::after {
    width: 10%;
    height: 10%;
    top: 15%;
    left: 15%;
}

.bubble span {
    position: absolute;
    border-radius: 50%;
}

.bubble span:nth-child(1) {
    inset: 10px;
    border-left: 5px solid rgb(32, 207, 238);
    filter: blur(5px);
}

.bubble span:nth-child(2) {
    inset: 10px;
    border-right: 5px solid rgb(240, 38, 206);
    filter: blur(5px);
}

.bubble span:nth-child(3) {
    inset: 10px;
    border-top: 10px solid rgb(15, 255, 227);
    filter: blur(5px);
}

.bubble span:nth-child(4) {
    inset: 20px;
    border-left: 5px solid rgb(240, 38, 206);
    filter: blur(5px);
}

.bubble span:nth-child(5) {
    inset: 10px;
    border-bottom: 5px solid #e0e0e0;
    filter: blur(5px);
    transform: rotate(330deg);
}

@for $i from 1 through 10 {
    .itech-delay-#{$i} {
        animation-delay: -#{$i}s;
    }
}

@keyframes bubble {

    0%,
    100% {
        transform: translateY(-20px);
    }

    50% {
        transform: translateY(20px);
    }
}
</style>