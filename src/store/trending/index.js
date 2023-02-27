import AuthServices from "../../api/modules/trending"
const state = {
    trending: [],
}
const getters = {}
const mutations = {
    SET_TRENDING(state, payload) {
        state.trending = payload
        console.log(payload)
    },
}
const actions = {
    async trending({ commit }, { type, time }) {
        try {
            const { data } = await AuthServices.getTrending(type, time)
            commit("SET_TRENDING", data)
        } catch (error) {
            console.log(error)
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
