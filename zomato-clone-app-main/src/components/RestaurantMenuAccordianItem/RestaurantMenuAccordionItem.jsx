import React,{ useState} from "react";
import styles from './restaurantmenu.module.css'



export default function ResaturantMenuAccordionItem({resMenuArr, title, addToCart}) {
    const [showAccItem, setShowAccItem] = useState(false)
    



    return (
        <>
           {resMenuArr?.map((item,j)=>{
                const nameofDish = item?.card?.info?.name;
                const costOfDish = parseInt( (item?.card?.info?.price)? item?.card?.info?.price : item?.card?.info?.defaultPrice )/100
                const description = item?.card?.info?.description;
                const dishImgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+item.card.info.imageId
                    return (<div key={item?.card?.info?.id}>
                        {(j===0) && 
                            <div id="accordion-collapse" data-accordion="collapse" onClick={()=> {setShowAccItem(!showAccItem)}}>
                                <h2 id="accordion-collapse-heading-1">
                                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span><h2>Restaurant Menu - {title}  -  {resMenuArr?.length}</h2></span>
                                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                    </button>
                                </h2>
                            </div>}
                            <div id="accordion-collapse-body-1" class={showAccItem? `${""}`:`${"hidden"}`} aria-labelledby="accordion-collapse-heading-1">
                                <li key={item?.card?.info?.id} className={styles.flexMenuItem}>
                                <div style={{width:"60%"}}>
                                    <h3>{nameofDish}  -  ₹{costOfDish}</h3>
                                    <p>{description}</p>
                                </div>
                                <div className={styles.imgDiv} style={{width:"20%"}}>
                                    <img style={{width:"150px"}} src={dishImgURL} alt="" />
                                    <button className={styles.addItem} onClick={()=> addToCart(nameofDish,costOfDish,description,dishImgURL)}>Add +</button>
                                </div>
                                </li>
                            </div>                               
                    </div> 
                    )     
                })
            }      
        </>
    )
}