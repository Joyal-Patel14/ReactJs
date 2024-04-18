import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload);


            // vanilla (older) REDUX => DON'T MUTATE THE STATE && returning was mendatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {

            // state = []; => if we do it this way it just changes local state variable and not global state variable.

            state.items.length = 0; // doing state = []
            // return {items: []}; => This also works


            // Redux Toolkit: either mutate the existing state or return the new state
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;