<script setup lang="ts">
import {onMounted } from 'vue'

export interface DescriptionProperties {
    headline: string,
    description: string,
    content: string[]|string,
}
const props = defineProps<DescriptionProperties>();

</script>

<template>

<div class="description">
    <h1 class="description_headline">{{ props.headline }}</h1>
    <p class="description_content description_text">
        {{props.description}}
    </p>
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
    padding: 0 0 0 80px;
    height: 45%;
    max-width: 100%;
    min-width: 30ch;
}
.description * {
    transition: transform .75s ease-in-out, opacity .75s ease-in-out;
}
.description h1{
  transition-delay: .2s !important;
}
.description p{
  transition-delay: .3s !important;
}


.data_tag.before-enter > .charts + .description *{
    opacity: 0;
    transform: translateX(3rem);
}
.data_tag.before-enter > .description *{
    opacity: 0;
    transform: translateX(-3rem);
}
.data_tag.enter > .description *{
    opacity: 1;
    transform: translateX(0);
}
.description h1{
    margin:0;
}
.description_content, .description_headline{
    padding: 1rem;
    margin: 0;
    line-height: 1.2;

}
.description_headline{
    font-size:1.5rem;
}
.description_text{
    font-family: LibreFranklinMedium;
}
</style>