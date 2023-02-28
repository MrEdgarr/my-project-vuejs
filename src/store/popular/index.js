import AuthServices from "../../api/modules/popular"
const state = {
    popular: [],
}
const getters = {
    popular: (state) => state.popular,
}
const mutations = {
    SET_POPULAR(state, payload) {
        state.popular = payload
        console.log(payload)
    },
}
const actions = {
    async fetchPopular({ commit }) {
        try {
            const { data } = await AuthServices.getPopular()
            commit("SET_POPULAR", data.results)
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
