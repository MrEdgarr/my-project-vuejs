<template>
    <div class="intro">
        <div
            class="bg-image"
            style="
                background-image: url('https://mdbootstrap.com/img/Photos/new-templates/search-box/img4.jpg');
            "
        >
            <div
                class="mask d-flex align-items-center h-100"
                style="background-color: rgba(255, 255, 255, 0.6)"
            >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card" style="border-radius: 1rem">
                                <div class="card-body p-5 fs-4">
                                    <div>
                                        <div class="text-center pt-1">
                                            <font-awesome-icon
                                                class="gradient-custom"
                                                icon="fa-solid fa-user-astronaut"
                                                size="4x"
                                            />
                                            <h1
                                                class="fw-bold my-5 text-uppercase"
                                            >
                                                Sign In
                                            </h1>
                                        </div>

                                        <div
                                            class="form-outline form-white mb-4"
                                        >
                                            <label
                                                class="form-label"
                                                for="typeEmail"
                                                >Email</label
                                            >
                                            <input
                                                type="email"
                                                id="typeEmail"
                                                class="form-control form-control-lg"
                                            />
                                        </div>

                                        <div
                                            class="form-outline form-white mb-4"
                                        >
                                            <label
                                                class="form-label"
                                                for="typePassword"
                                                >Password</label
                                            >
                                            <input
                                                type="password"
                                                id="typePassword"
                                                class="form-control form-control-lg"
                                            />
                                        </div>

                                        <div
                                            class="d-flex justify-content-around"
                                        >
                                            <div>
                                                <!-- Remember me -->
                                                <div
                                                    class="custom-control custom-checkbox"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        class="custom-control-input"
                                                        id="defaultLoginFormRemember"
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        for="defaultLoginFormRemember"
                                                        >Remember me</label
                                                    >
                                                </div>
                                            </div>
                                            <div>
                                                <!-- Forgot password -->
                                                <a href="">Forgot password?</a>
                                            </div>
                                        </div>

                                        <div class="text-center py-5">
                                            <button
                                                class="btn btn-primary btn-lg btn-rounded px-5 w-100"
                                                type="submit"
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <p>
                                            Not a member?
                                            <router-link to="/register">
                                                Register
                                            </router-link>
                                        </p>

                                        <!-- Social login -->
                                        <p>or sign in with:</p>

                                        <a
                                            type="button"
                                            class="light-blue-text mx-2"
                                        >
                                            <font-awesome-icon
                                                icon="fa-brands fa-facebook-f"
                                            />
                                        </a>
                                        <a
                                            type="button"
                                            class="light-blue-text mx-2"
                                        >
                                            <font-awesome-icon
                                                icon="fa-brands fa-twitter"
                                            />
                                        </a>
                                        <a
                                            type="button"
                                            class="light-blue-text mx-2"
                                        >
                                            <font-awesome-icon
                                                icon="fa-brands fa-linkedin-in"
                                            />
                                        </a>
                                        <a
                                            type="button"
                                            class="light-blue-text mx-2"
                                        >
                                            <font-awesome-icon
                                                icon="fa-brands fa-github"
                                            />
                                        </a>
                                    </div>
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
export default {}
</script>

<style>
.card {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

@media (min-width: 560px) and (max-width: 750px) {
    html,
    body,
    .intro {
        height: 830px;
    }
}

@media (min-width: 800px) and (max-width: 850px) {
    html,
    body,
    .intro {
        height: 830px;
    }
}

.bg-image {
    height: 100vh;
}

.gradient-custom {
    /* fallback for old browsers */
    /* background: #667eea; */

    /* Chrome 10-25, Safari 5.1-6 */
    /* background: -webkit-linear-gradient(
        to bottom,
        rgba(102, 126, 234, 1),
        rgba(118, 75, 162, 1)
    ); */

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* background: linear-gradient(
        to bottom,
        rgba(102, 126, 234, 1),
        rgba(118, 75, 162, 1)
    ); */
}
</style>
