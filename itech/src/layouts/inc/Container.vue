<template>
    <div class="w-[90%] mx-auto"
    :class="class">
        <slot/>
    </div>
</template>
<script setup>
const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})
</script>