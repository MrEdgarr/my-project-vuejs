<template>
    <div
        class="latest-trailers"
        style="
            background-image: url('https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80');
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
                            v-for="(item, index) in detail"
                            :key="index"
                            @mouseover="handleHover(item)"
                        >
                            <div class="image">
                                <a>
                                    <img
                                        src="https://images.unsplash.com/photo-1676956114138-f51ad3a4ab40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt=""
                                    />
                                    <div class="play">
                                        <font-awesome-icon
                                            icon="fa-solid fa-play"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div class="content">
                                <h2>
                                    <a href=""> Official Trailer </a>
                                </h2>
                                <h3>32 Seasons | The Simpsons | Disney+</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { DETAIL } from "../../../constants/detail"
export default {
    data() {
        return {
            detail: DETAIL,
        }
    },
    mounted() {
        console.log(DETAIL)
    },
    methods: {
        handleHover(item) {
            console.log(item)
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/home/latest-trailers/main.scss";
</style>
