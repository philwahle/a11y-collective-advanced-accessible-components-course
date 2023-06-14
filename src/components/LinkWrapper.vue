<script setup lang="ts">

interface Props {
    name?: string
    label?: string
}

const { name, label } = withDefaults(defineProps<Props>(), {
    name: 'pages.home',
    label: 'Back home'
});

</script>

<template>
    <router-link
        :to="{ name }"
        class="text-indigo-500 hover:text-indigo-700 underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 rounded-md text-center text-sm"
    >
        {{ label }}
    </router-link>
</template>