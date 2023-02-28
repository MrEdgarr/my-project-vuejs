import AuthServices from "../../api/modules/people"
const state = {
    people: [],
}
const getters = {}
const mutations = {
    SET_PEOPLE(state, payload) {
        state.people = payload
        console.log(payload)
    },
}
const actions = {
    async fetchPeople({ commit }, { peopleId }) {
        try {
            const { data } = await AuthServices.getPeople(peopleId)
            commit("SET_PEOPLE", data)
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
