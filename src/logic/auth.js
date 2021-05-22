import axios from "axios";



const ENDPOINT_PATH= "https://restcountries.eu";



export default {
    API_POST(route, json, header){
        return axios.post(ENDPOINT_PATH + route, json, header);
    },

    API_GET(route){
        return axios({
            url: ENDPOINT_PATH + route,
            method: 'GET',
        })
    }
}    