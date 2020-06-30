import {combineReducers} from "redux";
import items from "./items";
import sort from "./sort";
import category from "./category";
import cart from "./cart";

export default combineReducers({items, sort, category, cart});
