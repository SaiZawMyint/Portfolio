<template>
    <Transition name="fade">
        <div>
            <div class="h-[100vh] mx-auto flex justify-center items-center" data-aos="zoom-in">
                <div class="fade-up  text-slate-300 text-center">
                    <!-- <h2 class="text-[4em] font-rub text-sys-primary">i Tech</h2> -->
                    <div class="w-full flex items-center justify-center">
                        <img src="@assets/svgs/itech-logo-dark.svg" alt="" width="400" class="-mb-[140px] -ml-[50px]">
                    </div>
                    <div class="-mt-4 w-[fit-content] px-2 mx-auto flex items-center justify-center text-slate-100 text-lg bg-opacity-80 bg-blur-lg backdrop-filter backdrop-blur-lg bg-gradient-to-br from-blue-900/40 via-blue-800/40 to-blue-900/40 rounded-lg ring-slate-500/50 ring-1">
                        <span class="pr-2 text-sys-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                        </span>
                        Software Company
                    </div>
                    <p class="mt-4 max-w-[600px] mx-auto">
                        A leading software company dedicated to delivering innovative solutions that transform businesses
                        and
                        empower digital experiences.
                    </p>
                    <router-link :to="{ name: 'service' }"
                        class="rounded-hover w-[fit-content] min-w-[200px] relative flex items-center justify-center px-6 py-2 rounded-lg ring-slate-600 ring-1 mx-auto mt-8 transition-all delay-2">
                        Who we are?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF"
                            class="ml-4 w-6 h-6 absolute right-3 top-[50%] translate-y-[-50%]" stroke-width="5">
                            <path fill-rule="evenodd" stroke-width="5"
                                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </router-link>
                    <div class="mt-3 text-center">
                        <a href="#" class="text-sm text-sys-primary">Contact us</a>
                    </div>
                </div>
            </div>
            <div class="py-10">
                <div
                    class="relative w-[80%] text-sm text-slate-300 flex flex-col items-center justify-between mx-auto h-[60%]">
                    <h2 class="text-xl">
                        Our Service
                    </h2>
                    <div class="w-[500px] left-comp" id="riveContainer" data-aos="zoom-in">
                        <RiveView :src="riveSrc" width="500" height="500" />
                    </div>
                    <div class="w-full flex justify-center items-center mt-12">
                        <div class="relative flex flex-col items-center max-w-[33%] "  data-aos="fade-right">
                            <div class="z-10 absolute -top-[190px] flex items-end justify-center w-[300px]">
                                <img src="@assets/svgs/software-development.svg" style="width: 100%; margin-bottom: -50px;">
                            </div>
                            <div
                                class="bg-opacity-80 bg-blur-lg backdrop-filter backdrop-blur-lg bg-gradient-to-br from-gray-900/30 via-gray-800/30 to-gray-900/30 rounded-lg ring-slate-500/50 ring-1 p-3 pt-[70px] mx-2 text-center">
                                <h2 class="text-xl text-[#1a96ee] font-bold">Software Development</h2>
                                <p class="pt-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum maiores corrupti
                                    molestiae
                                </p>
                                <div class="mt-8 flex items-center justify-center">
                                    <router-link :to="{ name: 'service' }"
                                        class="rounded-hover px-8 py-2 mr-3 rounded-lg backdroup-blur-sm ring-sky-400/50 ring-1 transition-all">
                                        Services
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div class="relative flex flex-col items-center max-w-[33%] "  data-aos="zoom-in">
                            <div class="z-10 absolute -top-[150px] flex items-end justify-center w-[230px]">
                                <img src="@assets/svgs/web-development-01.svg" style="width: 100%; margin-bottom: -50px;">
                            </div>
                            <div
                                class="bg-opacity-80 bg-blur-lg backdrop-filter backdrop-blur-lg bg-gradient-to-br from-gray-900/30 via-gray-800/30 to-gray-900/30 rounded-lg ring-slate-500/50 ring-1 p-3 pt-[70px] mx-2 text-center">
                                <h2 class="text-xl text-[#1a96ee] font-bold">Custom Web Development</h2>
                                <p class="pt-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum maiores corrupti
                                    molestiae
                                </p>
                                <div class="mt-8 flex items-center justify-center">
                                    <router-link :to="{ name: 'service' }"
                                        class="rounded-hover px-8 py-2 mr-3 rounded-lg backdroup-blur-sm ring-sky-400/50 ring-1 transition-all">
                                        Services
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex flex-col items-center max-w-[33%] "  data-aos="fade-left">
                            <div class="z-10 absolute -top-[190px] flex items-end justify-center w-[300px]">
                                <img src="@assets/svgs/web-development.svg" style="width: 100%; margin-bottom: -50px;">
                            </div>
                            <div
                                class="bg-opacity-80 bg-blur-lg backdrop-filter backdrop-blur-lg bg-gradient-to-br from-gray-900/30 via-gray-800/30 to-gray-900/30 rounded-lg ring-slate-500/50 ring-1 p-3 pt-[70px] mx-2 text-center">
                                <h2 class="text-xl text-[#1a96ee] font-bold">Custom Web Development</h2>
                                <p class="pt-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum maiores corrupti
                                    molestiae
                                </p>
                                <div class="mt-8 flex items-center justify-center">
                                    <router-link :to="{ name: 'service' }"
                                        class="rounded-hover px-8 py-2 mr-3 rounded-lg backdroup-blur-sm ring-sky-400/50 ring-1 transition-all">
                                        Services
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </Transition>
</template>
<script setup>
import { onMounted } from 'vue';
import RiveView from './Itech/ui/RiveView.vue';
import riveSrc from '@assets/rives/developments.riv'

const emits = defineEmits(['click'])
const click = () => {
    emits('click')
}


onMounted(() => {
})
</script>