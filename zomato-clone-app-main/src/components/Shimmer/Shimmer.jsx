import React from 'react'
import styles from './shimmer.module.css'

export default function Shimmer() {
    return (
        <div className={styles.card}>
            
            {/* <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ imgId} alt="" /> */}
            <div className={styles.foodimg}></div>
            <div className={styles.details}>
                <div className={styles.firstLine}>
                    <div className={styles.restName}></div>
                    <div className={styles.ratings}></div>
                </div>
                <div className={styles.secondLine}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.thirdLine}>
                    
                </div>
                <div className={styles.fourthLine}>
                    
                </div>
            </div>
            {/* <div className={styles.addToCart}>
                <button className={styles.addToCartBtn}>Add to Cart</button>
            </div> */}
        </div>
    )
}