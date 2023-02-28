import AuthServices from "../../api/modules/trending"
const state = {
    trending: [],
}
const getters = {
    trending: (state) => state.trending,
}
const mutations = {
    SET_TRENDING(state, payload) {
        state.trending = payload
    },
}
const actions = {
    async fetchTrending({ commit }, { type, time }) {
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
