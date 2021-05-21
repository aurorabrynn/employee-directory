import axios from "axios"
const BASEURL = "https://randomuser.me/api/?format=pretty&results=50&nat=US"

export default {
    populate: function () {
        return axios.get(BASEURL)
    },
    search: function (query) {
        return axios.get(BASEURL);
    }

}