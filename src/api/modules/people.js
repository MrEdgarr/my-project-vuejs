import API from "../../api"

export default {
    getPeople(peopleId) {
        return API().get(
            `person/${peopleId}?api_key=${import.meta.env.VITE_THEMOVIE_DB_KEY}`
        )
    },
}
