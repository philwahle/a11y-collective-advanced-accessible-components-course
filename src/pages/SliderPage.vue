<script setup lang="ts">
import LinkWrapper from './../components/LinkWrapper.vue';
import {
    Slider,
    SliderItem,
    SliderThumb,
    SliderThumbs,
    SliderTrack,
    SliderNavigation,
} from './../components/Slider'

</script>

<template>
    <div>
        <h1 class="font-extrabold text-4xl mb-8">Slider</h1>

        <h2 class="font-extrabold text-3xl mb-8">Example Slider</h2>

        <div class="max-w-sm">

            <Slider class="w-full">
                <SliderTrack class="space-x-8 bg-slate-200 scroll-smooth snap-x snap-mandatory">
                    <SliderItem class="flex-shrink-0 w-full grid place-content-center snap-center ">
                        <img
                            class="p-4 aspect-square"
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80"
                            alt="Abstrakte Kunst rendering (1 von 3)"
                        >
                    </SliderItem>
                    <SliderItem class="flex-shrink-0 w-full grid place-content-center snap-center">
                        <img
                            class="p-4 aspect-square"
                            src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80"
                            alt="Abstrakte Kunst painting (2 von 3)"
                        >
                    </SliderItem>
                    <SliderItem class="flex-shrink-0 w-full grid place-content-center snap-center">
                        <img
                            class="p-4 aspect-square"
                            src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80"
                            alt="Abstrakte Kunst blau (3 von 3)"
                        >
                    </SliderItem>
                </SliderTrack>

                <div class="flex justify-between w-full pt-5">
                    <SliderThumbs class="flex space-x-2 ">
                        <SliderThumb
                            class="aspect-square  focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 "
                        >
                            <img
                                aria-hidden="true"
                                class="focus-visible:outline-none"
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=20"
                                alt="#"
                            >
                        </SliderThumb>
                        <SliderThumb
                            class="aspect-square  focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 "
                        >
                            <img
                                aria-hidden="true"
                                class="focus-visible:outline-none"
                                src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=20"
                                alt="#"
                            >
                        </SliderThumb>
                        <SliderThumb
                            class="aspect-square  focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 "
                        >
                            <img
                                aria-hidden="true"
                                class="focus-visible:outline-none"
                                src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=20"
                                alt="#"
                            >
                        </SliderThumb>
                    </SliderThumbs>

                    <SliderNavigation v-slot="{ next, prev }">
                        <div class="space-x-5">
                            <button
                                class="w-14 h-10 bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                type="button"
                                @click="prev()"
                            >
                                Prev
                            </button>

                            <button
                                class="w-14 h-10 bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                                type="button"
                                @click="next()"
                            >
                                Next
                            </button>
                        </div>
                    </SliderNavigation>
                </div>
            </Slider>



        </div>

        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
        </footer>
    </div>
</template>