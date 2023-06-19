<script setup lang="ts">

import { ref, inject, onMounted, watch, Ref } from 'vue'

const tablist = inject('tablist');
const currentCountRef = ref(0);
const currentActiveRef = ref(false);

onMounted(() => {
    (tablist as any).tabCountRef.value++;
    currentCountRef.value = (tablist as any).tabCountRef.value;
})

watch(((tablist as any).activeTabRef as Ref<number>), (value) => {
    currentActiveRef.value = value === currentCountRef.value
});

</script>

<template>
    <div
        role="tabpanel"
        :class="{
            'hidden': !currentActiveRef
        }"
        :aria-labelledby="'tab-' + currentCountRef"
        :id="'panel-' + currentCountRef"
        :aria-hidden="!currentActiveRef"
    >
        <slot></slot>
    </div>
</template>