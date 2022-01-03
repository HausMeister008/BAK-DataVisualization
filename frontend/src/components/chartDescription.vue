<script setup lang="ts">
import {onMounted } from 'vue'

export interface DescriptionProperties {
    headline: string,
    content: string[]|string,
}
const props = defineProps<DescriptionProperties>();

</script>

<template>

<div class="description">
    <h1>{{ props.headline }}</h1>
    <p
        class="description_content"
        v-if="typeof (props.content) == 'object'"
        v-for="paragraph in props.content"
    >
    {{paragraph}}
    </p>
    <p class="description_content" v-else>
        {{props.content}}
    </p>
</div>
</template>

<style scoped>
.description {
    padding: 5% 0;
    height: 45%;
    max-width: 100%;
    min-width: 30ch;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}
.description h1{
    margin:0;
}
.description_content {
    padding: 2rem;
    margin: 0;
    line-height: 1.2;
}
</style>