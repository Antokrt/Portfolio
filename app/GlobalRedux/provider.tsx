'use client';

import {Provider} from "react-redux";
import {store} from './store';
import React, {ReactNode} from "react";

interface ProviderProps {
    children?:ReactNode
}

export const Providers = ({children} : ProviderProps) : JSX.Element => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}