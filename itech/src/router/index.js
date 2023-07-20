import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhoWeAre from '../components/WhoWeAre.vue'
import Welcome from '../components/Welcome.vue'
import store from '../stores/store.js'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        redirect: 'home',
        component: HomeView,
        children: [{
                path: 'home',
                name: 'home',
                component: Welcome
            },
            {
                path: 'services',
                name: 'service',
                component: WhoWeAre
            }
        ]
    }]
})
router.beforeEach((to, from, next) => {
    console.log(to.name)
    if (to.name == 'home') {
        store.state.route.step = 0
        store.state.searchBar.show = false
    }
    if (to.name == 'service') {
        store.state.route.step = 1
        store.state.searchBar.show = true
    }
    next()
})
export default router