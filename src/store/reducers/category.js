import {SET_CATEGORY} from "store/actions";

const initialState = {
    category: {
        id: 0,
        title: "all",
        text: "Все"
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            };

        default:
            return state;
    }
}
