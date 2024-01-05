'use client'
import styles from '../../styles/Menu.module.scss';
import anim from '../../styles/Anim.module.scss';
import Link from "next/link";
import AnimLink from "@/app/component/AnimLink";
import {AtSymbolIcon, LinkIcon} from "@heroicons/react/24/outline";
import {GithubSvg} from "@/app/component/svg/github";
import {LinkedinSvg} from "@/app/component/svg/linkedin";
import {usePathname} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {closeMenu} from "@/app/GlobalRedux/Features/menu/menuSlice";
import {EnvelopeIcon} from "@heroicons/react/24/solid";
import {useEffect} from "react";
import ScreenSize from "@/app/utils/ScreenSizeUtils";
import {useOrientation} from "@/app/utils/OrientationUtils";
import {BodyOverflowUtils} from "@/app/utils/BodyUtils";
import {RootState} from "@/app/GlobalRedux/store";

export const MenuOpen = () => {

    const pathname = usePathname();
    const dispatch = useDispatch();

    const checkLink = (adress: string) => {
        if (pathname === adress) {
            dispatch(closeMenu());
        }
    }


    return (
        <div className={styles.container + ' ' + anim.fadeInQ}>

            <div className={styles.mainMenu}>
                <div className={styles.linkMenu}>
                    <ul>
                        <li   onClick={() => checkLink('/')}>
                            <Link  href={'/'}><span>01</span> Accueil</Link>
                        </li>
                        <li onClick={() => checkLink('/projects')}>
                            <Link href={'/projects'}><span>02</span> Projets</Link>
                        </li>

                        <li  onClick={() => checkLink('/services')}>
                            <Link href={'/services'}><span>03</span> Services</Link>
                        </li>

                        <li  onClick={() => checkLink('/pme')}>
                            <Link href={'/pme'}><span>04</span>PME-PMI</Link>
                        </li>

                        <li  onClick={() => checkLink('/contact')}>
                            <a target={'_blank'} href={'mailto:a.koreta@outlook.fr'}><span>05</span> Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.externalLinkContainer}>
                    <AnimLink newTab={true} Icon={<LinkedinSvg/>} text={'Linkedin'}
                              link={'https://www.linkedin.com/feed/'}/>
                    <AnimLink newTab={true} Icon={<GithubSvg/>} text={'Github'} link={'https://github.com/Antokrt'}/>
                    <AnimLink type={'email'} newTab={true} Icon={<EnvelopeIcon/>} text={'a.koreta@outlook.fr'} link={'mailto:a.koreta@outlook.fr'}/>

                </div>
            </div>
        </div>
    )
}