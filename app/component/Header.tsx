'use client';

import styles from '../../styles/Header.module.scss';
import anim from '../../styles/Anim.module.scss';
import Image from "next/image";
import MenuSvg from "@/app/component/svg/menu";
import {MoonIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import {   useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeMenu, toogle} from "@/app/GlobalRedux/Features/menu/menuSlice";
import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";
import Link from "next/link";
import ScreenSize from "@/app/utils/ScreenSizeUtils";

const Header = () => {
    const dispatch = useDispatch();
    const isOpenMenu = useSelector((state:RootState) => state.menu.value);
    const [animMenu,setAnimMenu] = useState(false);
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
                <div className={isOpenMenu ? styles.active : ' '} onClick={() => {
                    dispatch(toogle());
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200">
                        <g strokeWidth="8.5" strokeLinecap="round">
                            <path
                                d="M72 82.286h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                d="M72 125.143h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 82.286h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                            <path
                                d="M100.75 125.143h28.75"
                                fill="#009100"
                                fillRule="evenodd"
                                stroke="#fff"
                            />
                        </g>
                    </svg>
                </div>
                {/*<MoonIcon className={styles.moon}/>*/}
            </div>

        </div>
    )
}

export default Header;