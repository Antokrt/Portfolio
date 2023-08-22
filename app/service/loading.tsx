"use client"
import styles from '../../styles/Service.module.scss';
import loadingStyles from '../../styles/Loading.module.scss'
import anim from '../../styles/Anim.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";

import {Rings} from "react-loader-spinner";

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
