import API from "../../api"

export default {
    getUpcoming() {
        return API().get(
            `movie/upcoming?api_key=${import.meta.env.VITE_THEMOVIE_DB_KEY}`
        )
    },
}
