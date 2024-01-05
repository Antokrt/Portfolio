'use client'

import styles from '../../styles/TextAndImageComponent.module.scss';
import {ReactNode} from "react";
import {ParserTextUtils} from "@/app/utils/ParserTextUtils";

interface Props {
    title: string,
    description: string,
    srcImg: string,
    positionOfImg: "left" | 'right'
}


const TextAndImage: React.FunctionComponent<Props> = ({title, description, srcImg, positionOfImg}) => {

    return (
        <div className={positionOfImg === 'left' ? styles.container + ' ' + styles.left : styles.container + ' ' + styles.right}>
            <div className={styles.imgContainer}>
                <img src={"/icons/geometric.png"}/>

            </div>
            <div className={styles.textContainer}>
                <h1>{title}</h1>
                <h2>{ParserTextUtils(description)}</h2>
            </div>
        </div>
    )
}

export default TextAndImage;