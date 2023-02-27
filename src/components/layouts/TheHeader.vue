<template>
    <div style="height: 8rem">
        <header>
            <div class="nav__left">
                <div class="nav__logo">
                    <a href="">
                        <img src="../../assets/images/logo-white.png" alt="" />
                    </a>
                </div>
                <div class="nav__menu">
                    <ul :class="click_Bars ? 'nav__menu--show' : ''">
                        <li>
                            <a href="">home</a>
                        </li>
                        <li>
                            <a href="">movie</a>
                        </li>
                        <li>
                            <a href="">blog</a>
                        </li>
                        <li>
                            <a href="">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav__right">
                <!-- Search -->
                <div>
                    <button
                        type="submit"
                        class="searchMobile"
                        @click="handleClick('search')"
                    >
                        <font-awesome-icon icon="fas fa-search" />
                    </button>
                    <div class="nav-search">
                        <input
                            type="text"
                            placeholder="search"
                            v-model="keySearch"
                        />
                        <button type="submit">
                            <font-awesome-icon icon="fas fa-search" />
                        </button>
                        <ListSearchNav />
                    </div>
                </div>
                <div class="nav__user">
                    <span
                        class="nav__user--userIcons"
                        @click="handleClick('user')"
                    >
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </span>
                    <ul :class="click_User ? 'showUser' : ''">
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <span>Mr. Edgar</span>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-user" />
                            <a href=""> See your profile </a>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-bell" />
                            <a href="">Notification</a>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-gear" />
                            <a href="">Settings</a>
                        </li>
                        <li>
                            <font-awesome-icon
                                icon="fa-solid fa-circle-question"
                            />
                            <a href="">Help & Support</a>
                        </li>
                        <li>
                            <font-awesome-icon
                                icon="fa-solid fa-arrow-right-from-bracket"
                            />
                            <a href="">Logout</a>
                        </li>
                    </ul>
                </div>
                <div class="menuTogger" @click="handleClick('bars')"></div>
                <!-- @click="barsHandleClickShow(!barsClickShow)" -->
            </div>
        </header>
        <div :class="click_Search ? ' show' : ''" class="search__mobile">
            <input type="text" placeholder="search" />
            <button type="submit">
                <font-awesome-icon icon="fas fa-search" />
            </button>
            <div class="nav__search--list">
                <div>
                    <ul>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                        <li class="list-item">
                            <a href="#">
                                <img
                                    src="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX100_CR0,0,100,148_.jpg"
                                    alt=""
                                />
                                <div class="desc">
                                    <h3>movie's name</h3>
                                    <p>2022</p>
                                    <p>Dakota Johnson, Sonoya Mizuno</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
export default {
    computed: {
        ...mapGetters(["click_Bars", "click_Search", "click_User"]),
    },
    methods: {
        ...mapActions(["handleClick"]),
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss">
@import "../../assets/TheHeader/main.scss";
</style>
