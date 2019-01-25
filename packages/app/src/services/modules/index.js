
import { combineReducers } from "redux";

import { reducer as sessionReducer } from './session';


export default combineReducers({
    session: sessionReducer,
});

