<script setup lang="ts">
import LinkWrapper from './../components/LinkWrapper.vue';

</script>

<template>
    <div>

        <h1 class="font-extrabold text-4xl mb-4">Accordion</h1>
        <h2 class="font-semibold text-2xl mb-4">FAQ</h2>


        <div class="max-w-sm flex gap-4 flex-col">

            <details class="bg-white shadow-lg rounded-lg group">
                <summary class="hover:cursor-pointer p-4 text-gray-600 hover:underline ">
                    <h3>
                        <svg
                            class="inline-block mr-2 w-4 h-4 text-blue-700 group-open:rotate-90 transition-transform duration-150"
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            ></path>
                        </svg>
                        Lorem ipsum dolor sit amet?

                    </h3>
                </summary>

                <div class="prose p-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nobis beatae iusto doloribus
                        architecto. Pariatur neque vitae a natus nisi.
                    </p>
                </div>
            </details>

            <details class="bg-white shadow-lg rounded-lg group">
                <summary class="hover:cursor-pointer p-4 text-gray-600 hover:underline ">
                    <h3>
                        <svg
                            class="inline-block mr-2 w-4 h-4 text-blue-700 group-open:rotate-90 transition-transform duration-150"
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            ></path>
                        </svg>
                        Lorem ipsum dolor sit amet?

                    </h3>
                </summary>

                <div class="prose p-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nobis beatae iusto doloribus
                        architecto. Pariatur neque vitae a natus nisi.
                    </p>
                </div>
            </details>



        </div>

        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
        </footer>
    </div>
</template>

<style scoped>
::-webkit-details-marker,
::marker {
    display: none;
    content: '';
}
</style>