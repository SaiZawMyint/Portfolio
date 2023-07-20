<template>
  <Bubbles :bubbles="bubbles" style=" z-index: -1;" @scroll="scrollHandler" position="fixed" />
  <Layout>
    <div class="">
      <router-view v-slot="{ Component }">
        <Transition :name="getTransitons" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
      <div class="navigator absolute bottom-[30px] left-[50%] translate-x-[-50%] flex items-center justify-center">
        <router-link :to="{ name: 'home' }" @click="step.current = 0" href="#"
          class="w-3 h-3 rounded-full ring-slate-500 ring-1 mx-2" :class="activeSliderClass(0)"></router-link>
        <router-link :to="{ name: 'service' }" @click="step.current = 1" href="#"
          class="w-3 h-3 rounded-full  ring-slate-500 ring-1 mx-2" :class="activeSliderClass(1)"></router-link>
        <router-link :to="{ name: 'home' }" @click="step.current = 2" href="#"
          class="w-3 h-3 rounded-full ring-slate-500 ring-1 mx-2" :class="activeSliderClass(2)"></router-link>
        <router-link :to="{ name: 'home' }" @click="step.current = 3" href="#"
          class="w-3 h-3 rounded-full ring-slate-500 ring-1 mx-2" :class="activeSliderClass(3)"></router-link>
      </div>
    </div>
    <template v-slot:content>
    </template>
  </Layout>
  <Transition name="move-out">
    <div v-if="showSearchBar" class="fixed flex items-center w-auto text-slate-400 left-[50%] bottom-[100px] -translate-x-[50%] text-lg translate-x-on ">
      <div class="z-10 absolute -top-[96px] w-full h-full">
        <RiveView :src="searchRiv" width="300" :state-machine="['State Machine 1']" scale="0.5" @on-load="onRiveLoad" />
      </div>
      <div
        class="rounded-hover transition-all flex px-2 rounded-lg drop-shadow-lg text-slate-200 filter bg-opacity-80 bg-blur-lg backdrop-filter backdrop-blur-lg bg-gradient-to-br from-blue-900/40 via-blue-800/40 to-blue-900/40  ring-slate-500/50 ring-1">
        <input autocomplete="off" id="search-input" type="text"
          class="z-10 bg-transparent appearance-none py-2 text-sm focus:outline-none placeholder-slate-500"
          placeholder="What do you need?">
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import Bubbles from '../components/Itech/ui/Bubbles.vue';
import Layout from '../layouts/Layout.vue';
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';
import RiveView from '../components/Itech/ui/RiveView.vue';
import searchRiv from '@assets/rives/search-animation-01.riv'
import { useRoute } from 'vue-router';
import { toRef } from 'vue'
const store = useStore()
const showSearchBar = toRef(store.state.searchBar, 'show')

const getTransitons = computed(() => store.state.route.transitions[store.state.route.step])
const step = ref({
  current: 0
})
const activeSliderClass = (index) => {
  if (store.state.route.step === index) {
    return `bg-sky-600`
  }
  return `bg-gray-600`
}
const activeSearchBar = ref(store.state.searchBar.show)

const markScroll = ref(0)

const scrollHandler = function (e) {
  // markScroll.value += e.deltaY
  // console.log(markScroll.value)
  // bubbles.value.forEach((bubble)=>{
  //   bubble.style['transform'] = `scale(${ Math.abs(markScroll.value / 41)})`
  //   // bubble.style['animation'] = `unset`
  // })
}

const onRiveLoad = ({ rive, machine, canvas }) => {
  const inputs = rive.stateMachineInputs(machine[0]);
  const inp = inputs.find(i => i.name === 'searchHover');
  const typing = inputs.find(i => i.name === 'typing');
  const searchInp = document.getElementById('search-input')
  searchInp.addEventListener('focusin', (e) => {
    inp.value = true
  })
  searchInp.addEventListener('focusout', (e) => {
    inp.value = false
    typing.value = false
  })
  searchInp.addEventListener('input', (e) => {
    typing.value = e.target.value.length > 0
  });


}
const handlePage = ()=>{
  if(currentRoute.value == 'home'){
    activeSearchBar.value = false;
  }else{
    activeSearchBar.value = true;
  }
}
const bubbles = ref([
  {
    animation: {
      delay: 2
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
      top: '75%',
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
  }, {
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
onMounted(()=>{
  store.dispatch('inActiveSearchBar');
})
</script>
