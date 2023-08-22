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
    ReactCard, ResponsiveCard, SeoCard,
    WordpressCard
} from "@/app/component/SkillCard/card";
import Link from "next/link";
import skillcards from '../../json/skillcards.json';
import {JSX, useState} from "react";
import ScreenSize from "@/app/utils/ScreenSizeUtils";
import {useOrientation} from "@/app/utils/OrientationUtils";

const Service = () => {

    interface Skill {
        key: string,
        text: string
    }

    const openMenu = useSelector((state: RootState) => state.menu.value);
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [activeTitle,setActiveTitle] = useState<string | null>(null)
    const [listSkill, setListSkills] = useState<Skill[]>(skillcards);
    const [width,height] = ScreenSize();
    const orientation = useOrientation();

    const [animateTitle, setAnimateTitle] = useState(false);

    useEffect(() => {
        setAnimateTitle(true);
        setTimeout(() => {
            setAnimateTitle(false);
        }, 1200); // Par exemple, si l'animation dure 1 seconde
    }, [activeTitle]);

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

    const changeActive = (key:string) => {
        if(!animateTitle){
            setActiveKey(key);
            setActiveTitle(key);
        }
    }


    return (
        <>

            {
                openMenu &&
                <MenuOpen/>
            }

            <div className={openMenu ? anim.hidden : styles.container + ' ' + anim.fadeIn}>

                <div className={styles.containerScroll}>
                    <div className={styles.containerMain}>
                        <h4>Une expérience web plus solide et plus fiable</h4>
                        <h2 className={animateTitle ? anim.textFocusIn : ' '}>
                            {activeTitle ? activeTitle : 'Services et compétences'}
                        </h2>


                        {
                            width <= 500 &&
                            <div className={styles.jsOnly}>
                                <JsCard onclick={(title) => changeActive(title)}/>
                            </div>
                        }

                        {
                            width <= 770 &&
                            <div className={styles.containerSkillsPhone}>
                                {
                                    width > 500 &&
                                    <JsCard onclick={(title) => changeActive(title)}/>
                                }
                                <ReactCard onclick={(title) => changeActive(title)}/>
                                <NextJsCard onclick={(title) => changeActive(title)}/>
                                <WordpressCard onclick={(title) => changeActive(title)}/>
                                <NodejsCard onclick={(title) => changeActive(title)}/>
                                <NestJSCard onclick={(title) => changeActive(title)}/>
                                <DesignCard onclick={(title) => changeActive(title)}/>
                                <ResponsiveCard onclick={(title) => changeActive(title)}/>
                                <SeoCard onclick={(title) => changeActive(title)}/>
                            </div>
                        }

                        {
                            activeKey === null ?
                                <p className={styles.description}>
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
                                <p className={animateTitle ? styles.description + ' ' + anim.textFocusIn : styles.description}>
                                    {getText(activeKey) || ''}
                                </p>
                        }


                        {
                            width > 770 &&
                                <>
                                    <div className={styles.containerSkillsF}>
                                        <JsCard onclick={(title) => changeActive(title)}/>
                                        <ReactCard onclick={(title) => changeActive(title)}/>
                                        <NextJsCard onclick={(title) => changeActive(title)}/>
                                        <WordpressCard onclick={(title) => changeActive(title)}/>

                                    </div>

                                    <div className={styles.containerSkillsS}>
                                        <NodejsCard onclick={(title) => changeActive(title)}/>
                                        <NestJSCard onclick={(title) => changeActive(title)}/>
                                        <DesignCard onclick={(title) => changeActive(title)}/>
                                        <ResponsiveCard onclick={(title) => changeActive(title)}/>
                                        <SeoCard onclick={(title) => changeActive(title)}/>
                                    </div>
                                </>
                        }




                        <p className={styles.linkedin}>Vous pouvez me retrouver sur <Link href={'/#'}>Linkedin</Link> ou
                            me contacter par email ici <a href={'mailto:a.koreta@outlook.fr'}>a.koreta@outlook.fr</a>.
                        </p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Service;