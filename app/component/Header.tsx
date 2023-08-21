'use client';

import styles from '../../styles/Header.module.scss';
import anim from '../../styles/Anim.module.scss';
import Image from "next/image";
import MenuSvg from "@/app/component/svg/menu";
import {MoonIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import {   useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toogle} from "@/app/GlobalRedux/Features/menu/menuSlice";
import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";
import Link from "next/link";
import ScreenSize from "@/app/utils/ScreenSizeUtils";

const Header = () => {
    const dispatch = useDispatch();
    const isOpenMenu = useSelector((state:RootState) => state.menu.value);
    const [width,height] = ScreenSize();


    return (
        <div className={styles.container + ' ' + styles.light}>

            <div className={styles.imageContainer}>
                <Link href={'/'} >
                    <Image
                        className={styles.logo}
                        src="/logo.png"
                        alt="Antonin Koreta Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </Link>


                {
                    isOpenMenu &&
                    <p className={width > 670 ? anim.trackingInContract : anim.fadeInQ}>Antonin Koreta</p>
                }
            </div>


            <div className={styles.menu}>
                <div onClick={() => dispatch(toogle())}>
                    <MenuSvg />
                </div>
                <MoonIcon className={styles.moon}/>
            </div>

        </div>
    )
}

export default Header;