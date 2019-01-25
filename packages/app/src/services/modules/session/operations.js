
import config from './config';
import { fetchApi } from '../../api';

export function authenticate() {
    return fetchApi(config.endpoints.authenticate)
}
