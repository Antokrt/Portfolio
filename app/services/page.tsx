'use client'

import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";
import anim from "@/styles/Anim.module.scss";
import {Fragment, ReactNode, useEffect} from "react";
import styles from "@/styles/Service.module.scss";
import {useSelector} from "react-redux";
import {
    DesignCard,
    ElementorCard,
    JsCard,
    NestJSCard,
    NextJsCard,
    NodejsCard,
    AngularCard, ResponsiveCard, SeoCard,
    WordpressCard
} from "@/app/component/SkillCard/card";
import Link from "next/link";
import skillcards from '../../json/skillcards.json';
import {JSX, useState} from "react";
import ScreenSize from "@/app/utils/ScreenSizeUtils";
import {useOrientation} from "@/app/utils/OrientationUtils";
import Metadata from "@/app/utils/seo/head";

const Service = () => {

    interface Skill {
        key: string,
        text: string
    }

    const openMenu = useSelector((state: RootState) => state.menu.value);
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [entranceTitle,setEntranceTitle] =  useState<boolean>(true);
    const [listSkill, setListSkills] = useState<Skill[]>(skillcards);
    const [width,height] = ScreenSize();
    const orientation = useOrientation();

    const [isAnimate, setIsAnimate] = useState(false);


    const parseText = (text:string): ReactNode[] => {
        const jsxParts: React.ReactNode[] = [];
        const parts = text.split(/(<br \/>|<strong>|<\/strong>)/);
        let inStrong = false;

        parts.forEach((part, index) => {
            if (part === '<br />') {
                jsxParts.push(<br key={index} />);
            } else if (part === '<strong>') {
                inStrong = true;
            } else if (part === '</strong>') {
                inStrong = false;
            } else {
                jsxParts.push(inStrong ? <strong key={index}>{part}</strong> : part);
            }
        });

        return jsxParts;
    }

    const getText = (key: string) => {
        const skill = listSkill.find((item) => item.key === key);
        if (!skill) return setActiveKey(null);
        return parseText(skill.text);
    }





    const getOutTitle = async () : Promise<void> => {
        setEntranceTitle(false);
        await new Promise<void>((resolve) => setTimeout(() => resolve(),500))
    }

    const getInTitle = async () :Promise<void> => {
        setEntranceTitle(true);
        await new Promise<void>((resolve) => setTimeout(() => resolve(),500))
    }

    const changeKey = async (key:string) :Promise<void> => {
        await new Promise<void>((resolve) => {
            setActiveKey(key);
            resolve();
        })
    }


    const change = async (key:string) :Promise<void | null> =>  {
        if(isAnimate) return null;
        if(key === activeKey) return null;
        setIsAnimate(true);
        await getOutTitle();
        await changeKey(key);
        await getInTitle();
        setIsAnimate(false);
    }

    return (
        <>
<Metadata seoTitle={'Antonin Koreta - Services'} seoDescription={'Développeur Full-Stack spécialisé en React, Angular, NestJS et NextJS. Expertise en création d\'applications web performantes, scalables et centrées sur l\'expérience utilisateur. Passionné par le développement de solutions innovantes, intégration d\'API REST, et conception d\'architectures backend robustes. Découvrez mes projets et compétences en développement front-end et back-end.\n' +
    '\n'}/>
            {
                openMenu &&
                <MenuOpen/>
            }
            <div className={openMenu ? anim.hidden : styles.container + ' ' + anim.fadeIn}>

                <div className={styles.containerScroll}>
                    <div className={styles.containerMain}>

                        <h4>Une expérience web plus solide et plus fiable</h4>
                        <h2 className={entranceTitle ? anim.slideInRightBackShine : anim.slideOutLeft}>
                            {activeKey ? activeKey : 'Services et compétences'}
                        </h2>






                        {
                            activeKey === null ?
                                <p className={entranceTitle ? styles.description + ' ' + anim.slideInRightBackShine : styles.description + ' ' + anim.slideOutLeft }>
                                    Quelle que soit la taille de votre <strong>entreprise</strong> ou de
                                    vos <strong>idées</strong>, mes compétences en
                                    <strong> développement web </strong> sont à votre service. <br/>Que vous soyez une
                                    grande
                                    entreprise, un <strong>particulier </strong> ayant un projet à concrétiser, ou une
                                    petite <strong>PME</strong> désireuse de
                                    se démarquer en ligne, je suis <strong> disponible </strong> pour vous aider à
                                    transformer
                                    vos <strong> idées en réalité
                                    numérique. </strong>
                                </p> :
                                <p className={entranceTitle ? styles.description + ' ' + anim.slideInRightBackShine : styles.description + ' ' + anim.slideOutLeft}>
                                    {getText(activeKey) || ''}
                                </p>
                        }

                        {
                            width <= 500 &&
                            <div className={styles.jsOnly}>
                                <JsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                            </div>
                        }

                        {
                            width <= 770 &&
                            <div className={styles.containerSkillsPhone}>
                                {
                                    width > 500 &&
                                    <JsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                }
                                <AngularCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <NextJsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <WordpressCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <NodejsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <NestJSCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <DesignCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <ResponsiveCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                <SeoCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                            </div>
                        }



                        {
                            width > 770 &&
                                <>
                                    <div className={styles.containerSkillsF}>
                                        <JsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <AngularCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <NextJsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <WordpressCard canPush={!isAnimate} onclick={(title) => change(title)}/>

                                    </div>

                                    <div className={styles.containerSkillsS}>
                                        <NodejsCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <NestJSCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <DesignCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <ResponsiveCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                        <SeoCard canPush={!isAnimate} onclick={(title) => change(title)}/>
                                    </div>
                                </>
                        }




                        <p className={styles.linkedin}>Vous pouvez me retrouver sur <Link target={'_blank'} href={'https://www.linkedin.com/in/akoreta/'}>Linkedin</Link> ou
                            me contacter par email ici <a href={'mailto:a.koreta@outlook.fr'}>a.koreta@outlook.fr</a>.
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Service;