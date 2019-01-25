
import * as types from './types';

export function sign(payload = {}) {
    return {
        type: types.SIGN,
        payload,
    }
}