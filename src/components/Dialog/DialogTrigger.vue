<script setup lang="ts">
import { inject } from 'vue';
import { DialogProviderProp } from './interfaces';

const dialog = inject<DialogProviderProp>('dialog');



</script>

<template>
    <button
        @click="dialog?.open()"
        type="button"
    >
        <slot> </slot>
    </button>
</template>