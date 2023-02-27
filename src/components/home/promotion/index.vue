<template lang="">
    <section class="promotion">
        <div class="promotion_title">
            <h2>PROMOTION INFORMATION</h2>
        </div>
        <div class="promotion_content">
            <div class="column_wrapper">
                <div class="wrapper">
                    <div class="card" v-for="item in data" :key="item.id">
                        <div class="image">
                            <a>
                                <img :src="item.img" alt="" />
                            </a>
                        </div>
                        <div class="content decription-hover">
                            <a>
                                <div class="info">
                                    <h2>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Perferendis assumenda
                                        accusantium eius numquam, non amet,
                                        incidunt iusto asperiores maiores
                                        adipisci molestias distinctio a nam hic
                                        deserunt. Similique nihil nulla fugit?
                                    </h2>
                                    <p>{{ item.content }}</p>
                                </div>
                            </a>
                            <div class="group">
                                <a href="" class="btn"> chi tiết </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
const data = []
for (let i = 0; i < 6; i++) {
    data.push({
        id: i + 1,
        title: `title ${i + 1}`,
        content: `content ${i + 1}`,
        img: "https://images.unsplash.com/photo-1676993711160-33463af1d678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    })
}
export default {
    data() {
        return {
            data: data,
        }
    },
}
</script>
<style lang="scss">
@import "../../../assets/home/promotion/main.scss";
</style>
