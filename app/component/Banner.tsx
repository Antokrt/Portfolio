'use client';
import styles from '../../styles/Banner.module.scss';
import anim from '../../styles/Anim.module.scss';
import {AnimLink} from "@/app/component/AnimLink";
import Image from "next/image";
import {ArrowLeftIcon, ArrowRightIcon, AtSymbolIcon, CheckIcon, CursorArrowRaysIcon} from "@heroicons/react/24/outline";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";
import {LinkedinSvg} from "@/app/component/svg/linkedin";
import {useState} from "react";
import ScreenSize from "@/app/utils/ScreenSizeUtils";

const Banner = () => {
    const dispatch = useDispatch();
    const openMenu = useSelector((state:RootState) => state.menu.value);
    const [width,height] = ScreenSize();


    return (
        <>
            {
                openMenu &&
    <MenuOpen/>
            }
            <div className={openMenu ? styles.container + ' ' + anim.hidden : styles.container}>

                {/*<div className={styles.card}></div>*/}
                <div className={styles.title}>
                    <div className={styles.containerGeo + ' ' + anim.fadeIn2}>
                        <div className={anim.pulse}>
                            <Image
                                src={"/icons/geometric.png"}
                                alt="Antonin Koreta Logo"
                                width={180}
                                height={37}

                            />
                        </div>

                    </div>


                    <div className={anim.fadeIn + ' ' + styles.content}>
                        <h2>Développeur web Javascript</h2>
                        <h1>Antonin Koreta</h1>
                        <p>Création de sites web performants, esthétiques et optimisés pour une présence en ligne remarquable.</p>
                        <div className={styles.linkContainer}>
                            <AnimLink link ={'/projects'} Icon={<ArrowRightIcon/>} text={'Quelques projets'} />
                            {
                                width >= 400 &&
                                <AnimLink link ={'/service'} Icon={<ArrowRightIcon/>} text={'Services'} />
                            }
                            <AnimLink link={'/https://www.linkedin.com/in/akoreta/'} text={'Linkedin'} Icon={<LinkedinSvg/>}/>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Banner;