'use client';

import {configureStore} from "@reduxjs/toolkit";

import counterReducer from './Features/counter/counterSlice';
import menuReducer from './Features/menu/menuSlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        menu:menuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;