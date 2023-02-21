<template>
    <div className="sliderHome_upcoming">
        <div className="sliderHome_upcoming_heading">
            <img
                src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""
            />
            <h3>LATEST AND UPCOMING MOVIES</h3>
        </div>
        <div className="sliderHome_upcoming_heading_slider">
            <swiper
                :breakpoints="{
                    480: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1480: { slidesPerView: 4 },
                }"
                :slidesPerGroup="1"
                :loop="true"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :speed="3000"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div className="sliderHome_upcoming_heading_slider_context">
                        <!-- <router-link
                            :to="{
                                name: 'moviedetail',
                                params: { id: items.id },
                            }"
                        > -->
                        <img
                            src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
                            alt=""
                        />
                        <!-- </router-link> -->
                        <h4>
                            Aquaman &nbsp;&nbsp;
                            <span> release on 30 nov </span>
                        </h4>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="sliderHome_upcoming_heading_slider_context">
                        <!-- <router-link
                            :to="{
                                name: 'moviedetail',
                                params: { id: items.id },
                            }"
                        > -->
                        <img
                            src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
                            alt=""
                        />
                        <!-- </router-link> -->
                        <h4>
                            Aquaman &nbsp;&nbsp;
                            <span> release on 30 nov </span>
                        </h4>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="sliderHome_upcoming_heading_slider_context">
                        <!-- <router-link
                            :to="{
                                name: 'moviedetail',
                                params: { id: items.id },
                            }"
                        > -->
                        <img
                            src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
                            alt=""
                        />
                        <!-- </router-link> -->
                        <h4>
                            Aquaman &nbsp;&nbsp;
                            <span> release on 30 nov </span>
                        </h4>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="sliderHome_upcoming_heading_slider_context">
                        <!-- <router-link
                            :to="{
                                name: 'moviedetail',
                                params: { id: items.id },
                            }"
                        > -->
                        <img
                            src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
                            alt=""
                        />
                        <!-- </router-link> -->
                        <h4>
                            Aquaman &nbsp;&nbsp;
                            <span> release on 30 nov </span>
                        </h4>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="sliderHome_upcoming_heading_slider_context">
                        <!-- <router-link
                            :to="{
                                name: 'moviedetail',
                                params: { id: items.id },
                            }"
                        > -->
                        <img
                            src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
                            alt=""
                        />
                        <!-- </router-link> -->
                        <h4>
                            Aquaman &nbsp;&nbsp;
                            <span> release on 30 nov </span>
                        </h4>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className="sliderHome_upcoming_heading_slider_context">
                        <!-- <router-link
                            :to="{
                                name: 'moviedetail',
                                params: { id: items.id },
                            }"
                        > -->
                        <img
                            src="https://www.webstrot.com/html/moviepro/html/images/index_II/top-4.jpg"
                            alt=""
                        />
                        <!-- </router-link> -->
                        <h4>
                            Aquaman &nbsp;&nbsp;
                            <span> release on 30 nov </span>
                        </h4>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"

// import required modules
import { Autoplay } from "swiper"
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay],
        }
    },
}
</script>

<style lang="scss">
@import "../../assets/home/slide/slide.scss";
</style>
