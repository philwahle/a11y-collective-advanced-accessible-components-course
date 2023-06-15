<script setup lang="ts">
import { ref } from 'vue';

interface NavItemProps {
    to?: string
    label?: string
}

interface Props extends NavItemProps {
    isDefaultOpen?: boolean
    submenu?: NavItemProps[]
}

const { isDefaultOpen, submenu, to, label } = withDefaults(defineProps<Props>(), {
    isDefaultOpen: false,
    submenu: undefined,
    to: '#',
    label: 'Menu item'
});

const isOpenRef = ref<boolean>(isDefaultOpen);
const hasChildren = ref<boolean>(!!submenu?.length);
const chevronButtonRef = ref<HTMLButtonElement>();
const listItemRef = ref<HTMLUListElement[]>([]);

const ariaLabel = `Toggle ${label} submenu`;

const manageKeyboardAccessOnItem = (event: KeyboardEvent) => {

    if (!hasChildren.value) {
        return;
    }

    // Leave submenu when pressing escape
    if (event.key === 'Escape') {
        isOpenRef.value = false;

        chevronButtonRef.value?.focus();
        return;
    }

    if (event.key === 'Tab') {
        const focusedElement = event.target as HTMLElement;
        const firstfirstFocusableElement = listItemRef.value[0].querySelector('a') as HTMLElement;
        const lastFocusableElement = listItemRef.value[listItemRef.value.length - 1].querySelector('a') as HTMLElement;

        // Leave submenu at the last link
        if (focusedElement === lastFocusableElement && !event.shiftKey) {
            isOpenRef.value = false;

            return;
        }

        // Leave submenu at the first link
        if (focusedElement === firstfirstFocusableElement && event.shiftKey) {
            isOpenRef.value = false;

            return;
        }
    }
}

</script>

<template>
    <li
        class="inline-flex items-center relative"
        :aria-expanded="isOpenRef"
        @mouseover="isOpenRef = true"
        @mouseleave="isOpenRef = false"
        @keydown="manageKeyboardAccessOnItem"
    >
        <a
            :href="to"
            class="py-2 no-underline hover:underline"
            :class="{
                'px-3.5': !hasChildren,
                'pl-3.5 pr-2': hasChildren,
            }"
        >
            {{ label }}
        </a>

        <template v-if="hasChildren">
            <button
                :aria-label="ariaLabel"
                :aria-expanded="isOpenRef"
                @click="isOpenRef = !isOpenRef"
                ref="chevronButtonRef"
            >
                <svg
                    class="h-5 w-5 "
                    :class="{ 'rotate-180': isOpenRef }"
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                </svg>
            </button>

            <ul
                :aria-hidden="!isOpenRef"
                class="absolute list-none aria-[hidden='true']:hidden top-full left-0 shadow-lg bg-white rounded-lg"
            >
                <li
                    v-for="item in submenu"
                    :key="item.label"
                    class="w-36"
                    ref="listItemRef"
                >
                    <a
                        :href="item.to ?? '#'"
                        class="no-underline hover:underline px-3.5 py-2 inline-block w-full hover:bg-gray-100"
                    >
                        {{ item.label }} <span class="sr-only"> {{ label }}</span>
                    </a>
                </li>
            </ul>
        </template>

    </li>
</template>