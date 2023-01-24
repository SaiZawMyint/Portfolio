<template>
    <Transition name="comp-2">
        <div class="w-[60%] text-sm top-[50%] left-[50%] absolute translate-x-[-50%] text-slate-300 translate-y-[-50%] z-10 flex items-center
        justify-between">
            <div class="w-[40%] left-comp">
                <img src="@assets/img/our-service.svg" alt="Service" class="w-full">
            </div>
            <div class="bg-gray-100/20 w-[50%] right-comp backdrop-blur-sm rounded-lg ring-slate-100/50 ring-1 p-3">
                <h1 class="text-xl">Welcome to <span
                        class="text-sys-primary tracking-widest font-bold font-rub">iTech</span></h1>
                <p class="pt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum maiores corrupti molestiae
                    reiciendis doloremque dicta quam voluptate corporis iusto consectetur, itaque dolorum in nihil
                    voluptates unde nisi beatae blanditiis?
                </p>
                <div class="mt-8 flex items-center justify-start">
                    <router-link :to="{ name: 'service' }"
                        class="rounded-hover px-8 py-2 mr-3 rounded-lg backdroup-blur-sm ring-sky-400/50 ring-1 transition-all">
                        Services
                    </router-link>
                </div>
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
