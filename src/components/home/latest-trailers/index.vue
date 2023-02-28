<template>
    <div
        class="latest-trailers"
        style="
            background-image= url('https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80');
        "
    >
        <div class="column_warpper">
            <section>
                <div class="column">
                    <div class="column_title">
                        <h2>Latest Trailers</h2>
                    </div>
                    <div class="column_content">
                        <div
                            class="card"
                            v-for="(item, index) in newUpcoming"
                            :key="index"
                        >
                            <!-- @mouseover="handleHover(item)" -->
                            <div
                                class="image"
                                @click="this.$emit('getMovieId', item)"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                <router-link
                                    :to="{
                                        name: 'trailers.play',
                                        params: { id: item.id },
                                    }"
                                >
                                    <img
                                        :src="getPoster(item.backdrop_path)"
                                        alt=""
                                    />
                                    <div class="play">
                                        <font-awesome-icon
                                            icon="fa-solid fa-play"
                                        />
                                    </div>
                                </router-link>
                            </div>
                            <div class="content">
                                <h2>
                                    <a href=""> {{ item.title }} </a>
                                </h2>
                                <h3>Official Trailer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        upcoming: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            newUpcoming: [],
        }
    },
    methods: {
        getPoster(posterPath) {
            return `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${posterPath}`
        },
    },

    updated() {
        if (this.upcoming.length > 0) {
            this.newUpcoming = this.upcoming.slice(0, 5)
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/home/latest-trailers/main.scss";
</style>
