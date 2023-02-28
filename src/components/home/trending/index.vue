<template>
    <section class="trending">
        <div class="trending_tab">
            <h2>Trending</h2>
            <div class="selector_wrap">
                <div class="selector" @click.prevent="handle_Click_Toggle">
                    <div class="anchor">
                        <h3>
                            <a
                                :class="toggle ? 'selected' : ''"
                                data-selected="1"
                                >Today
                            </a>
                        </h3>
                        <div class="background" ref="bgbtn"></div>
                    </div>
                    <div class="anchor">
                        <h3>
                            <a
                                :class="toggle ? '' : 'selected'"
                                data-selected="2"
                                >This Week
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="trending_scroller isFading" ref="scroll">
            <div class="column_content" @scroll.passive="onScroll">
                <div
                    class="column_content_card"
                    v-for="item in trending"
                    :key="item.id"
                >
                    <div class="image">
                        <a href="">
                            <img :src="getPosterURL(item.poster_path)" alt="" />
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
        trending: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            toggle: true,
            data: DATA[0].results,
            voteFormart: "",
        }
    },
    methods: {
        handle_Click_Toggle(e) {
            const dataSet = e.target.getAttribute("data-selected")
            if (dataSet == 1) {
                this.$refs.bgbtn.style.left = `0px`
                this.toggle = true
                this.$emit("updateTimes", "day")
            }
            if (dataSet == 2) {
                this.$refs.bgbtn.style.left = `125px`
                this.toggle = false
                this.$emit("updateTimes", "week")
            }
        },

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
