import React, { useContext, useEffect } from "react";
import styles from "./restaurantmenu.module.css";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/Constants/constant";
import ShimmerMenuCard from "../Shimmer/ShimmerMenuCard";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { resDataContext } from "../../utils/Context/resDataContext";
import ResaturantMenuAccordionItem from "../RestaurantMenuAccordianItem/RestaurantMenuAccordionItem";

export default function RestaurantMenu() {
  const [resInfo, setResInfo] = useRestaurantMenu();
  const restaurantName = resInfo?.cards[0]?.card?.card?.text;
  console.log(resInfo?.cards);

  const resMenuArr =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  const recomendedText =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.title;
  const arrayOfMultipleMenuCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(arrayOfMultipleMenuCards)
  // const {restaurantsData,filteredResData, setFilteredResData} = useContext(resDataContext)

  const { cartData, setCartData, totalAmount, setTotalAmount } =
    useContext(resDataContext);

  function addToCart(nameofDish, costOfDish, description, dishImgURL) {
    setCartData((prev) => {
      return prev === null
        ? [
            {
              nameOfTheDish: nameofDish,
              costOfTheDish: costOfDish,
              description: description,
              dishImgURL: dishImgURL,
            },
          ]
        : [
            ...prev,
            {
              nameOfTheDish: nameofDish,
              costOfTheDish: costOfDish,
              description: description,
              dishImgURL: dishImgURL,
            },
          ];
    });

    setTotalAmount((prev) => prev + parseInt(costOfDish));
  }

  console.log(cartData);

  return resInfo === null ? (
    <div className={styles.restaurantMenu}>
      <ShimmerMenuCard />
    </div>
  ) : (
    <div className="py-32 mx-auto max-w-screen-md">
      <h1 className=" text-lg font-bold">{restaurantName}</h1>
      <ul>
        {arrayOfMultipleMenuCards
          .filter((item, idx) => {
            return idx >= 1;
          })
          .map((itemArr) => {
            const resMenuArr = itemArr?.card?.card?.itemCards;
            const title = itemArr?.card?.card?.title;
            // console.log(itemArr?.card?.card?.["@type"])
            return (
              <ResaturantMenuAccordionItem
                resMenuArr={resMenuArr}
                title={title}
                addToCart={(nameofDish, costOfDish, description, dishImgURL) =>
                  addToCart(nameofDish, costOfDish, description, dishImgURL)
                }
              />
            );
          })}
      </ul>
    </div>
  );
}

// <div id="accordion-collapse" data-accordion="collapse">
//   <h2 id="accordion-collapse-heading-1">
//     <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
//       <span>What is Flowbite?</span>
//       <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
//       </svg>
//     </button>
//   </h2>
//   <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
//     <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//       <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
//       <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
//     </div>
//   </div>
//   </div>
