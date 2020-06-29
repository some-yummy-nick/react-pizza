import {SET_SORT} from "store/actions";

const initialState = {
    sort: {
        title: "rating",
        text: "популярности",
        isReversed: false
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return {
                ...state,
                sort: {
                    title: action.payload.title,
                    text: action.payload.text,
                    isReversed: !state.sort.isReversed
                }
            };

        default:
            return state;
    }
}
