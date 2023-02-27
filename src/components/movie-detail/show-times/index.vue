<template lang="">
    <div class="showtime">
        <div class="showtime_title">
            <p>ShowTimes</p>
        </div>
        <div class="showtime_content">
            <div class="showtime_content_detail">
                <div class="showtime_content_detail_btn">
                    <div class="showtime_content_detail_btn_country">
                        <select
                            class="form-select"
                            aria-label="Default select example"
                        >
                            <option
                                v-for="value in coutry"
                                :key="value.id"
                                :value="value.name"
                            >
                                {{ value.name }}
                            </option>
                        </select>
                    </div>
                    <div class="showtime_content_detail_btn_date">
                        <input type="date" :value="showTime()" />
                    </div>
                    <div class="showtime_content_detail_btn_theater">
                        <select
                            class="form-select"
                            aria-label="Default select example"
                        >
                            <option
                                v-for="value in coutry"
                                :key="value.id"
                                :value="value.name"
                            >
                                {{ value.theater }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="showtime_content_detail_booking">
                    <div
                        class="showtime_content_detail_booking_group"
                        v-for="(value, index) in coutry"
                        :key="value.id"
                    >
                        <div
                            class="showtime_content_detail_booking_group_title"
                        >
                            cinema {{ value.name }}
                        </div>
                        <div class="showtime_content_detail_booking_group_item">
                            <div class="list_time">
                                <label>2D - Phụ đề</label>
                                <div
                                    class="type_time"
                                    v-bind="hadleShowTimes(index)"
                                >
                                    <router-link
                                        :to="{
                                            name: 'booking',
                                            params: {
                                                id: value.id,
                                                name: value.name,
                                            },
                                        }"
                                    >
                                        <p
                                            v-for="(item, index) in newTimes"
                                            :key="index"
                                        >
                                            {{ item }}
                                        </p>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { COUTRY } from "../../../constants/coutry"
import { TIMES } from "../../../constants/coutry"
export default {
    data() {
        return {
            coutry: COUTRY,
            times: TIMES,
            newTimes: [],
        }
    },
    mounted() {
        this.showTime()
    },
    methods: {
        showTime() {
            const today = new Date()
            const day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`
            const month = `${today.getMonth() + 1 < 10 ? "0" : ""}${
                today.getMonth() + 1
            }`
            const year = today.getFullYear()

            return `${year}-${month}-${day}`
        },
        hadleShowTimes(index) {
            let newtime = []
            this.coutry[index].datetime.map((value) => {
                this.times.map((time) => {
                    if (time.id == value) {
                        return (newtime = [...newtime, (newtime = time.time)])
                    }
                })
            })
            this.newTimes = newtime
        },
    },
}
</script>
<style lang="scss">
@import "../../../assets/movie-details/show-times/main.scss";
</style>
