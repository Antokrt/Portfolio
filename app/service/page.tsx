'use client'

import {RootState} from "@/app/GlobalRedux/store";
import {MenuOpen} from "@/app/component/MenuOpen";
import anim from "@/styles/Anim.module.scss";
import {Fragment, ReactNode} from "react";
import styles from "@/styles/Service.module.scss";
import {useSelector} from "react-redux";
import {
    DesignCard,
    ElementorCard,
    JsCard,
    NestJSCard,
    NextJsCard,
    NodejsCard,
    ReactCard, ResponsiveCard, SeoCard, W3CCard,
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
    const [listSkill, setListSkills] = useState<Skill[]>(skillcards);
    const [width,height] = ScreenSize();
    const orientation = useOrientation();

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
                        <h2>Services et compétences</h2>


                        {
                            width <= 500 &&
                            <div className={styles.jsOnly}>
                                <JsCard onclick={(title) => setActiveKey(title)}/>
                            </div>
                        }

                        {
                            width <= 770 &&
                            <div className={styles.containerSkillsPhone}>
                                {
                                    width > 500 &&
                                    <JsCard onclick={(title) => setActiveKey(title)}/>
                                }
                                <ReactCard onclick={(title) => setActiveKey(title)}/>
                                <NextJsCard onclick={(title) => setActiveKey(title)}/>
                                <WordpressCard onclick={(title) => setActiveKey(title)}/>
                                <NodejsCard onclick={(title) => setActiveKey(title)}/>
                                <NestJSCard onclick={(title) => setActiveKey(title)}/>
                                <DesignCard onclick={(title) => setActiveKey(title)}/>
                                <ResponsiveCard onclick={(title) => setActiveKey(title)}/>
                                <SeoCard onclick={(title) => setActiveKey(title)}/>
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
                                <p className={styles.description}>
                                    {getText(activeKey)}
                                </p>
                        }


                        {
                            width > 770 &&
                                <>
                                    <div className={styles.containerSkillsF}>
                                        <JsCard onclick={(title) => setActiveKey(title)}/>
                                        <ReactCard onclick={(title) => setActiveKey(title)}/>
                                        <NextJsCard onclick={(title) => setActiveKey(title)}/>
                                        <WordpressCard onclick={(title) => setActiveKey(title)}/>

                                    </div>

                                    <div className={styles.containerSkillsS}>
                                        <NodejsCard onclick={(title) => setActiveKey(title)}/>
                                        <NestJSCard onclick={(title) => setActiveKey(title)}/>
                                        <DesignCard onclick={(title) => setActiveKey(title)}/>
                                        <ResponsiveCard onclick={(title) => setActiveKey(title)}/>
                                        <SeoCard onclick={(title) => setActiveKey(title)}/>
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