<template>
    <div class="latest-trailers">
        <section>
            <div class="column">
                <div class="column_title">
                    <h2>Latest Trailers</h2>
                </div>
                <div class="column_content">
                    <div class="card">
                        <div class="image">
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </div>
                        <div class="content">
                            <a href="">
                                <h2></h2>
                            </a>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { DETAIL } from "../../../constants/detail"
export default {
    data() {
        return {
            detail: DETAIL[0].results,
        }
    },
    methods: {},
    mounted() {
        console.log(DETAIL)
    },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/home/latest-trailers/main.scss";
</style>
