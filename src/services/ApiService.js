import config from "../config"

const ApiService ={
    url: function(path) {
        return`${config.api_base_url}/${path}?api_key=${(config.api_key)}`;
    },

    get:function(path) {
        return fetch(this.url(path)).then (res => res.json())
    },

}

export default ApiService;

            