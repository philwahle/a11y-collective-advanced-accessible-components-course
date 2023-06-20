<script setup lang="ts">

import { ref, inject, onMounted, watch } from 'vue'

import { SliderInjectProps } from './interfaces';

const slider = inject<SliderInjectProps>('slider');
const currentCountRef = ref(0);
const currentActiveRef = ref(false);
const currentSlideRef = ref<HTMLLIElement>();

onMounted(() => {
    if (!slider) return;
    slider.itemsCountRef.value++;
    currentCountRef.value = slider.itemsCountRef.value;
})

watch((slider as SliderInjectProps).activeSlideRef, (value) => {
    currentActiveRef.value = value === currentCountRef.value

    if (currentActiveRef.value) {
        currentSlideRef.value?.scrollIntoView()
    }
});


</script>

<template>
    <li ref="currentSlideRef">
        <slot> </slot>
    </li>
</template>