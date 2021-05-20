import axios from "axios"

export default {
    populate: function(query) {
        return axios.get("https://randomuser.me/api/?format=pretty&results=100")
    }
}