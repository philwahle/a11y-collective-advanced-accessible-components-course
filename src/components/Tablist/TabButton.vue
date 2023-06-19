<script setup lang="ts">
import { ref, VNodeRef, inject, onMounted, watch, Ref } from 'vue'

const buttonRef = ref<HTMLButtonElement>();

const $emit = defineEmits<{
    (e: 'click', value: VNodeRef | null): void
}>();

const tablist = inject('tablist');
const currentCountRef = ref(0);
const currentActiveRef = ref(false);

const click = () => {
    $emit('click', buttonRef);
    (tablist as any).setActiveTab(currentCountRef.value);
}

onMounted(() => {
    (tablist as any).itemsCountRef.value++;
    currentCountRef.value = (tablist as any).itemsCountRef.value;
})

watch(((tablist as any).activeTabRef as Ref<number>), (value) => {
    currentActiveRef.value = value === currentCountRef.value
    currentActiveRef.value && buttonRef.value?.focus();
});

</script>

<template>
    <button
        role="tab"
        ref="buttonRef"
        :aria-controls="'panel-' + currentCountRef"
        :aria-selected="currentActiveRef"
        :tabindex="currentActiveRef ? 0 : -1"
        :data-active="currentActiveRef"
        @click="click()"
    >
        <slot></slot>
    </button>
</template>