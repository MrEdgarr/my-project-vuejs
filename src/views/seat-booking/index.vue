<template lang="">
    <div>
        <HeaderBooking />
        <SeatBooking />
    </div>
</template>
<script>
import HeaderBooking from "./header/index.vue"
import SeatBooking from "./seat-layout/index.vue"
export default {
    components: {
        HeaderBooking,
        SeatBooking,
    },
}
</script>
<style lang=""></style>
