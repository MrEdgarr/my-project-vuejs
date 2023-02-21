import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// Import Swiper styles
import "swiper/css"

import "./assets/scss/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import store from "./store/index"

/* import the fontawesome core */
// import { library } from "@fortawesome/fontawesome-svg-core"

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "./public/fontawesome"

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(store)
app.use(router)
app.mount("#app")

import "bootstrap/dist/js/bootstrap.bundle.min.js"
