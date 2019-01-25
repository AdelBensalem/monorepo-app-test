
import * as types from './types';

export const initialState = null;


function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.SIGN: return action.payload;
        default: return state;
    }
}


export default reducer;