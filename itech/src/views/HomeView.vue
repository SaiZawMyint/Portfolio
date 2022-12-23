<template>
  <Layout>
    <div class="w-full absolute h-[100vh] top-0 px-20">
      <div class="hidden p-4 absolute z-10 w-[500px] text-slate-200 top-[30%] left-[10%] ring-slate-600/50 ring-1 rounded-lg bg-gray-700/30 backdrop-blur-sm">
        <h1 class="text-xl">Welcome to <span class="text-sys-primary tracking-widest font-bold font-rub">iTech</span> - Software Company</h1>
        <p class="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum maiores corrupti molestiae reiciendis doloremque dicta quam voluptate corporis iusto consectetur, itaque dolorum in nihil voluptates unde nisi beatae blanditiis?
        </p>
        <div class="mt-8 flex items-center justify-start">
          <button 
          class="py-2 mr-3 rounded-lg backdroup-blur-sm text-sm transition-all hover:text-sky-600">
            Who we are?
          </button>
          <button 
          class="px-8 py-2 mr-3 rounded-lg bg-sky-600/50 backdroup-blur-sm ring-sky-400/50 ring-1 transition-all hover:bg-gray-100/10">
            Services
          </button>
        </div>
      </div>
      <div class="w-[60%] top-[50%] left-[50%] absolute translate-x-[-50%] text-slate-300 translate-y-[-50%] z-10 text-center">
        <h2 class="text-[4em] font-rub text-sys-primary">i Tech</h2>
        <span class="-mt-4 block flex items-center justify-center text-slate-300">
          <span class="pr-2 text-sys-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </span> 
          Software Company
        </span>
        <p class="mt-4 max-w-[600px] mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ipsam perspiciatis eligendi.
        </p>
        <button class="rounded-hover min-w-[200px] relative flex items-center justify-center px-6 py-2 rounded-lg ring-slate-600 ring-1 mx-auto mt-8 transition-all delay-2">
          Who we are?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF" 
          class="ml-4 w-6 h-6 absolute right-3 top-[50%] translate-y-[-50%]" stroke-width="5">
            <path fill-rule="evenodd" stroke-width="5"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clip-rule="evenodd" />
          </svg>
        </button>
        <div class="mt-3 text-center">
          <a href="#" class="text-sm text-sys-primary">Contact us</a>
        </div>
      </div>
      <Bubbles :bubbles="bubbles" background="linear-gradient(335deg, #000B18, #00172D, #220a3a, #112745)"
      @scroll="scrollHandler"
      />
      <div class="navigator absolute bottom-[10%] left-[50%] translate-x-[-50%] flex items-center justify-center">
        <a href="#" class="w-3 h-3 rounded-full bg-sky-600 ring-slate-500 ring-1 mx-2"></a>
        <a href="#" class="w-3 h-3 rounded-full bg-gray-600 ring-slate-500 ring-1 mx-2"></a>
        <a href="#" class="w-3 h-3 rounded-full bg-gray-600 ring-slate-500 ring-1 mx-2"></a>
        <a href="#" class="w-3 h-3 rounded-full bg-gray-600 ring-slate-500 ring-1 mx-2"></a>
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
const markScroll = ref(0)
const scrollHandler = function(e){
  markScroll.value += e.deltaY
  console.log(markScroll.value)
  bubbles.value.forEach((bubble)=>{
    bubble.style['transform'] = `scale(${ Math.abs(markScroll.value / 41)})`
    // bubble.style['animation'] = `unset`
  })
}
</script>
