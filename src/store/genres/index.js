import AuthServices from "../../api/modules/genres"
const state = {
    genres: [],
}
const getters = {}
const mutations = {
    SET_GENRES(state, payload) {
        state.genres = payload
        console.log(payload)
    },
}
const actions = {
    async fetchGenres({ commit }) {
        try {
            const { data } = await AuthServices.getGenres()
            commit("SET_GENRES", data)
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
