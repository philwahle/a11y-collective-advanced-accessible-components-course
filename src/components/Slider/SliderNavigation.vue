<script setup lang="ts">

import { inject } from 'vue'
import { SliderInjectProps } from './interfaces';


const { next, prev } = inject('slider') as SliderInjectProps;

</script>

<template>
    <div>
        <slot
            :next="next"
            :prev="prev"
        > </slot>
    </div>
</template>