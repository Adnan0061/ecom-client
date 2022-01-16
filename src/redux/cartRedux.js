import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: ( state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        updateProduct: ( state, action) => {
            state.products[action.payload[1]].quantity=action.payload[0];
            state.products[action.payload[1]].productTotal=state.products[action.payload[1]].quantity * state.products[action.payload[1]].price;
            state.total = state.products.map(p => p.productTotal)
        },
        deleteProduct: ( state, action) => {
            console.log(action);
            state.products.splice(action.payload, 1);
            state.quantity -= 1;
            state.total = state.products.map(p => p.productTotal)
        },
    }
})

export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;