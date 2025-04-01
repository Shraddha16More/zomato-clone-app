import React from 'react'
import styles from './shimmermenu.module.css'

export default function ShimmerMenuCard() {
    return (
        <div>
            <h1 className={styles.shimmemenurh1}></h1>
            <h2 className={styles.shimmemenurh2}></h2>
            <ul>
                <li className={styles.shimmerflexMenuItem}>
                    <div style={{width:"60%"}}>
                        <h3 className={styles.shimmerMenuItem}></h3>
                        <p className={styles.shimmerMenuItemInfo}></p>
                    </div>
                    <div className={styles.imgDiv} style={{width:"20%"}}>
                        <div style={{width:"150px"}}  alt="" />
                        {/* <button className={styles.addItem}></button> */}
                    </div>
                </li>
                <li className={styles.shimmerflexMenuItem}>
                    <div style={{width:"60%"}}>
                        <h3 className={styles.shimmerMenuItem}></h3>
                        <p className={styles.shimmerMenuItemInfo}></p>
                    </div>
                    <div className={styles.imgDiv} style={{width:"20%"}}>
                        <div style={{width:"150px"}}  alt="" />
                        {/* <button className={styles.addItem}></button> */}
                    </div>
                </li>
                <li className={styles.shimmerflexMenuItem}>
                    <div style={{width:"60%"}}>
                        <h3 className={styles.shimmerMenuItem}></h3>
                        <p className={styles.shimmerMenuItemInfo}></p>
                    </div>
                    <div className={styles.imgDiv} style={{width:"20%"}}>
                        <div style={{width:"150px"}}  alt="" />
                        {/* <button className={styles.addItem}></button> */}
                    </div>
                </li>
                <li className={styles.shimmerflexMenuItem}>
                    <div style={{width:"60%"}}>
                        <h3 className={styles.shimmerMenuItem}></h3>
                        <p className={styles.shimmerMenuItemInfo}></p>
                    </div>
                    <div className={styles.imgDiv} style={{width:"20%"}}>
                        <div style={{width:"150px"}}  alt="" />
                        {/* <button className={styles.addItem}></button> */}
                    </div>
                </li>
            </ul>
        </div>
    )
}