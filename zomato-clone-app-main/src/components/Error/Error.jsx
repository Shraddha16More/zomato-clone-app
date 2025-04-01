import React from 'react'
import { useRouteError } from 'react-router-dom'
import styles from './error.module.css'
import jsonData from '../../animations/error.json'
import Lottie from 'react-lottie'

export default function Error() {
    const err = useRouteError()

    const defaultOption = {
        loop:true,
        autoplay:true,
        animationData: jsonData,
        rendererSettings: {
            preserveAspectRation:"xNudYMid slice"
        }
    }

    return (
        <div className={styles.ErrorPage}>
            <h1>{err.status + " : " + err.statusText}</h1>
            <p>{err.data}</p>
            <Lottie options={defaultOption} height={400} width={400}/>
        </div>
    )
}