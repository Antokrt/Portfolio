import styles from '../../styles/ProjectComponent.module.scss';
import anim from '../../styles/Anim.module.scss';
import {RootState} from "@/app/GlobalRedux/store";
import React, {useEffect, useState} from "react";
import projects from "@/json/projects.json";
import Image from "next/image";
import Link from "next/link";
import {MenuOpen} from "@/app/component/MenuOpen";
import {ChevronRightIcon, CursorArrowRippleIcon} from "@heroicons/react/24/outline";
import {useSelector} from "react-redux";
import AnimLink from "@/app/component/AnimLink";

interface Project {
    title:string,
    label:string,
    description:string,
    finish:boolean,
    open:boolean,
    desktopImg:string,
    phoneImg?:string | null,
    adress:string,
    publishGithub:boolean,
    technos:string[],
    disapear:boolean
}

export const ProjectComponent :React.FunctionComponent<Project> = ({title,label,description,finish,open,desktopImg,phoneImg,adress,publishGithub,technos,disapear}) => {

    const [ready,setReady] = useState<boolean>(false);

        return (
            <div className={disapear ? styles.container + ' ' + anim.slideOutTop : styles.container}>



                <div className={styles.projectContainer + ' ' + anim.fadeInQ}>
                    <div className={styles.absoCursor}>
                        <CursorArrowRippleIcon/>
                    </div>


                    <h4>{label} {finish &&
                        <span>en cours de développement</span>}</h4>
                    <h2>{title}</h2>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <div className={styles.buildWith}>
                        <span>Compétences : </span>
                        <div className={styles.tech}>
                            {
                                technos.map((item,key) => (
                                    <span key={item}>{item}</span>
                                ))
                            }
                        </div>
                    </div>

                    <div className={styles.links}>
                        {
                          open && publishGithub &&
                            <AnimLink link={adress} newTab={true}  text={'Voir le code'} Icon={<ChevronRightIcon/>}/>
                        }

                        {
                            open && !publishGithub &&
                            <AnimLink text={'Visiter'} link={adress} newTab={true} Icon={<ChevronRightIcon/>}/>
                        }
                    </div>

                    {
                        phoneImg &&
                        <div className={styles.phoneContainer + ' ' + anim.fadeInSlow}>
                            <Image
                                src={phoneImg}
                                alt="Phone Logo"
                                width={180}
                                height={37}
                                priority
                            />
                        </div>
                    }



                </div>

                <div className={styles.imgContainer + ' ' + anim.fadeInSlow}>
                    <div className={styles.laptop}>
                        <Image
                            src={desktopImg}
                            alt="Laptop Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </div>


                </div>


            </div>
        )

}

