const state = {
    click_Bars: false,
    click_Search: false,
    click_user: false,
}
const getters = {
    click_Bars: (state) => state.click_Bars,
    click_Search: (state) => state.click_Search,
    click_user: (state) => state.click_user,
}
const mutations = {
    SET_CLICK_BARS(state, payload) {
        state.click_Bars = payload
    },
    SET_CLICK_SEARCH(state, payload) {
        state.click_Search = payload
    },
    SET_CLICK_USER(state, payload) {
        state.click_user = payload
    },
}
const actions = {
    handleClick({ commit }, value) {
        if (value === "bars") {
            commit("SET_CLICK_BARS", (this.click_Bars = !this.click_Bars))
        }
        if (value === "search") {
            commit("SET_CLICK_SEARCH", (this.click_Search = !this.click_Search))
        }
        if (value === "user") {
            commit("SET_CLICK_USER", (this.click_user = !this.click_user))
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
