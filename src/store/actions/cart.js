import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY,CLEAR_CART} from "./index";

export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: item
});

export const addQuantity = item => ({
    type: ADD_QUANTITY,
    payload: item
});

export const subQuantity = item => ({
    type: SUB_QUANTITY,
    payload: item
});

export const removeFromCart = item => ({
    type: REMOVE_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
