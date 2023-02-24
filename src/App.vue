<script setup>
import { RouterView } from "vue-router"
import TheFooter from "./components/layouts/theFooter.vue"
import TheHeader from "./components/layouts/TheHeader.vue"
</script>

<template>
    <div v-if="$route.meta.Layout">
        <router-view></router-view>
    </div>
    <div v-else>
        <TheHeader />
        <router-view />
        <TheFooter />
    </div>
</template>

<style scoped></style>
