<script setup lang="ts">
import { inject } from 'vue';

const tablist = inject('tablist') as any;

const navigate = (event: KeyboardEvent) => {

    console.log(event.key);

    if (event.key === 'ArrowRight') {
        if (tablist.activeTabRef.value < tablist.itemsCountRef.value) {
            tablist.setActiveTab(tablist.activeTabRef.value + 1);
        } else {
            tablist.setActiveTab(1);
        }
    }

    if (event.key === 'ArrowLeft') {
        if (tablist.activeTabRef.value > 1) {
            tablist.setActiveTab(tablist.activeTabRef.value - 1);
        } else {
            tablist.setActiveTab(tablist.itemsCountRef.value);
        }
    }



}
</script>

<template>
    <div @keydown="navigate">
        <slot></slot>
    </div>
</template>