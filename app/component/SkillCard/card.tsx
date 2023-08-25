import styles from '../../../styles/SkillCard.module.scss';
import Image from "next/image";
import React from "react";

interface JsCardProps{
    onclick: (langage:string) => void;
    canPush:boolean;
}

export const JsCard: React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                    d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"/>
            </svg>
        )
    }

    return (
        <div onClick={() => onclick('javascript')} className={canPush ? styles.container + ' ' + styles.canPush : styles.container}>
            {svg()}
            <p>Javascript</p>
        </div>
    )
}


export const ReactCard:React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z"/>
                <path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z"/>
            </svg>
        )
    }

    return (
        <div onClick={() => onclick('react')} className={canPush ? styles.container + ' ' + styles.canPush : styles.container}>
            {svg()}
            <p>React</p>
        </div>
    )
}


export const NextJsCard:React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {
    const svg = () => {
        return (
            <svg
                viewBox="0 0 256 256" version="1.1">
                <g>
                    <path
                        d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                        >
                    </path>
                </g>
            </svg>

        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('nextjs')}>

            {svg()}
            <p>NextJS</p>
        </div>
    )


}


export const WordpressCard : React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {
    const svg = () => {
        return (
            <svg
                version="1.1" id="Capa_1" viewBox="0 0 97.75 97.75">
                <g>
                    <g>
                        <path
                            d="M69.682,47.319c0-3.81-1.367-6.447-2.539-8.501c-1.563-2.539-3.029-4.688-3.029-7.228c0-2.834,2.15-5.471,5.178-5.471    c0.136,0,0.268,0.017,0.398,0.024c-5.483-5.023-12.789-8.091-20.812-8.091c-10.769,0-20.241,5.524-25.753,13.893    c0.723,0.021,1.405,0.037,1.984,0.037c3.224,0,8.214-0.392,8.214-0.392c1.661-0.099,1.857,2.343,0.198,2.539    c0,0-1.67,0.196-3.527,0.293l11.222,33.389l6.746-20.229l-4.803-13.157c-1.659-0.097-3.232-0.293-3.232-0.293    c-1.66-0.098-1.466-2.637,0.195-2.539c0,0,5.09,0.391,8.117,0.391c3.224,0,8.216-0.391,8.216-0.391    c1.663-0.098,1.856,2.342,0.196,2.539c0,0-1.674,0.196-3.527,0.293l11.139,33.133l3.074-10.272    C68.669,53.02,69.682,49.957,69.682,47.319z"/>
                        <path
                            d="M18.054,48.874c0,12.2,7.091,22.743,17.372,27.739L20.722,36.331C19.012,40.163,18.054,44.406,18.054,48.874z"/>
                        <path
                            d="M49.417,51.57l-9.249,26.871c2.762,0.812,5.682,1.257,8.708,1.257c3.589,0,7.031-0.621,10.235-1.748    c-0.084-0.132-0.158-0.271-0.221-0.425L49.417,51.57z"/>
                        <path
                            d="M64.37,75.516c9.164-5.343,15.327-15.271,15.327-26.641c0.001-5.359-1.368-10.397-3.776-14.788    c0.134,0.981,0.208,2.036,0.208,3.169c0,3.128-0.583,6.644-2.344,11.04L64.37,75.516z"/>
                        <path
                            d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z     M48.876,83.156c-18.902,0-34.281-15.379-34.281-34.282c0-18.902,15.378-34.28,34.281-34.28c18.901,0,34.278,15.378,34.278,34.28    C83.154,67.777,67.777,83.156,48.876,83.156z"/>
                    </g>
                </g>
            </svg>
        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('wordpress')}>
            {svg()}
            <p>Wordpress</p>
        </div>
    )
}


export const ElementorCard : React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('elementor')}>

            <Image
                src={"/icons/elementor.png"}
                alt="Elementor Logo"
                width={100}
                height={50}
            />
            <p>Elementor</p>
        </div>
    )
}


export const NodejsCard:React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M429.76,130.07,274.33,36.85a37,37,0,0,0-36.65,0L82.24,130.06A38.2,38.2,0,0,0,64,162.83V349a38.26,38.26,0,0,0,18.24,32.8L123,406.14l.23.13c20.58,10.53,28.46,10.53,37.59,10.53,32.14,0,52.11-20.8,52.11-54.29V182a8.51,8.51,0,0,0-8.42-8.58H182.13a8.51,8.51,0,0,0-8.42,8.58V362.51a15,15,0,0,1-6.85,13.07c-5.9,3.6-14.47,2.84-24.14-2.15l-39.06-23.51a1.1,1.1,0,0,1-.48-.92V165.46a1.32,1.32,0,0,1,.59-1.06l151.84-93a.82.82,0,0,1,.73,0l151.93,93a1.34,1.34,0,0,1,.55,1.1V349a1.28,1.28,0,0,1-.45,1L256.31,440.65a1.22,1.22,0,0,1-.8,0l-38.83-23.06a7.8,7.8,0,0,0-7.83-.41l-.34.2c-10.72,6.35-13.6,8-23.54,11.62-1.62.59-5.43,2-5.76,5.77s3.29,6.45,6.51,8.32l51.9,31.87a35.67,35.67,0,0,0,18.3,5.07l.58,0h0a35.87,35.87,0,0,0,17.83-5.07l155.43-93.13A38.37,38.37,0,0,0,448,349V162.83A38.21,38.21,0,0,0,429.76,130.07Z"/>
                <path
                    d="M307.88,318.05c-37.29,0-45.24-10.42-47.6-27.24a8.43,8.43,0,0,0-8.22-7.32h-19.8a8.44,8.44,0,0,0-8.26,8.58c0,14.58,5.12,62.17,83.92,62.17h0c24.38,0,44.66-5.7,58.63-16.49S388,311.26,388,292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89,0-5.47,0-18.28,35.46-18.28,25.23,0,38.74,3.19,43.06,20a8.35,8.35,0,0,0,8.06,6.67h19.87a8.24,8.24,0,0,0,6.16-2.86,8.91,8.91,0,0,0,2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06,0-73.55,20.75-73.55,55.5,0,38.1,28.49,48.87,71.29,53.33,50,5.17,50,12.71,50,19.37C349.46,304.2,345.15,318.05,307.88,318.05Z"/>
            </svg>
        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('nodejs')}>
            {svg()}
            <p>NodeJS</p>
        </div>
    )
}


export const NestJSCard : React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg viewBox="0 0 24 24"
            >
                <path
                    d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z"/>
            </svg>
        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('nestjs')}>
            {svg()}
            <p>NestJS</p>
        </div>
    )
}


export const DesignCard : React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg
                 viewBox="0 0 512 512" >
<g>
	<g>
		<path
            d="M467.867,349.088v-0.002H44.131v0.002H21.829V379.5h22.302h112.028l-26.557,126.239l29.76,6.261l15.584-74.08h65.847    v73.992h30.412V437.92h65.847L352.636,512l29.76-6.261L355.839,379.5h112.028h22.302v-30.412H467.867z M240.794,407.508h-59.449    l5.892-28.008h53.557V407.508z M271.207,407.508V379.5h53.557l5.892,28.008H271.207z"/>
	</g>
</g>
                <g>
	<g>
		<path
            d="M44.131,101.871v216.803h423.738V101.871H44.131z M175.155,219.491h-35.227V134.24h35.227V219.491z M240.794,219.491    h-35.227V134.24h35.227V219.491z M372.072,286.306H271.206v-36.403h100.866V286.306z M372.072,219.491H271.206V134.24h100.866    V219.491z"/>
	</g>
</g>
                <g>
	<g>
		<polygon
            points="467.869,41.046 271.206,41.046 271.206,0 240.794,0 240.794,41.046 44.131,41.046 21.829,41.046 21.829,71.458     44.131,71.458 44.131,71.46 467.869,71.46 467.869,71.458 490.171,71.458 490.171,41.046   "/>
	</g>
</g>
</svg>
        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('design')}>
            {svg()}
            <p>Design</p>
        </div>
    )
}


export const ResponsiveCard : React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg
                viewBox="0 0 480.097 480.097">
                <g>
                    <path
                        d="M206.759,332.99H39.225c-3.894,0-7.065-3.173-7.065-7.067V53.353c0-3.893,3.172-7.065,7.065-7.065   h401.631c3.895,0,7.065,3.172,7.065,7.065v59.696c11.763,1.389,22.785,5.244,32.159,11.581V53.353   c0-21.63-17.602-39.225-39.225-39.225H39.225C17.602,14.128,0,31.722,0,53.353v272.569c0,21.631,17.602,39.227,39.225,39.227   h134.62v52.581h-21.229c-13.316,0-24.12,10.796-24.12,24.12c0,13.324,10.804,24.12,24.12,24.12h67.71   c-8.463-11.902-13.566-26.35-13.566-42.037V332.99z"/>
                    <path
                        d="M341.739,441.645v-34.742h-70.662V184.999c0-4.681,3.8-8.489,8.479-8.489h159.887   c4.679,0,8.478,3.808,8.478,8.489v68.676h12.046c7.364,0,14.179,2.127,20.113,5.597v-74.273c0-22.417-18.23-40.648-40.638-40.648   H279.556c-22.407,0-40.638,18.231-40.638,40.648v238.933c0,22.417,18.23,40.647,40.638,40.647h69.438   C344.566,458.22,341.739,449.359,341.739,441.645z"/>
                    <path
                        d="M459.967,273.775h-77.996c-11.104,0-20.132,9.037-20.132,20.138v147.732   c0,11.101,9.028,20.131,20.132,20.131h77.996c11.102,0,20.13-9.03,20.13-20.131V293.912   C480.097,282.811,471.068,273.775,459.967,273.775z M385.958,297.894h70.019v127.703h-70.019V297.894z M420.977,451.993   c-2.215,0-4.193-0.896-5.7-2.277c-1.713-1.555-2.812-3.739-2.812-6.228c0-4.694,3.801-8.495,8.512-8.495   c4.679,0,8.479,3.801,8.479,8.495c0,2.489-1.1,4.672-2.795,6.228C425.152,451.098,423.174,451.993,420.977,451.993z"/>
                </g>
            </svg>
        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('responsive')}>
            {svg()}
            <p>Responsive</p>
        </div>
    )
}


export const SeoCard : React.FunctionComponent<JsCardProps> = ({onclick,canPush}) => {

    const svg = () => {
        return (
            <svg
                viewBox="0 0 512.006 512.006"
            >
                <g transform="translate(0 -1)">
                    <g>
                        <g>
                            <path
                                d="M490.67,385.006H320.003c-5.675,0-11.093,2.24-15.083,6.251l-15.083,15.083h-67.669l-15.083-15.083     c-3.989-4.011-9.408-6.251-15.083-6.251H21.337c-11.797,0-21.333,9.557-21.333,21.333v64c0,23.531,19.136,42.667,42.667,42.667     h426.667c23.531,0,42.667-19.136,42.667-42.667v-64C512.003,394.564,502.467,385.006,490.67,385.006z"/>
                            <path
                                d="M343.545,198.154c8.917,0,16.192-7.253,16.192-16.192v-16.171c0-8.939-7.275-16.192-16.192-16.192     c-8.917,0-16.192,7.253-16.192,16.192v16.171C327.353,190.901,334.627,198.154,343.545,198.154z"/>
                            <path
                                d="M42.659,342.333h140.501l15.083,15.083c4.011,4.011,9.429,6.251,15.083,6.251h85.333c5.675,0,11.093-2.24,15.083-6.251     l15.104-15.083h140.48c11.797,0,21.333-9.536,21.333-21.333V43.667C490.659,20.136,471.523,1,447.993,1h-384     C40.483,1,21.326,20.136,21.326,43.667V321C21.326,332.797,30.883,342.333,42.659,342.333z M311.182,165.779     c0-17.835,14.507-32.363,32.363-32.363c17.856,0,32.363,14.528,32.363,32.363v16.192c0,17.856-14.507,32.363-32.363,32.363     c-17.856,0-32.363-14.507-32.363-32.363V165.779z M230.265,141.501c0-4.459,3.605-8.085,8.085-8.085h48.555     c4.459,0,8.085,3.627,8.085,8.085c0,4.48-3.627,8.107-8.085,8.107h-40.469v16.171h24.277c4.48,0,8.085,3.627,8.085,8.107     c0,4.459-3.605,8.085-8.085,8.085h-24.277v16.192h40.469c4.459,0,8.085,3.605,8.085,8.085c0,4.459-3.627,8.085-8.085,8.085     H238.35c-4.48,0-8.085-3.627-8.085-8.085V141.501z M173.603,133.416h12.843c9.536,0,18.517,3.712,25.259,10.453     c3.157,3.179,3.157,8.299,0,11.456c-3.157,3.157-8.277,3.157-11.456,0c-3.669-3.691-8.597-5.717-13.803-5.717h-12.843     c-4.459,0-8.085,3.627-8.085,8.085s3.627,8.085,8.085,8.085h8.107h8.085c13.397,0,24.277,10.901,24.277,24.277     c0,13.397-10.88,24.277-24.277,24.277h-12.843c-9.536,0-18.496-3.712-25.237-10.453c-3.179-3.157-3.179-8.277,0-11.456     c3.157-3.157,8.277-3.157,11.435,0c3.691,3.691,8.597,5.739,13.803,5.739h12.843c4.459,0,8.085-3.648,8.085-8.107     s-3.627-8.085-8.085-8.085h-8.085h-8.107c-13.376,0-24.277-10.88-24.277-24.277C149.326,144.317,160.227,133.416,173.603,133.416     z"/>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }

    return (
        <div className={canPush ? styles.container + ' ' + styles.canPush : styles.container} onClick={() => onclick('seo')}>
            {svg()}
            <p>Seo</p>
        </div>
    )
}


