<template>
    <header 
    style="z-index: 999;"
    class="fixed w-full p-2 border-b-2 border-slate-600/50 top-0 left-0 bg-gray-600/40 backdrop-blur-sm dark:bg-gray-800 dark:border-slate-200">
        <Container class="flex items-center justify-between">
            <div class="logo">
                <router-link :to="{name: 'home'}">
                    <h1 class="text-2xl font-bold text-sys-primary">
                        i Tech
                    </h1>
                </router-link>
            </div>
            <nav class="nav flex items-center">
                <router-link :to="{name: 'home'}" class="px-2 text-sys-primary">
                    Home
                </router-link>
                <router-link :to="{name: 'home'}" class="px-2 text-sys-secondary">
                    Services
                </router-link>
                <router-link :to="{name: 'home'}" class="px-2 text-sys-secondary">
                    Projects
                </router-link>
                <router-link :to="{name: 'home'}" class="px-2 text-sys-secondary">
                    Abouts Us
                </router-link>
                <router-link :to="{name: 'home'}" class="px-2 text-sys-secondary">
                    Profile
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