'use client'

import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import anim from '../styles/Anim.module.scss';
import Banner from "@/app/component/Banner";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";
import ScreenSize from "@/app/utils/ScreenSizeUtils";
import {useOrientation} from "@/app/utils/OrientationUtils";
import {useEffect} from "react";
import {BodyOverflowUtils} from "@/app/utils/BodyUtils";
import Metadata from "@/app/utils/seo/head";

export default function Home() {

    const [width, height] = ScreenSize();
    const open = useSelector((state: RootState) => state.menu.value);
    const orientation = useOrientation();

    useEffect(() => {
        if (width <= 1000 && height <= 600 && orientation === 'landscape' && open) {
            BodyOverflowUtils('hidden');
        } else {
            BodyOverflowUtils('initial');
        }
    }, [orientation, open, width, height])

    return (
        <div className={styles.container + ' ' + styles.light}>
            <Metadata seoTitle={'Antonin Koreta'}
                      seoDescription={'Développeur Full-Stack spécialisé en React, Angular, NestJS et NextJS. Expertise en création d\'applications web performantes, scalables et centrées sur l\'expérience utilisateur. Passionné par le développement de solutions innovantes, intégration d\'API REST, et conception d\'architectures backend robustes. Découvrez mes projets et compétences en développement front-end et back-end.\n' +
                          '\n'}/>
            <Banner/>
        </div>
    )
}
