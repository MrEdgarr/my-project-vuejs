import API from "../../api"

export default {
    getPopular() {
        return API().get(
            `movie/popular?api_key=${import.meta.env.VITE_THEMOVIE_DB_KEY}`
        )
    },
}
