<script setup lang="ts">
import { ref, } from 'vue';


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

</script>

<template>
    <li class="relative inline-flex items-center">
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
                aria-label="Toggle {{ label }} submenu"
                :aria-expanded="isOpenRef"
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
                class="absolute list-none aria-[hidden]:hidden"
            >
                <li
                    v-for="item in submenu"
                    :key="item.label"
                >
                    <a :href="item.to">{{ item.label }} <span class="sr-only"> {{ label }}</span>
                    </a>
                </li>

            </ul>

        </template>

    </li>
</template>