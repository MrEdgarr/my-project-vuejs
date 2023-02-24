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
import HeaderDetail from "./header/index.vue"
import ShowTimes from "./show-times/index.vue"
import Showing from "./showing/index.vue"
export default {
    components: {
        HeaderDetail,
        ShowTimes,
        Showing,
    },
}
</script>
<style lang=""></style>
