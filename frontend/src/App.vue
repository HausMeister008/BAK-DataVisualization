<script setup lang="ts">
import TopNav from './components/TopNav.vue'
</script>

<template>
  <top-nav></top-nav>
  <router-view v-slot="{ Component, route }" >
  <!-- :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass" -->
    <transition name="slide">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500&family=Open+Sans:wght@300&display=swap');
:root {
  --base:rgb(48,56,59) ;
  --anti_base: white;
  --box_shadows: #888888;
  --nav_height: 57px;
}
@font-face{
  font-family: LibreFranklin;
  src: url('../public/LibreFranclin/LibreFranklin-VariableFont_wght.ttf');
}
@font-face{
  font-family: LibreFranklinRegular;
  src: url('../public/LibreFranclin/LibreFranklin-Regular.ttf');
}
@font-face{
  font-family: LibreFranklinMedium;
  src: url('../public/LibreFranclin/LibreFranklin-Medium.ttf');
}
body {
  margin: 0;
  padding: 0;
}
*{
  box-sizing: border-box;
  color: var(--base)
}
#app {
  font-family: LibreFranklinRegular,Calibri, sans-serif;
  font-size: 1.1rem;
  line-height: 140%;
  /* text-align: center; */
  margin: 0;
  padding: 0;
  height: auto;
  width: 100%;
  overflow: auto;
  position: relative;
}
#app h1, h2,h3{
  font-weight: 500;
  font-family: LibreFranklinMedium, Calibri, sans-serif;
}
.page {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: var(--nav_height);
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 9;
}
.slide-enter-from {
  transform: translateX(100vw);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease;
}
.slide-leave-active .page, .slide-leave-to .page{
  overflow: hidden !important;
}
</style>
