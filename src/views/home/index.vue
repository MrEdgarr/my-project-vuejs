<template>
    <div class="page_wrap">
        <Slide :upcoming="upcoming.results" />
        <Trending
            :trending="trending.results"
            @updateTimes="updateTimes($event)"
        />
        <LatestTrailers
            :upcoming="upcoming.results"
            @getMovieId="getMovieId($event)"
        />
        <Popular :popular="popular" />
        <Blogs />
        <Promotion />

        <Trailers :videos="videos" :movieTrailer="movieTrailer" />
    </div>
</template>

<script>
import Slide from "../../components/home/slide/index.vue"
import Trending from "../../components/home/trending/index.vue"
import LatestTrailers from "../../components/home/latest-trailers/index.vue"
import Popular from "../../components/home/popular/index.vue"
import Blogs from "../../components/home/blogs/index.vue"
import Promotion from "../../components/home/promotion/index.vue"
import Trailers from "../../components/trailers/index.vue"
import { mapGetters } from "vuex"
export default {
    components: {
        Slide,
        Trending,
        LatestTrailers,
        Popular,
        Blogs,
        Promotion,
        Trailers,
    },
    data() {
        return {
            loading: false,
            movieTimes: "day",
            movieTrailer: [],
        }
    },
    computed: {
        ...mapGetters(["upcoming", "trending", "videos", "popular"]),
    },

    watch: {
        movieTimes() {
            this.fetchAll()
        },
    },
    methods: {
        async fetchAll() {
            try {
                this.loading = true
                await this.$store.dispatch("fetchUpcoming")
                await this.$store.dispatch("fetchTrending", {
                    type: "movie",
                    time: this.movieTimes,
                })
                await this.getMovieId()

                await this.$store.dispatch("fetchPopular")
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },

        updateTimes(value) {
            this.movieTimes = value
        },
        getMovieId(key) {
            console.log(key)
            if (key) {
                this.movieTrailer = key
                this.$store.dispatch("videos", { movieId: key.id })
            }
        },
    },
    mounted() {
        this.fetchAll()
    },
}
</script>

<style lang="scss" scoped>
.page_wrap {
    position: relative;
}
</style>
