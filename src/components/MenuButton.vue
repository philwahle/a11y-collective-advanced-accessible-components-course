<script setup lang="ts">
import { ref } from 'vue';

const isOpenRef = ref<boolean>(false);
const menuButtonRef = ref<HTMLButtonElement>();


const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void
}>();

function toggleMenu() {
    isOpenRef.value = !isOpenRef.value;
    emit('update:isOpen', isOpenRef.value);
}

function closeMenu() {
    isOpenRef.value = false;
}

defineExpose({
    menuButtonRef,
    closeMenu
});

</script>

<template>
    <button
        ref="menuButtonRef"
        type="button"
        @click="toggleMenu"
        :aria-expanded="isOpenRef"
        :aria-label="isOpenRef ? 'Close menu' : 'Open menu'"
        class="flex place-items-center rounded-md bg-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        :class="{
            'focus-visible:outline-gray-200': !isOpenRef,
            'focus-visible:outline-purple-500': isOpenRef
        }"
    >

        <!-- Menu icon -->
        <svg
            v-if="!isOpenRef"
            class="w-6 h-6 inline-block mr-2"
            role="presentation"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            ></path>
        </svg>

        <!-- x icon -->
        <svg
            v-else
            fill="none"
            role="presentation"
            class="w-6 h-6 inline-block mr-2"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            ></path>
        </svg>


        <span v-if="!isOpenRef">
            Menu
        </span>

        <span v-else>
            Close Menu
        </span>
    </button>
</template>