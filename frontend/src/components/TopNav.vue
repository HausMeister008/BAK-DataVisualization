<script setup lang="ts">

import { ref } from 'vue'
import SocialMediaLinks from './SocialMediaLinks.vue'

const allto_the_left = ref(true)
const allto_the_right = ref(false)
const top_nav = ref()


const possible_routes: string[] = [
    "Bankenbarometer 2021",
    "Inhalt",
    "Executive Summary",
    "Wirtschaftspolitisches Umfeld",
    "Geschäftserfolg",
    "Bilanzgeschäft",
    "Vermögensverwaltung",
    "Beschäftigung bei den Banken der Schweiz"
]

var mouseover_nav = false
var interval = setInterval(() => { })
function set_mouseover_nav(v: boolean) {
    mouseover_nav = v
    if (!v) {
        clearInterval(interval)
    }
}

function scrollnav(event: MouseEvent) {
    var cX = event.clientX
    // var cY = event.clientY
    var wX = top_nav.value.clientWidth
    var acc = Math.sqrt((wX / 2 - cX) ** 2) / (wX / 20)
    if (cX < wX / 2) {
        acc = acc * -1
    }
    if (mouseover_nav) {
        clearInterval(interval)
        interval = setInterval(() => {
            if ((top_nav.value.scrollLeft < top_nav.value.scrollLeftMax && acc > 0) || (top_nav.value.scrollLeft > 0 && acc < 0) && mouseover_nav) {
                top_nav.value.scrollBy(acc, 0)
                allto_the_right.value = true
                allto_the_left.value = true
            } else {
                clearInterval(interval)
                if (top_nav.value.scrollLeft >= top_nav.value.scrollLeftMax) {
                    allto_the_right.value = true
                    allto_the_left.value = false
                } else if (top_nav.value.scrollLeft == 0) {
                    allto_the_left.value = true
                    allto_the_right.value = false
                }
                console.log(document.getElementById('navigation')?.scrollLeft, wX)
            }
        }, 5)
    }
}
</script>

<template>
    <div id="navigation">
        <router-link to="/siteoverview" id="site_overview_link">
            <svg
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 40 40"
                alt="Menu"
                id="menu_svg"
                aria-hidden="true"
                style="vertical-align:middle"
            >
                <g>
                    <path
                        d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"
                    />
                </g>
            </svg>
        </router-link>
        <div
            id="scrollable_nav"
            :class="allto_the_left && allto_the_right ? 'nav_both_shadows' : allto_the_right ? 'allto_the_right' : allto_the_left ? 'allto_the_left' : ''"
            @mouseover="set_mouseover_nav(true)"
            @mouseleave="set_mouseover_nav(false)"
            @mousemove="scrollnav"
            ref="top_nav"
        >
            <router-link
                class="routerlinks"
                v-for="route, index in possible_routes"
                :to="'/info/' + route"
                :id="'TopNavLink' + index.toString()"
            >{{ route }}</router-link>
        </div>
        <social-media-links />
    </div>
</template>

<script lang="ts">


</script>

<style scoped>
#navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav_height);
    background-color: rgba(236, 239, 241, 0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
}
#site_overview_link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 16px;
    margin: 0;
    border-right: 1px solid #d6d9d9;
}
#menu_svg {
    width: 24px;
    height: 24px;
    position: relative;
    fill: rgba(48, 56, 59, 1);
    border: none;
}
#scrollable_nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: calc(100% - 24px);
    height: 100%;
    transition: box-shadow 0.2s ease;
}
#scrollable_nav::-webkit-scrollbar {
    display: none;
}
.allto_the_left {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px -8px inset,
        rgba(0, 0, 0, 0.2) -14px 0px 14px -8px inset;
}
.allto_the_right {
    box-shadow: rgba(0, 0, 0, 0.2) 14px 0px 14px -8px inset,
        rgba(0, 0, 0, 0.2) 0px 0px 0px -8px inset;
}
.nav_both_shadows {
    box-shadow: rgba(0, 0, 0, 0.2) 14px 0px 14px -8px inset,
        rgba(0, 0, 0, 0.2) 0px 0px 0px -8px inset,
        rgba(0, 0, 0, 0.2) 0px 0px 0px -8px inset,
        rgba(0, 0, 0, 0.2) -14px 0px 14px -8px inset;
}
.routerlinks {
    position: relative;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
    white-space: nowrap;
    color: rgba(48, 56, 59, 1);
    border: none;
    border-right: 1px solid #d6d9d9;
}
.routerlinks::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #babcbd;
    transform-origin: center;
    transform: scaleX(0);
    transition: transform 0.3s;
}
.routerlinks:hover::after,
.router-link-active::after {
    transform: scaleX(1);
}
</style>