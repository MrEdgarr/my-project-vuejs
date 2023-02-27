<template>
    <Slide />
    <Trending />
    <LatestTrailers />
    <Popular />
    <Blogs />
    <Promotion />
</template>

<script>
import Slide from "../../components/home/slide/index.vue"
import Trending from "../../components/home/trending/index.vue"
import LatestTrailers from "../../components/home/latest-trailers/index.vue"
import Popular from "../../components/home/popular/index.vue"
import Blogs from "../../components/home/blogs/index.vue"
import Promotion from "../../components/home/promotion/index.vue"
export default {
    components: {
        Slide,
        Trending,
        LatestTrailers,
        Popular,
        Blogs,
        Promotion,
    },
}
</script>

<style></style>
