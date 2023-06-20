<script setup lang="ts">
import LinkWrapper from '../components/LinkWrapper.vue';

import {
    DialogTrigger,
    DialogModal,
    DialogWrapper,
} from '../components/Dialog'

</script>

<template>
    <div>

        <h1 class="font-extrabold text-4xl mb-8">Dialog</h1>

        <dialog-wrapper>
            <dialog-trigger
                class="flex place-items-center rounded-md bg-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
                Click Me
            </dialog-trigger>

            <dialog-modal
                ariaLabel="Test Modal"
                v-slot="{ close }"
                class="bg-white shadow-lg rounded-md px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
            >
                <div class="prose ">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sit tempore iure laudantium ex
                        tenetur eum nihil a ad voluptatum.</p>


                </div>

                <footer class="mt-6 flex space-x-4">
                    <button
                        @click="close()"
                        class="flex place-items-center rounded-md bg-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                        Close
                    </button>

                    <button
                        class="flex place-items-center rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                        Test 1
                    </button>

                    <button
                        class="flex place-items-center rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                        Test 2
                    </button>
                </footer>
            </dialog-modal>

        </dialog-wrapper>


        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
        </footer>
    </div>
</template>