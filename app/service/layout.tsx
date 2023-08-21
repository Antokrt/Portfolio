import type { Metadata } from 'next';
import {Suspense} from "react";
import { Inter } from 'next/font/google'
import Header from "@/app/component/Header";
import {Providers} from "@/app/GlobalRedux/provider";
import Loading from "@/app/projects/loading";

export const metadata: Metadata = {
    title: 'Service',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <div>
            {children}
        </div>

    )
}
