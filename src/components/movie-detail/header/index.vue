<template>
    <div class="movie_detail">
        <div
            class="poster_images"
            :style="{
                background: getPostBackdropPath(movieDetail.backdrop_path),
            }"
        >
            <div class="movie_detail_content">
                <section>
                    <div>
                        <div class="movie_detail_content_image">
                            <img :src="getPosterURL(movieDetail.poster_path)" />
                        </div>
                    </div>
                    <div class="movie_detail_content_item">
                        <div class="movie_detail_content_item_title">
                            <h1>
                                {{ movieDetail.title
                                }}<span>({{ getYears }})</span>
                            </h1>
                            <div class="facts">
                                <span
                                    class="movie_detail_content_item_title_certification"
                                >
                                    PG-13
                                </span>
                                <span
                                    class="movie_detail_content_item_title_date"
                                >
                                    {{ formartDate(movieDetail.release_date) }}
                                    (VN)
                                </span>
                                <span
                                    class="movie_detail_content_item_title_genres"
                                >
                                    <a
                                        href=""
                                        v-for="genres in movieDetail.genres"
                                        :key="genres.id"
                                        >{{ genres.name }},
                                    </a>
                                </span>
                                <span
                                    class="movie_detail_content_item_title_runtime"
                                >
                                    <font-awesome-icon
                                        icon="fa-solid fa-clock"
                                    />
                                    {{ formatTime(movieDetail.runtime) }}
                                </span>
                            </div>
                        </div>
                        <ul class="movie_detail_content_item_action">
                            <li class="movie_detail_content_item_action_chart">
                                <div class="canvas">
                                    <div
                                        class="progress-circular"
                                        :style="{
                                            background: handleChart(
                                                movieDetail.vote_average
                                            ),
                                        }"
                                    >
                                        <span class="value">
                                            {{ voteFormart }}%
                                        </span>
                                    </div>
                                </div>
                                <span
                                    class="movie_detail_content_item_action_chart_text"
                                >
                                    User <br />
                                    Score
                                </span>
                            </li>
                            <li class="movie_detail_content_item_action_play">
                                <a>
                                    <font-awesome-icon icon="fas fa-play" />
                                    <span>Play trailer</span>
                                </a>
                            </li>
                        </ul>
                        <div class="movie_detail_content_item_info">
                            <h3 class="movie_detail_content_item_info_tagline">
                                {{ movieDetail.tagline }}
                            </h3>
                            <h3 class="movie_detail_content_item_info_auto">
                                Overview
                            </h3>
                            <div
                                class="movie_detail_content_item_info_overview"
                            >
                                <p>
                                    {{ movieDetail.overview }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { MOVIE_DETAIL } from "../../../constants/movieDetai"
export default {
    props: ["movieDetail"],
    data() {
        return {
            voteFormart: "",
            getYears: "",
            movieDetail: MOVIE_DETAIL[0],
        }
    },
    methods: {
        getPosterURL(posterPath) {
            return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${posterPath}`
        },

        getPostBackdropPath(posterPath) {
            return `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${posterPath}')`
        },

        formartDate(dateTime) {
            var today = new Date(dateTime)
            this.getYears = today.getFullYear()
            return today.toLocaleDateString()
        },

        formatTime(totalSeconds) {
            const hours = Math.floor(totalSeconds / 60)
            const minutes = Math.floor(totalSeconds % 60)
            return [`${hours}h`, `${minutes}m`]
                .filter((item) => item[0] !== "0")
                .join("")
        },

        handleChart(chart) {
            let base = 10 ** 1
            this.voteFormart = Math.round(chart * base)

            return `conic-gradient(
                  rgba(30, 213, 169) ${chart * 36}deg,
                  rgba(30, 213, 169, 0.2) 0deg
                )`
        },
    },
}
</script>

<style lang="scss">
@import "../../../assets/movie-details/header/main.scss";
</style>
