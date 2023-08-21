'use client'
import {useEffect, useState} from "react";
export default function ScreenSize() {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            handleWindowResize();
            window.addEventListener('resize', handleWindowResize);
            return () => window.removeEventListener('resize', handleWindowResize);
        }

    }, []);

    return [width, height]
}