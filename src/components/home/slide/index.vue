<template>
    <swiper
        class="parallax-slider"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        parallax
        grabCursor
        @swiper="onSwiperInitialized"
        :modules="modules"
        :loop="true"
        speed="1500"
        :autoHeight="true"
        :autoplay="{
            speed: 2000,
            disableOnInteractions: false,
        }"
    >
        <div class="parallax-slider-navigation">
            <div class="nav-indicator prevArrow">
                <font-awesome-icon icon="fa-solid fa-angle-left" />
            </div>
            <div class="nav-indicator nextArrow">
                <font-awesome-icon icon="fa-solid fa-angle-right" />
            </div>
        </div>
        <swiper-slide
            class="parallax-slide"
            v-for="image in newUpcoming"
            :key="image.id"
        >
            <div
                class="parallax-slide-image"
                :data-swiper-parallax="parallaxAmount"
                :data-swiper-parallax-opacity="0.5"
            >
                <img
                    :src="getPostBackdropPath(image.backdrop_path)"
                    :alt="image.title"
                />
                <div class="icon-play">
                    <font-awesome-icon icon="fa-solid fa-play" />
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Parallax, Autoplay, Navigation } from "swiper"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    props: {
        upcoming: {
            type: Array,
            required: true,
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {}
    },
    data() {
        return {
            modules: [Parallax, Autoplay, Navigation],
            parallaxSwiperWidth: 0,
            newUpcoming: [],
        }
    },
    computed: {
        parallaxAmount() {
            return this.parallaxSwiperWidth * 0.5
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiperInitialized(swiper) {
            this.parallaxSwiperWidth = swiper.width
        },
        getPostBackdropPath(posterPath) {
            return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${posterPath}`
        },
    },
    updated() {
        if (this.upcoming.length > 0) {
            this.newUpcoming = this.upcoming.slice(0, 2)
        }
    },
}
</script>

<style lang="scss">
@import "../../../assets/home/slide/slide.scss";
</style>
