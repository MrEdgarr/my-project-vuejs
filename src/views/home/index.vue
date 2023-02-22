<template>
    <Slide />
    <Trending />
    <LatestTrailers />
    <Popular />
    <Blogs />
    <Promotion />
</template>

<script>
import Slide from "./slide/index.vue"
import Trending from "./trending/index.vue"
import LatestTrailers from "./latest-trailers/index.vue"
import Popular from "./popular/index.vue"
import Blogs from "./blogs/index.vue"
import Promotion from "./promotion/index.vue"
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
