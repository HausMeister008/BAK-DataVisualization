import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

var routes = [{
    path: '/',
    component: Home
}, {
    path: `/info/:route`,
    name: 'infoSite',
    component: () => import(`../components/InfoSite.vue`),
    props: true
}, {
    path: `/siteoverview`,
    name: 'siteOverview',
    component: () => import(`../components/SiteOverview.vue`),
    props: true
}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router