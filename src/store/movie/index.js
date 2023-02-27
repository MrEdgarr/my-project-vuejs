import AuthServices from "../../api/modules/movies"
const state = {
    detail: [],
    videos: [],
}
const getters = {}
const mutations = {
    SET_MOVIE_DETAIL(state, payload) {
        state.detail = payload
        console.log(payload)
    },
    SET_VIDEOS(state, payload) {
        state.videos = payload
        console.log(payload)
    },
}
const actions = {
    async movieDetail({ commit }, movieId) {
        try {
            const { data } = await AuthServices.getMovieDetai(movieId)
            commit("SET_MOVIE_DETAIL", data)
        } catch (error) {
            console.log(error)
        }
    },
    async videos({ commit }, movieId) {
        try {
            const { data } = await AuthServices.getVideos(movieId)
            const newdata = data.results.filter(
                (item) => item.name == "Official Trailer"
            )
            commit("SET_VIDEOS", newdata)
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
