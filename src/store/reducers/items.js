import {GET_ITEMS} from "store/actions";

const initialState = {
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
}
