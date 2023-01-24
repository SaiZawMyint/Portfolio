import { createStore } from "vuex";

const route = {
    state: ()=>({
        step: 0,
        transitions: ['move-out','comp-2']
    }),
    actions: {
        getTranstions({state}){
            return state.transitions[state.step]
        }
    }
}

const store = createStore({
    modules:{
        route
    }
})

export default store