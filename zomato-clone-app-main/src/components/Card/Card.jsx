import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  const {
    name,
    ratings,
    cuisines,
    costForTwo,
    areaName,
    lastMileTravelString,
    imgId,
  } = props;

  function makeCuisinesString(cuisines) {
    let cuisineString = "";
    for (let i = 0; i < cuisines.length; i++) {
      if (i == 3) {
        return cuisineString;
      }
      cuisineString += cuisines[i] + ", ";
    }

    return cuisineString;
  }
  // return (
  //     <div className={styles.card}>

  //         <img className={styles.foodimg} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ imgId} alt="" />

  //         <div className={styles.details}>
  //             <div className={styles.firstLine}>
  //                 <div className={styles.restName}>{name}</div>
  //                 <div className={styles.ratings}>{ratings}</div>
  //             </div>
  //             <div className={styles.secondLine}>
  //                 <div>{makeCuisinesString(cuisines)}</div>
  //             </div>
  //             <div className={styles.thirdLine}>
  //                 {areaName}
  //             </div>
  //             <div className={styles.fourthLine}>
  //                 <div>{lastMileTravelString}</div>
  //                 <div>{costForTwo}</div>
  //             </div>
  //         </div>
  //         {/* <div className={styles.addToCart}>
  //             <button className={styles.addToCartBtn}>Add to Cart</button>
  //         </div> */}
  //     </div>
  // )

  return (
    <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        class="rounded-t-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          imgId
        }
        alt=""
      />
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name.length < 15 ? name : name.trim().substring(0, 20) + " ..."}
          </h5>
        </a>
        <div className="w-100 flex flex-row justify-between">
          <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            {ratings}
          </p>
          <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            {" "}
            {lastMileTravelString}
          </p>
        </div>
        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {makeCuisinesString(cuisines)}
        </p>
        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {" "}
          {areaName}
        </p>
        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          {" "}
          {costForTwo}
        </p>

        {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
      </div>
    </div>
  );
}
