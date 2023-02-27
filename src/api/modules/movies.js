import API from "../../api"

export default {
    getMovieDetai(movieId) {
        return API().get(
            `movie/${movieId}?api_key=${import.meta.env.VITE_THEMOVIE_DB_KEY}`
        )
    },
    getVideos(movieId) {
        return API().get(
            `movie/${movieId}/videos?api_key=${
                import.meta.env.VITE_THEMOVIE_DB_KEY
            }&language=en-US`
        )
    },
}
