import API from "../../api"

export default {
    getGenres(param) {
        return API().get(
            `genre/movie/list?api_key=${import.meta.env.VITE_THEMOVIE_DB_KEY}`
        )
    },
}
