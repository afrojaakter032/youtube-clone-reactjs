import config from "../config"

const ApiService ={

    get:(path) => {
        return fetch (`${config.api_base_url}/${path}?api_key=${(config.api_key)}`).then (res => res.json())
    }

}

export default ApiService;

            