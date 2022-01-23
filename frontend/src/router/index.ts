import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

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

var routes = [{
    path: '/',
    component: Home
}, {
    path: `/info/:route`,
    name: 'infoSite',
    component: () => import(`../components/InfoSite.vue`),
    props: {
        default: true,
        index: (route: { params: { route: string } })=>{ possible_routes.indexOf(route.params.route)}
    }
}, {
    path: `/siteoverview`,
    name: 'siteOverview',
    component: () => import(`../components/SiteOverview.vue`),
}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router