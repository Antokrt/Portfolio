'use client'
import Link from "next/link";
import styles from '../../styles/AnimLink.module.scss';
import {Fragment} from "react";

export const AnimLink = ({link,text, Icon,newTab,type}) => {

    if(type === 'email') {
        return (
            <div className={styles.container}>
                <a href={link} target={newTab? '_blank' : ''}> <>{Icon}</> {text}</a>
            </div>
        )
    }
    else return (
        <div className={styles.container}>
<Link href={link} target={newTab? '_blank' : ''}> <>{Icon}</> {text}</Link>
        </div>
    )
}

export default AnimLink;