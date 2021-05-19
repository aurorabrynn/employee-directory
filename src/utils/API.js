import axios from "axios"

export default {
    populate: function(query) {
        return axios.get("https://randomuser.me/api/?results=100")
    }
}