<template lang="">
    <div>
        <HeaderDetail />
        <section class="d-flex">
            <ShowTimes />
            <Showing />
        </section>
    </div>
</template>
<script>
import HeaderDetail from "../../components/movie-detail/header/index.vue"
import ShowTimes from "../../components/movie-detail/show-times/index.vue"
import Showing from "../../components/movie-detail/showing/index.vue"
export default {
    components: {
        HeaderDetail,
        ShowTimes,
        Showing,
    },
}
</script>
<style lang=""></style>
