import axios from "axios";

import * as actions from "./index";

export const getItems = data => async dispatch => {
    try {
        const res = await axios.get("/db.json");
        dispatch({type: actions.GET_ITEMS, payload: res.data.pizzas});
    } catch (e) {
        console.log(e);
    }
};
