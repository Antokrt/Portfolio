'use client';

import {createSlice} from "@reduxjs/toolkit";

export interface MenuState{
    value:boolean;
}

const initialState :MenuState = {
    value:false
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        toogle: (state) => {state.value = !state.value},
        openMenu:(state) => {state.value = true},
        closeMenu:(state) => {state.value = false},
        toogleByPayload:(state,action) => {state.value = action.payload}
    }
})


export const {toogle,openMenu,closeMenu,toogleByPayload} = menuSlice.actions;

export default menuSlice.reducer;