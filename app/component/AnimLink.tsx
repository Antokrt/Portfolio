'use client'
import Link from "next/link";
import styles from '../../styles/AnimLink.module.scss';
import React, {Fragment} from "react";

interface LinkProps  {
    link:string,
    text:string,
    Icon:unknown,
    newTab?:boolean,
    type?:string
}

export const AnimLink : React.FunctionComponent<LinkProps> = ({link,text, Icon,newTab,type}) => {

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