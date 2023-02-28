import { createStore, createLogger } from "vuex"
import Click_Header from "./theHeader/header"
import Genres from "./genres"
import Movie from "./movie"
import Trending from "./trending"
import People from "./people"
import Upcoming from "./upcoming"
import Popular from "./popular"
export default createStore({
    modules: {
        Click_Header,
        Genres,
        Movie,
        Trending,
        People,
        Upcoming,
        Popular,
    },
})
