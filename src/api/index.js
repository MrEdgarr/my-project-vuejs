import axios from "axios"

export default () => {
    return axios.create({
        baseURL: import.meta.env.VITE_THEMOVIE_DB_URL,
        headers: {
            Accept: "application/json",
        },
    })
}
