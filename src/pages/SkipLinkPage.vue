<script setup lang="ts">
import SkipLink from './../components/SkipLink.vue';
import LinkWrapper from './../components/LinkWrapper.vue';
</script>

<template>
    <div>
        <SkipLink />
        <SkipLink
            to="#footer"
            label="Skip to footer"
        />

        <main
            id="main"
            class="prose"
        >
            <h1>Skip Link</h1>

            <h2>Lorem ipsum dolor sit amet.</h2>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dolorem libero amet iste tempora deserunt
                mollitia natus quidem ipsam! Nesciunt praesentium molestiae eum dolores reprehenderit sunt odio eos nam
                enim, minus dolorum asperiores iste delectus reiciendis? Asperiores facere aliquid ex quae error iure,
                aliquam harum cum! Itaque, ex! Nam, culpa.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dolorem libero amet iste tempora deserunt
                mollitia natus quidem ipsam! Nesciunt praesentium molestiae eum dolores reprehenderit sunt odio eos nam
                enim, minus dolorum asperiores iste delectus reiciendis? Asperiores facere aliquid ex quae error iure,
                aliquam harum cum! Itaque, ex! Nam, culpa.
            </p>

            <h2>Lorem ipsum dolor sit amet.</h2>

            <button
                class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Button</button>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dolorem libero amet iste tempora deserunt
                mollitia natus quidem ipsam! Nesciunt praesentium molestiae eum dolores reprehenderit sunt odio eos nam
                enim, minus dolorum asperiores iste delectus reiciendis? Asperiores facere aliquid ex quae error iure,
                aliquam harum cum! Itaque, ex! Nam, culpa.
            </p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dolorem libero amet iste tempora deserunt
                mollitia natus quidem ipsam! Nesciunt praesentium molestiae eum dolores reprehenderit sunt odio eos nam
                enim, minus dolorum asperiores iste delectus reiciendis? Asperiores facere aliquid ex quae error iure,
                aliquam harum cum! Itaque, ex! Nam, culpa.
            </p>

            <footer id="footer">
                <link-wrapper />
            </footer>

        </main>

    </div>
</template>