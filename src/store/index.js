import { createStore, createLogger } from "vuex"
import Click_Header from "./theHeader/header"
import Genres from "./genres/index"
import Movie from "./movie/index"
import Trending from "./trending/index"
import People from "./people/index"
export default createStore({
    modules: {
        Click_Header,
        Genres,
        Movie,
        Trending,
        People,
    },
})
