<script setup lang="ts">

import { onMounted, provide, ref } from 'vue';


const activeTabRef = ref(0);
const itemsCountRef = ref(0);
const tabCountRef = ref(0);

provide('tablist', {
    activeTabRef,
    itemsCountRef,
    tabCountRef,
    setActiveTab: (tab: any) => {
        activeTabRef.value = tab;
        console.log(tab);
    },
});

onMounted(() => {
    activeTabRef.value = 1;
});


</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>