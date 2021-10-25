const state = {routes:[]}
const getters = {totalKm() {
    return state.routes;
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