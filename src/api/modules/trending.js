import API from "../../api"

export default {
    getTrending(type, time) {
        return API().get(
            `trending/${type}/${time}?api_key=${
                import.meta.env.VITE_THEMOVIE_DB_KEY
            }`
        )
    },
}
