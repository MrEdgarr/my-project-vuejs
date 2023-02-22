const state = {
    click_Bars: false,
    click_Search: false,
    click_User: false,
}
const getters = {
    click_Bars: (state) => state.click_Bars,
    click_Search: (state) => state.click_Search,
    click_User: (state) => state.click_User,
}
const mutations = {
    SET_CLICK_BARS(state, payload) {
        state.click_Bars = payload
    },
    SET_CLICK_SEARCH(state, payload) {
        state.click_Search = payload
    },
    SET_click_User(state, payload) {
        state.click_User = payload
    },
}
const actions = {
    handleClick({ commit }, value) {
        if (value === "bars") {
            commit("SET_CLICK_BARS", (this.click_Bars = !this.click_Bars))
            commit("SET_CLICK_SEARCH", (this.click_Search = false))
            commit("SET_click_User", (this.click_User = false))
        }
        if (value === "search") {
            commit("SET_CLICK_BARS", (this.click_Bars = false))
            commit("SET_CLICK_SEARCH", (this.click_Search = !this.click_Search))
            commit("SET_click_User", (this.click_User = false))
        }
        if (value === "user") {
            commit("SET_CLICK_BARS", (this.click_Bars = false))
            commit("SET_CLICK_SEARCH", (this.click_Search = false))
            commit("SET_click_User", (this.click_User = !this.click_User))
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
