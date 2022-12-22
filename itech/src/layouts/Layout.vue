<template>
    <Header></Header>
    <!-- <div class="p-[50px]"></div> -->
    <slot/>
    <Container>
        <slot name="content"></slot>
    </Container>

</template>
<script setup>
import Container from './inc/Container.vue';
import Header from './inc/Header.vue';
</script>

<style lang="scss" scoped>

</style>