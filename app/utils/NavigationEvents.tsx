'use client'
import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {closeMenu} from "@/app/GlobalRedux/Features/menu/menuSlice";

export function NavigationEvents(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const openMenu = useSelector((state:RootState) => state.menu.value);
    useEffect(() => {
        if(openMenu){
            dispatch(closeMenu());
        }
    },[pathname,searchParams])

    return <></>
}