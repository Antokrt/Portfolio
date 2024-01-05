'use client'
import {RootState} from "@/app/GlobalRedux/store";
import styles from '../../styles/Pme.module.scss';

import {MenuOpen} from "@/app/component/MenuOpen";
import {useSelector} from "react-redux";
import anim from "@/styles/Anim.module.scss";
import TextAndImage from "@/app/component/TextAndImage";

const PME = () => {

    const openMenu = useSelector((state: RootState) => state.menu.value);


    return (
        <>
            {
                openMenu &&
                <MenuOpen/>
            }
            <div className={openMenu ? anim.hidden : styles.container + ' ' + anim.fadeIn}>

                <TextAndImage
                    title={'Un site vitrine impactant pour booster votre entreprise'}
                    description={"Propulsez votre PME ou PMI avec un site vitrine responsive sur mesure. <br /> Mon objectif ? Vous offrir une présence digitale bien référencée sur tous les appareils, attirant un trafic qualifié pour favoriser votre croissance et la conversion de vos futurs clients. "}
                    positionOfImg={'left'}
                />


            </div>
        </>
    )
}


export default PME;