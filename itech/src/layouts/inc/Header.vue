<template>
    <header 
    style="z-index: 999;"
    class="fixed w-full p-4 top-0 left-0">
        <Container class="flex items-center justify-between">
            <div class="logo">
                <router-link :to="{name: 'home'}">
                    <h1 class="text-3xl font-bold text-sys-primary">
                        i Tech
                    </h1>
                </router-link>
            </div>
            <nav class="nav flex items-center">
                <router-link :to="{name: 'home'}" class="px-2 text-sys-primary">
                    Home
                </router-link>
                <router-link :to="{name: 'home'}" class="w-10 h-10 flex items-center justify-center rounded-full rounded-hover ring-slate-300/50 ring-1 text-sys-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </router-link>
                
            </nav>
        </Container>
        <ProgressBar class="absolute top-[100%] left-0"/>
    </header>
</template>

<script setup>
import ProgressBar from '../../components/Itech/components/ProgressBar.vue';
import Container from './Container.vue';
</script>