import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY, CLEAR_CART} from "store/actions";

const initialState = {
    items: [],
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem;
            let existedItem = state.items.find(item => item.id === action.payload.id);
            if (existedItem) {
                existedItem.quantity += 1;
                return {
                    ...state,
                    items: [...state.items],
                    total: state.total + existedItem.price
                }
            } else {
                addedItem = action.payload;
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price;

                return {
                    ...state,
                    items: [...state.items, addedItem],
                    total: newTotal
                }

            }
        case ADD_QUANTITY: {
            let existedItem = state.items.find(item => item.id === action.payload.id);
            existedItem.quantity += 1;
            let newTotal = state.total + existedItem.price;
            return {
                ...state,
                items: [...state.items],
                total: newTotal
            };
        }
        case SUB_QUANTITY: {
            let existedItem = state.items.find(item => item.id === action.payload.id);
            if (existedItem.quantity === 1) {
                let new_items = state.items.filter(item => item.id !== action.payload.id);
                let newTotal = state.total - existedItem.price;
                return {
                    ...state,
                    items: new_items,
                    total: newTotal
                }
            } else {
                existedItem.quantity -= 1;
                let newTotal = state.total - existedItem.price;
                return {
                    ...state,
                    total: newTotal
                }
            }
        }
        case REMOVE_FROM_CART:
            let newTotal = state.total - (action.payload.price * action.payload.quantity);
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload.id),
                total: newTotal
            };
        case CLEAR_CART:
            return {...initialState};
        default:
            return state;
    }
}
