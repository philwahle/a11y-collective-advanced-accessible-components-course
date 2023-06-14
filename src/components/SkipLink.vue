<script setup lang="ts">
interface Props {
    to?: string
    label?: string
}

const { to, label } = withDefaults(defineProps<Props>(), {
    to: '#main',
    label: 'Skip to main content'
});

</script>

<template>
    <div
        class="absolute rounded-md bg-white z-50 left-0 top-0 m-0 px-3 py-2 -translate-x-full focus-within:m-2 focus-within:translate-x-0 focus-within:ring-4 transition-transform motion-reduce:duration-0 duration-75 ring-indigo-500 shadow-md">
        <a
            :href="to"
            class="focus:outline-none"
        >{{ label }}</a>
    </div>
</template>