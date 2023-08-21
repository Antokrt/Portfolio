"use client"
import styles from '../../styles/Service.module.scss';
import anim from '../../styles/Anim.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";

export default function Loading (){
    return (
        <p>load...</p>
    )
}
