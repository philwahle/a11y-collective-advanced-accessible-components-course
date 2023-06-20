<script setup lang="ts">

import { inject } from 'vue';
import { SliderInjectProps } from './interfaces';

const slider = inject('slider') as SliderInjectProps;

const navigate = (event: KeyboardEvent) => {

    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
        return
    }

    if (event.key === 'ArrowRight') {
        slider.next();
    }

    if (event.key === 'ArrowLeft') {
        slider.prev();
    }

    slider.sliderThumbsRef.value[slider.activeSlideRef.value - 1].focus();

}
</script>

<template>
    <ul
        @keydown="navigate"
        role="tablist"
        aria-label="Navigate Slides"
    >
        <slot></slot>
    </ul>
</template>