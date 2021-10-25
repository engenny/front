const state = {routes:[]}
const getters = {totalKm() {
    return state.routes;
    // return state.routes.reduce((acc, cur) => cur.finalKm - cur.initialKm + acc, 0);
}}
const mutations = {setRoutes(state, payload) {
    state.routes=payload;
}}
const actions = {defineRoutes(context, payload) {
    context.commit('setRoutes', payload)
}}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}