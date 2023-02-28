<template>
    <!-- Modal -->
    <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div
            class="modal-dialog modal-dialog-centered modal-lg"
            style="height: 50%"
        >
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{ movieTrailer.title }}
                    </h1>
                    <div
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click="goBack()"
                        class="btn-closes"
                    >
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                    </div>
                    <!-- <button type="button" class="btn-close"></button> -->
                </div>
                <div class="modal-body">
                    <iframe
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        height="100%"
                        width="100%"
                        :src="`https://www.youtube.com/embed/${
                            this.videos ? `${this.videos.key}` : ``
                        }`"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        videos: {
            type: Array,
            required: true,
        },
        movieTrailer: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {}
    },
    methods: {
        goBack() {
            if (this.$route.params.id) {
                this.$router.push("/")
            }
        },
    },
}
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";

.modal-content {
    height: 50%;
    background-color: $bg-black;
    .modal-header {
        border: none;
        #staticBackdropLabel {
            color: $white;
            font-weight: 700;
            font-size: 2rem !important;
        }
        .btn-closes {
            color: $white;
            font-size: 2.5rem;
        }
    }
}
</style>
