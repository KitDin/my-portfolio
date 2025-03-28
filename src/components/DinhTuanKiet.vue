<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="name" :style="{ fontSize: size + 'px' }">
        <div class="box pst-down"></div>
        DINHTUANKIET
        <div class="box pst-up"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    size: { type: Number, default: 200 }
});
</script>

<style scoped>
.name {
    font-family: "Zen Dots", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 200px;
    width: fit-content;
    white-space: nowrap;
    position: relative;
    color: #262626;
}

.name .box {
    height: 20px;
    background-color: #262626;
    position: absolute;
}

.pst-down {
    width: 750px;
    bottom: 0;
    left: 460px;
}

.pst-up {
    width: 800px;
    top: 0;
    right: 0;
}
</style>