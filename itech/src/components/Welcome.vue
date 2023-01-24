<template>
    <Transition name="move-out">
        <div
            class="w-[60%] fade-up top-[50%] left-[50%] absolute translate-x-[-50%] text-slate-300 translate-y-[-50%] z-10 text-center">
            <h2 class="text-[4em] font-rub text-sys-primary">i Tech</h2>
            <span class="-mt-4 block flex items-center justify-center text-slate-300">
                <span class="pr-2 text-sys-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </span>
                Software Company
            </span>
            <p class="mt-4 max-w-[600px] mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ipsam perspiciatis eligendi.
            </p>
            <router-link :to="{name:'service'}"
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
    </Transition>
</template>
<script setup>
const emits = defineEmits(['click'])
const click = () => {
    emits('click')
}
</script>