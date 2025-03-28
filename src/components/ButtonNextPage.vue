<template>
    <div @click="emitNext" class="navigate-next">
        <i class="bi bi-arrow-right"></i>
    </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(['Next']);

const emitNext = () => {
    emit('Next');
};
</script>


<style scoped>
.navigate-next {
    font-size: 38px;
    width: 48px;
    height: 48px;
    background: linear-gradient(90deg, #00c8ff00, #00ff73);
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 12px;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    transition: width 0.3s ease-in-out;
}

.navigate-next i {
    margin-top: 4px;
    transition: font-size 0.3s ease-in-out;
}

.navigate-next:hover {
    width: 200px;
}

.navigate-next:hover i {
    font-size: 40px;
}
</style>
