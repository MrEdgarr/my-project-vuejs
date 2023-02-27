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
            v-for="image in images"
            :key="image.id"
        >
            <div
                class="parallax-slide-image"
                :data-swiper-parallax="parallaxAmount"
                :data-swiper-parallax-opacity="0.5"
            >
                <img :src="image.imageUrl" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Parallax, Autoplay, Navigation } from "swiper"

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
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
            images: [
                {
                    id: 1,
                    imageUrl:
                        "https://images.unsplash.com/photo-1552176625-e47ff529b595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                },
                {
                    id: 2,
                    imageUrl:
                        "https://images.unsplash.com/photo-1530906358829-e84b2769270f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
                },
                {
                    id: 3,
                    imageUrl:
                        "https://images.unsplash.com/photo-1535448580089-c7f9490c78b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80",
                },
                {
                    id: 4,
                    imageUrl:
                        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                },
            ],
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
    },
}
</script>

<style lang="scss">
@import "../../../assets/home/slide/slide.scss";
</style>
