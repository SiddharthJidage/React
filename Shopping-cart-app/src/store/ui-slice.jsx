import { createSlice } from "@reduxjs/toolkit";

const uiIntialState = {cartIsVisible : false}


const uiSlice = createSlice({
    name :'ui',
    initialState :uiIntialState ,
    reducers:{
        toggle(state){
            state.cartIsVisible =! state.cartIsVisible;
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;