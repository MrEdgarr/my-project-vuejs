<template>
    <section class="trending">
        <div class="trending_tab">
            <h2>What's Popular</h2>
        </div>
        <div class="trending_scroller isFading" ref="scroll">
            <div class="column_content" @scroll.passive="onScroll">
                <div
                    class="column_content_card"
                    v-for="item in popular"
                    :key="item.id"
                >
                    <div class="image">
                        <a href="">
                            <img
                                :src="getPosterURL(item.backdrop_path)"
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="content">
                        <div class="canvas">
                            <div
                                class="progress-circular"
                                :style="{
                                    background: handleChart(item.vote_average),
                                }"
                            >
                                <span class="value">
                                    {{ voteFormart }} <small>%</small>
                                </span>
                            </div>
                        </div>
                        <h2>
                            <a href="">{{ item.title }}</a>
                        </h2>
                        <p>
                            {{ formartDate(item.release_date) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { DATA } from "../../../constants/data"
export default {
    props: {
        popular: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            data: DATA[0].results,
            voteFormart: "",
        }
    },
    methods: {
        getPosterURL(posterPath) {
            return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
        },
        formartDate(dateTime) {
            var today = new Date(dateTime)
            this.getYears = today.getFullYear()
            return today.toLocaleDateString()
        },
        handleChart(chart) {
            let base = 10 ** 1
            this.voteFormart = Math.round(chart * base)

            return `conic-gradient(
                rgba(30, 213, 169) ${chart * 36}deg,
                rgba(30, 213, 169, 0.2) 0deg
              )`
        },
        onScroll(e) {
            if (e.target.scrollLeft > 0) {
                this.$refs.scroll.classList.add("hidden")
            } else {
                this.$refs.scroll.classList.remove("hidden")
            }
        },
    },
}
</script>

<style lang="scss">
@import "../../../assets/home/trending/main.scss";
</style>
