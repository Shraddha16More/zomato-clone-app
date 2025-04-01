import { useState, useEffect, useContext} from 'react'
import Card from '../Card/Card'
import styles from './cardcontainer.module.css'
import { resDataContext } from '../../utils/Context/resDataContext'
import Shimmer from '../Shimmer/Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../hooks/useOnlineStatus'
import Lottie from 'react-lottie'
import jsonData from '../../animations/offline.json' 

export default function CardContainer() {

    const {restaurantsData,filteredResData} = useContext(resDataContext)

        
    const onlineStatus = useOnlineStatus();

    const defaultOption = {
        loop:true,
        autoplay:true,
        animationData: jsonData,
        rendererSettings: {
            preserveAspectRation:"xNudYMid slice"
        }
    }

    if(onlineStatus === false)
    {
        return (
            <div style={{textAlign:"center"}}>
                <h1>Look's like you are offline</h1>
                <Lottie options={defaultOption} height={400} width={400}/>
            </div>

        )
    }

    return (
        <div className={`${styles.container}`}>
            <section className={`${styles.cardContainer} ${"py-32"}`}>
                {
                    (filteredResData === null)? 
                        <><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/></>   
                    :
                    (
                        filteredResData?.map((rest)=>{

                            return <Link key={rest.info.id}  to={"/restaurants/"+ rest.info.id}><Card name={rest.info.name} costForTwo={rest.info.costForTwo} cuisines={rest.info.cuisines}  ratings={rest.info.avgRatingString} areaName={rest.info.areaName} lastMileTravelString = {rest.info.sla.lastMileTravelString} imgId={rest.info.cloudinaryImageId}/></Link>
                        })
                        
                    )  
                }
            </section>
        </div>
    )
}