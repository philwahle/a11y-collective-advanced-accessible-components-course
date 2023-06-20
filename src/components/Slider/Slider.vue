<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import { SliderInjectProps } from './interfaces';

const activeSlideRef = ref(0);
const itemsCountRef = ref(0);
const thumbCountRef = ref(0);
const sliderThumbsRef = ref<HTMLButtonElement[]>([]);

provide<SliderInjectProps>('slider', {
    activeSlideRef,
    itemsCountRef,
    thumbCountRef,
    sliderThumbsRef,
    setActiveSlide: (slide: number) => {
        activeSlideRef.value = slide;
    },
    next: () => {
        if (activeSlideRef.value < itemsCountRef.value) {
            activeSlideRef.value = activeSlideRef.value + 1;
        } else {
            activeSlideRef.value = 1;
        }
    },
    prev: () => {
        if (activeSlideRef.value > 1) {
            activeSlideRef.value = activeSlideRef.value - 1;
        } else {
            activeSlideRef.value = itemsCountRef.value;
        }
    },
});


onMounted(() => {
    activeSlideRef.value = 1;
});

</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>