
import apiConfig from './config';

export function fetchApi(endpoint, config = {}) {
    return new Promise((resolve, reject) =>
        fetch(`${apiConfig.protocol}://${apiConfig.host}:${apiConfig.port}/api${endpoint}`, config)
        .then(res => res.json())
        .then(resolve)
        .catch(reject))
}