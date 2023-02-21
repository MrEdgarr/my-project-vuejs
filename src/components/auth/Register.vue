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
                                                Register
                                            </h1>
                                        </div>
                                        <div
                                            class="form-outline form-white mb-4"
                                        >
                                            <label
                                                class="form-label"
                                                for="typeEmail"
                                                >Name</label
                                            >
                                            <input
                                                type="text"
                                                id="typeName"
                                                class="form-control form-control-lg"
                                            />
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
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    name=""
                                                    id=""
                                                    value="checkedValue"
                                                    checked
                                                />
                                                I agree all statements in
                                                <a href="">
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                        <div class="text-center py-5">
                                            <button
                                                class="btn btn-primary btn-lg btn-rounded px-5 w-100"
                                                type="submit"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <!-- Social login -->
                                        <p>Sign up with:</p>

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
                                    <div class="text-center pt-2">
                                        <p>
                                            Already have an account ?
                                            <router-link to="/login">
                                                Log in
                                            </router-link>
                                        </p>
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
</style>
