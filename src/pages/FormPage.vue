<script setup lang="ts">
import LinkWrapper from '../components/LinkWrapper.vue';
import { FormWrapper, FormInput } from '../components/Form';
import { ref } from 'vue'

const inputFieldsRef = ref<HTMLInputElement[]>([]);



</script>

<template>
    <div>

        <h1 class="font-extrabold text-4xl mb-8">Form</h1>

        <form-wrapper class="max-w-2xl mx-auto space-y-8">
            <fieldset class="bg-white p-8 rounded-lg shadow-lg">
                <legend class="text-white text-2xl font-semibold bg-blue-600 py-2 px-3 rounded-lg">
                    Subscirbe now
                </legend>


                <div class="flex space-x-5 ">
                    <form-input
                        label="First name"
                        id="firstname"
                        name="firstname"
                        required
                        autocomplete="given-name"
                        validation="We need your first name to send you our newsletters"
                        ref="inputFieldsRef"
                    />

                    <form-input
                        label="Last name"
                        id="lastname"
                        name="lastname"
                        required
                        autocomplete="family-name"
                        validation="We need your last name to send you our newsletters"
                        ref="inputFieldsRef"
                    />

                </div>

                <form-input
                    label="E-Mail address"
                    id="email"
                    class="mt-5"
                    name="email"
                    required
                    autocomplete="email"
                    validation="We need your email to send our newsletters to you"
                    ref="inputFieldsRef"
                />

            </fieldset>

            <button
                type="submit"
                class="flex place-items-center rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
                Subscribe
            </button>

        </form-wrapper>


        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
        </footer>
    </div>
</template>