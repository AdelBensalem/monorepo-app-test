
import reducer from './modules';
import { createStore } from "redux";

export default (initialState) => createStore(reducer, initialState);