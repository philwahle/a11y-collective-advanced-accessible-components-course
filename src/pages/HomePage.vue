<script setup lang="ts">
import LinkWrapper from '../components/LinkWrapper.vue';

import routes from '../routes';
</script>

<template>
    <h1 class="text-gray-500 text-2xl font-semibold">Home</h1>

    <ul>
        <li
            v-for="route in routes.filter(route => route.meta?.label)"
            :key="route.name"
        >
            <LinkWrapper
                :name="route?.name?.toString()"
                :label="(route.meta as any)?.label ?? route.name?.toString()"
            />
        </li>
    </ul>
</template>