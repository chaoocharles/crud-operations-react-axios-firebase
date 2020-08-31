import axios from "axios";

export default axios.create({
    baseURL: "https://results-70df0.firebaseio.com/"
})