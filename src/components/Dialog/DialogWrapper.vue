<script setup lang="ts">
import { provide, ref } from 'vue';
import { DialogProviderProp } from './interfaces';

const isOpen = ref(false);

provide<DialogProviderProp>('dialog', {
    isOpen,
    open: () => {
        isOpen.value = true;
        document.documentElement.classList.add('overflow-hidden');
    },
    close: () => {
        isOpen.value = false;
        document.documentElement.classList.remove('overflow-hidden');
    },
});


const navigate = (event: KeyboardEvent) => {

    if (event.key === 'Escape') {
        event.preventDefault();
        isOpen.value = false;
    }
};


</script>

<template>
    <div @keydown="navigate">
        <slot></slot>
    </div>
</template>