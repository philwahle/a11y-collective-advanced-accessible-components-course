<script setup lang="ts">
import { provide, Ref, ref, watch } from 'vue';


interface FormProviderProp {
    errors: Ref<{ id: string, message: string }[]>;
    isSubmitting: Ref<boolean>
}

const errors = ref([]);
const isSubmittingRef = ref(false);

const notificationFieldRef = ref<HTMLElement>()

provide<FormProviderProp>('form', {
    errors,
    isSubmitting: isSubmittingRef,
});

const submit = () => {
    isSubmittingRef.value = true;
}

watch(errors, (value) => {
    console.log('errors', value, value.length);

    if (value.length > 0) {
        notificationFieldRef.value?.focus()
    }
}, { deep: true })


</script>

<template>
    <form
        action="#"
        novalidate
        @submit.prevent="submit"
    >
        <div
            class="focus-visible:border-blue-500 focus-visible:border-4"
            ref="notificationFieldRef"
            aria-live="polite"
        >
            <div
                class="border-4 border-red-600 p-8 prose rounded-lg"
                v-if="Object.keys(errors).length > 0"
            >
                <h3>The form could not be submitted, because of several erros:</h3>

                <ul>
                    <li
                        v-for="({ id, message }, idx) in errors"
                        :key="id"
                    >
                        <a :href="'#form-' + id"> #{{ idx + 1 }}: {{ message }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <slot> </slot>

    </form>
</template>