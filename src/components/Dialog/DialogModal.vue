<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import { DialogProviderProp } from './interfaces';

interface Props {
    ariaLabel?: string;
}

const dialogRef = ref<HTMLDialogElement | null>(null);

const { ariaLabel } = defineProps<Props>();

const { isOpen, close } = inject<DialogProviderProp>('dialog');

watch(isOpen, (value) => {
    if (value) {
        dialogRef.value?.showModal();
    } else {
        dialogRef.value?.close();
    }
});

</script>

<template>
    <dialog
        :aria-label="ariaLabel"
        ref="dialogRef"
    >
        <slot :close="close"> </slot>
    </dialog>
</template>