"use client"
import {Rings} from "react-loader-spinner";
import loadingStyles from "@/styles/Loading.module.scss";


export default function Loading (){
    return (
        <div className={loadingStyles.container}>
            <Rings
                height="80"
                width="80"
                color="#7598f6"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    )
}
