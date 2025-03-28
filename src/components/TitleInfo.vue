<template>
    <div class="title-info">
        <!-- Add your content here -->
        <h1>{{ title }}</h1>
        <div class="box"></div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    title: { type: String, default: 'Title' }
});
</script>
<style scoped>
h1 {
    font-size: 48px;
    margin-bottom: 6px;
}

.box {
    width: 74px;
    height: 6px;
    background-color: #000;
}
</style>