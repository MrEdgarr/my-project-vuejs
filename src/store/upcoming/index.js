import AuthServices from "../../api/modules/upcoming"
const state = {
    upcoming: [],
}
const getters = {
    upcoming: (state) => state.upcoming,
}
const mutations = {
    SET_UPCOMING(state, payload) {
        state.upcoming = payload
    },
}
const actions = {
    async fetchUpcoming({ commit }) {
        try {
            const { data } = await AuthServices.getUpcoming()
            commit("SET_UPCOMING", data)
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
