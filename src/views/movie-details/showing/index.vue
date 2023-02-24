<template>
    <div class="movie_showing">
        <div class="movie_showing_title">
            <p>Movies Showings</p>
        </div>
        <div class="movie_showing_list">
            <div class="movie_showing_list_item" v-for="value in 3">
                <div class="movie_showing_list_item_imgs">
                    <img :src="getPosterURL(movieDetail.poster_path)" alt="" />
                </div>
                <div class="movie_showing_list_item_name">
                    <p>{{ movieDetail.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MOVIE_DETAIL } from "../../../constants/movieDetai"
export default {
    data() {
        return {
            movieDetail: MOVIE_DETAIL[0],
        }
    },
    methods: {
        getPosterURL(posterPath) {
            return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${posterPath}`
        },
    },
}
</script>

<style lang="scss">
@import "../../../assets/movie-details/showing/main.scss";
</style>
