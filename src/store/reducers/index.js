import {combineReducers} from "redux";
import items from "./items";
import sort from "./sort";
import category from "./category";

export default combineReducers({items, sort, category});
