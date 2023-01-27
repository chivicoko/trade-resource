import axios from "axios";

const TOKEN = "cf9rokqad3i2irjrc6egcf9rokqad3i2irjrc6f0";

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})