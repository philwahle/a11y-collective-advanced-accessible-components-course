<script setup lang="ts">
import LinkWrapper from './../components/LinkWrapper.vue';

</script>

<template>
    <div>

        <h1 class="font-extrabold text-4xl mb-8">Teaser</h1>


        <h2 class="font-extrabold text-3xl mb-8">Example Teaser </h2>

        <div class="max-w-sm">

            <div class="w-full shadow-lg rounded-lg bg-white overflow-hidden  relative ">
                <div class="group flex">

                    <div class="w-2/5 flex-shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1686759909794-ee05d11074c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
                            alt=""
                            class="w-full h-full object-cover group-hover:brightness-75 transition-all ease-in-out"
                        />
                    </div>

                    <div class="w-full p-6 ">

                        <h3 class="font-semibold text-xl mb-3">
                            <a
                                href="#"
                                class="hover:text-blue-500 after:content-[''] after:absolute after:inset-0 transition-colors text-gray-600 ease-in-out "
                            >
                                Journey Poster
                            </a>
                        </h3>

                        <p class="font-normal text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                            perferendis!</p>

                        <span class="font-sm text-blue-900 font-bold mt-5 inline-block">9,99 €</span>
                    </div>
                </div>

                <div class="absolute bottom-0 right-0 z-10 pt-3 pl-3">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tl-lg">
                        Add to cart
                        <span class="sr-only"> Journey Poster</span>
                    </button>
                </div>

            </div>
        </div>

        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
        </footer>
    </div>
</template>