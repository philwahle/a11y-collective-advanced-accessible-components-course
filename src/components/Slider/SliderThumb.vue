<script setup lang="ts">
import { ref, VNodeRef, inject, onMounted, watch, } from 'vue'
import { SliderInjectProps } from './interfaces';

const buttonRef = ref<HTMLButtonElement>();

const $emit = defineEmits<{
    (e: 'click', value: VNodeRef | null): void
}>();

const slider = inject('slider') as SliderInjectProps;
const currentCountRef = ref(0);
const currentActiveRef = ref(false);

const click = () => {
    $emit('click', buttonRef);
    slider.setActiveSlide(currentCountRef.value);
}

onMounted(() => {
    slider.thumbCountRef.value++;
    currentCountRef.value = slider.thumbCountRef.value;
    slider.sliderThumbsRef.value?.push(buttonRef.value!);
})

watch(slider.activeSlideRef, (value) => {
    currentActiveRef.value = value === currentCountRef.value
});

</script>

<template>
    <li>
        <button
            :aria-label="'Slide ' + currentCountRef + ' of ' + slider.itemsCountRef.value"
            ref="buttonRef"
            :aria-controls="'slide-' + currentCountRef"
            :aria-selected="currentActiveRef"
            :tabindex="currentActiveRef ? 0 : -1"
            @click="click()"
            role="tab"
        >
            <slot> </slot>
        </button>
    </li>
</template>