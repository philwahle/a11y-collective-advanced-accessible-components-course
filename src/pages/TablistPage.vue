<script setup lang="ts">
import LinkWrapper from './../components/LinkWrapper.vue';
import {
    TabButtonGroup,
    TabButton,
    TabPanel,
    TabPanels,
    Tablist,
} from './../components/Tablist'

</script>

<template>
    <div>

        <h1 class="font-extrabold text-4xl mb-8">Tablist</h1>


        <h2 class="font-extrabold text-3xl mb-8">Example Tablist</h2>

        <div class="max-w-sm">

            <Tablist>
                <TabButtonGroup class="space-x-5">
                    <TabButton
                        class=" px-3 py-2 rounded-md font-medium focus-visible:ring-blue-500 focus-visible:ring-offset-4 data-[active='true']:bg-blue-500 data-[active='true']:text-white focus-visible:ring-4 border-blue-700 border text-lg text-blue-700 hover:text-white hover:bg-blue-500"
                    >
                        Description</TabButton>
                    <TabButton
                        class=" px-3 py-2 rounded-md font-medium focus-visible:ring-blue-500 focus-visible:ring-offset-4 data-[active='true']:bg-blue-500 data-[active='true']:text-white focus-visible:ring-4 border-blue-700 border text-lg text-blue-700 hover:text-white hover:bg-blue-500"
                    >
                        Details</TabButton>
                    <TabButton
                        class=" px-3 py-2 rounded-md font-medium focus-visible:ring-blue-500 focus-visible:ring-offset-4 data-[active='true']:bg-blue-500 data-[active='true']:text-white focus-visible:ring-4 border-blue-700 border text-lg text-blue-700 hover:text-white hover:bg-blue-500"
                    >
                        Reviews</TabButton>
                </TabButtonGroup>

                <TabPanels class="mt-8">
                    <TabPanel class="prose">
                        <h3>Description</h3>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi distinctio earum laboriosam sunt
                            unde! Porro expedita perferendis repellendus repellat quis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi distinctio earum laboriosam sunt
                            unde! Porro expedita perferendis repellendus repellat quis!</p>
                    </TabPanel>
                    <TabPanel class="prose">
                        <h3>Details</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi distinctio earum laboriosam sunt
                            unde! Porro expedita perferendis repellendus repellat quis!</p>

                    </TabPanel>
                    <TabPanel class="prose">
                        <h3>Reviews</h3>

                        <ul>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>


                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi distinctio earum laboriosam sunt
                            unde! Porro expedita perferendis repellendus repellat quis!</p>

                    </TabPanel>
                </TabPanels>
            </Tablist>

        </div>

        <footer
            id="footer"
            class="mt-24"
        >
            <link-wrapper />
    </footer>
</div></template>