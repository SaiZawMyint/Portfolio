import { createStore } from "vuex";

const route = {
    state: () => ({
        step: 0,
        transitions: ['move-out', 'comp-2']
    }),
    actions: {
        getTranstions({ state }) {
            return state.transitions[state.step]
        }
    }
}

const searchBar = {
    state: () => ({
        show: false,
    }),
    actions: {
        activeSearchBar({ state }) {
            state.show = true;
        },
        inActiveSearchBar({ state }) {
            state.show = false;
        }
    }
}

const store = createStore({
    modules: {
        route,
        searchBar
    }
})

export default store