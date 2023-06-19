<script setup lang="ts">
import { inject } from 'vue';

const tablist = inject('tablist');

const navigate = (event: KeyboardEvent) => {

    console.log(event.key);

    if (event.key === 'ArrowRight') {
        (tablist as any).setActiveTab((tablist as any).activeTabRef.value + 1);
    }

    if (event.key === 'ArrowLeft') {
        (tablist as any).setActiveTab((tablist as any).activeTabRef.value - 1);
    }
}
</script>

<template>
    <div @keydown="navigate">
        <slot></slot>
    </div>
</template>