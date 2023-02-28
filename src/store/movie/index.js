import AuthServices from "../../api/modules/movies"
const state = {
    detail: [],
    videos: [],
}
const getters = {
    detail: (state) => state.detail,
    videos: (state) => state.videos,
}
const mutations = {
    SET_MOVIE_DETAIL(state, payload) {
        state.detail = payload
    },
    SET_VIDEOS(state, payload) {
        state.videos = payload
    },
}
const actions = {
    async fetchMovieDetail({ commit }, { movieId }) {
        try {
            const { data } = await AuthServices.getMovieDetai(movieId)
            commit("SET_MOVIE_DETAIL", data)
        } catch (error) {
            console.log(error)
        }
    },
    async videos({ commit }, { movieId }) {
        try {
            const { data } = await AuthServices.getVideos(movieId)
            const newdata = data.results.filter(
                (item) => item.name == "Official Trailer"
            )
            if (newdata) {
                commit("SET_VIDEOS", newdata[0])
            } else {
                commit("SET_VIDEOS", [])
            }
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
