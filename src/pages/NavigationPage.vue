<script setup lang="ts">
import LinkWrapper from './../components/LinkWrapper.vue';
import NavigationMenuTopItem from '../components/NavigationMenuTopItem.vue';

const westernSubmenuItems = [
    { label: "Western", href: '#' },
    { label: "Crime", href: '#' },
    { label: "Classic", href: '#' },
]

const contactSubmenuItems = [
    { label: "FAQ", href: '#' },
    { label: "Your Account", href: '#' },
]
</script>

<template>
    <div>

        <h1 class="font-extrabold text-4xl mb-8">Naviagtion component</h1>

        <nav
            aria-label="Main"
            class="bg-white rounded-md shadow-md w-fit px-8 py-2"
        >
            <ul class="list-none space-x-2 inline-flex items-center">
                <NavigationMenuTopItem label="Home"></NavigationMenuTopItem>
                <NavigationMenuTopItem
                    label="Posters"
                    :submenu="westernSubmenuItems"
                ></NavigationMenuTopItem>
                <NavigationMenuTopItem
                    label="Contact"
                    :submenu="contactSubmenuItems"
                ></NavigationMenuTopItem>

                <li class="flex items-center">
                    <a
                        href="#"
                        class="w-12 h-12 bg-red-500 rounded-full flex items-center group justify-center hover:bg-red-600"
                    >

                        <span class="sr-only">Shoping Card</span>

                        <svg
                            class="w-6 h-6 text-white group-hover:text-red-100"
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
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            ></path>
                        </svg>


                    </a>
                </li>
            </ul>

        </nav>

        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
        </footer>

</div></template>