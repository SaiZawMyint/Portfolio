<template>
  <Layout>
    <div class="w-full absolute h-[100vh] top-0 px-20">
      <router-view v-slot="{ Component }">
        <Transition :name="getTransitons" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
      <Bubbles :bubbles="bubbles" background="linear-gradient( #2A2A72, #112745, #2A2A72)"
      @scroll="scrollHandler"
      />
      <div class="navigator absolute bottom-[10%] left-[50%] translate-x-[-50%] flex items-center justify-center">
        <router-link :to="{name: 'home'}" @click="step.current = 0" href="#" class="w-3 h-3 rounded-full ring-slate-500 ring-1 mx-2" :class="activeSliderClass(0)"></router-link>
        <router-link :to="{name: 'service'}" @click="step.current = 1" href="#" class="w-3 h-3 rounded-full  ring-slate-500 ring-1 mx-2" :class="activeSliderClass(1)"></router-link>
        <router-link :to="{name: 'home'}" @click="step.current = 2" href="#" class="w-3 h-3 rounded-full ring-slate-500 ring-1 mx-2" :class="activeSliderClass(2)"></router-link>
        <router-link :to="{name: 'home'}" @click="step.current = 3" href="#" class="w-3 h-3 rounded-full ring-slate-500 ring-1 mx-2" :class="activeSliderClass(3)"></router-link>
      </div>
    </div>
    <template v-slot:content>
    </template>
  </Layout>
</template>
<script setup>
import { ref } from 'vue';
import Bubbles from '../components/Itech/ui/Bubbles.vue';
import Layout from '../layouts/Layout.vue';
import {useStore} from 'vuex'
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
const store = useStore()

const getTransitons = computed(()=>store.state.route.transitions[store.state.route.step])
const route = useRoute()
const step = ref({
  current: 0
})
const activeSliderClass = (index)=>{
  if(store.state.route.step === index){
    return `bg-sky-600`
  }
  return `bg-gray-600`
}
const markScroll = ref(0)
const scrollHandler = function(e){
  markScroll.value += e.deltaY
  console.log(markScroll.value)
  bubbles.value.forEach((bubble)=>{
    bubble.style['transform'] = `scale(${ Math.abs(markScroll.value / 41)})`
    // bubble.style['animation'] = `unset`
  })
}
const bubbles = ref([
  {
    animation: {
      delay: 4
    },
    style: {
      width: '60px',
      height: '60px',
      top: '20%',
      left: '43%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 4
    },
    style: {
      width: '60px',
      height: '60px',
      top: '65%',
      left: '9%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 3
    },
    style: {
      width: '60px',
      height: '60px',
      top: '55%',
      left: '68%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 2
    },
    style: {
      width: '20px',
      height: '20px',
      top: '55%',
      left: '68%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 2
    },
    style: {
      width: '20px',
      height: '20px',
      top: '55%',
      left: '20%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 2
    },
    style: {
      width: '30px',
      height: '30px',
      top: '55%',
      left: '30%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 1
    },
    style: {
      width: '100px',
      height: '100px',
      top: '55%',
      left: '28%',
      "transform": 'scale(1)',
      "z-index": '50'
    }
  },
  {
    animation: {
      delay: 2
    },
    style: {
      width: '20px',
      height: '20px',
      top: '10%',
      left: '10%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 3
    },
    style: {
      width: '30px',
      height: '30px',
      top: '75%',
      left: '84%',
      "transform": 'scale(1)'
    }
  },{
    animation: {
      delay: 1
    },
    style: {
      width: '25px',
      height: '25px',
      top: '50%',
      left: '85%',
      "transform": 'scale(1)'
    }
  },
  {
    animation: {
      delay: 3
    },
    style: {
      width: '200px',
      height: '200px',
      top: '50%',
      left: '71%',
      "transform": 'scale(1)'
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
      left: '85%',
      "transform": 'scale(1)'
    }
  },
])
</script>
