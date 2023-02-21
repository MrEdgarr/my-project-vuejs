<template>
    <Slide />
    <Trending />
    <LatestTrailers />
</template>

<script>
import Slide from "./slide/index.vue"
import Trending from "./trending/index.vue"
import LatestTrailers from "./latest-trailers/index.vue"
export default {
    components: {
        Slide,
        Trending,
        LatestTrailers,
    },
}
</script>

<style></style>
