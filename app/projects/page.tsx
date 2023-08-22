'use client'
import styles from '../../styles/Projects.module.scss';
import anim from '../../styles/Anim.module.scss';
import computer from '../../public/computer.png';
import {MenuOpen} from "@/app/component/MenuOpen";
import Banner from "@/app/component/Banner";
import {useSelector} from "react-redux";
import Image from "next/image";
import projects from '../../json/projects.json';
import {RootState} from "@/app/GlobalRedux/store";
import Link from "next/link";
import {Fragment, useEffect, useRef, useState} from "react";
import {GithubSvg} from "@/app/component/svg/github";
import AnimLink from "@/app/component/AnimLink";
import {NrRange} from "ts-number-range";
import {
    ChevronRightIcon,
    CodeBracketIcon,
    CursorArrowRaysIcon,
    CursorArrowRippleIcon
} from "@heroicons/react/24/outline";
import {ProjectComponent} from "@/app/component/Project";
import Carousel from "nuka-carousel";

const Projects = () => {

    interface Project {
        title: string,
        label: string,
        description: string,
        finish: boolean,
        adress: string,
        publishGithub: boolean,
        open: boolean,
        technos: Array<string>,
        desktopImg: string,
        phoneImg: string | null
    }


    const openMenu = useSelector((state: RootState) => state.menu.value);
    const [projectList, setProjectList] = useState<Project[]>(projects);
    const [startAnim,setStartAnim] = useState(false);
    const carousselRef = useRef<HTMLDivElement | null>(null);
    const sizeProjects: number = projectList.length;
    const [index, setIndex] = useState<number>(0);

    function truncateAndAddEllipsis(input: string): string {
        const maxLength = 4;
        if (input.length <= maxLength) {
            return input;
        } else {
            return input.substr(0, maxLength) + "...";
        }
    }




        return (
            <>
                {
                    openMenu &&
                    <MenuOpen/>
                }
                <div tabIndex={2000} className={openMenu ? styles.hidden : styles.fadeIn}>
                    <Carousel
                        ref={carousselRef}
                        withoutControls={false}
                        beforeSlide={() => setStartAnim(false)}
                        afterSlide={(currentIndex) => {
                            setIndex(currentIndex);
                            setStartAnim(true);
                        }}
                        enableKeyboardControls={true}
                        dragging={true}
                        defaultControlsConfig={
                            {
                                'nextButtonText':" ",
                                'nextButtonStyle':index === sizeProjects - 1 ? {display:'none'} : {display:'initial'},
                                'nextButtonClassName':styles.btnSlide + ' ' + styles.arrowNext + ' ' + styles.fadeIn,
                                'prevButtonText':" ",
                                'prevButtonStyle':index === 0 ? {display:'none'} : {display: 'initial'},
                                'prevButtonClassName':styles.btnSlide + ' ' + styles.arrowPrev,
                            }
                        }
                    >
                        {
                            projectList.map((item,i) => {
                                return (
                                    <div className={startAnim ? anim.fadeIn : ' '} key={i}>
                                        <ProjectComponent
                                            disapear={i !== index}
                                            adress={item.adress}
                                            description={item.description}
                                            finish={item.finish}
                                            label={item.label}
                                            open={item.open}
                                            publishGithub={item.publishGithub}
                                            technos={item.technos}
                                            title={item.title}
                                            desktopImg={item.desktopImg}
                                            phoneImg={item.phoneImg}
                                        />
                                    </div>
                                )
                            })
                        }


                    </Carousel>

                </div>
            </>

        )
}

export default Projects;
