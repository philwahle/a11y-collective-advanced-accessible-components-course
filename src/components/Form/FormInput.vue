<script setup lang="ts">
import { ref, inject, Ref, watch } from 'vue';

interface Props {
    id: string;
    validation: string;
    label: string;
    autocomplete: string;
    required: boolean;
}

interface FormProviderProp {
    errors: Ref<{ id: string, message: string }[]>;
    isSubmitting: Ref<boolean>;
}

const { isSubmitting, errors } = inject<FormProviderProp>('form') as FormProviderProp;

const { id, validation, label, autocomplete, required } = defineProps<Props>();

const inputRef = ref<string>();
const ariaInvalidRef = ref(false);
const isValid = ref(true)

watch(isSubmitting, (_) => {
    isValid.value = inputRef.value !== '' && inputRef.value !== undefined;

    if (!isValid.value) {
        errors.value.push({
            id,
            message: validation
        })
        ariaInvalidRef.value = true;
    }
})

</script>

<template>
    <div class="flex flex-col w-full">
        <label
            class="text-gray-600 pb-2 text-sm font-semibold"
            :for="'form-' + id"
            :data-validation="validation"
        >
            <span>{{ label }}</span>
            <span
                v-if="required"
                aria-hidden="true"
                class="text-gray-500 pl-2"
            >(required)</span>
        </label>
        <input
            class="rounded-md  border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            :aria-describedby="id + '-validation'"
            :aria-invalid="ariaInvalidRef"
            type="text"
            :id="'form-' + id"
            :name="id"
            v-model="inputRef"
            :required="required"
            :autocomplete="autocomplete"
        />

        <span
            :id="id + '-validation'"
            v-if="!isValid"
            class="text-sm text-red-800 tracking-wide"
        >
            {{ validation }}
        </span>

    </div>
</template>