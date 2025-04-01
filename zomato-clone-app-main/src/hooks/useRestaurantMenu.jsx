import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/Constants/constant';

export default function useRestaurantMenu() {
    const [resInfo, setResInfo] = useState(null);
    
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])
    
    async function fetchMenu() {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        
        // setResInfo(json.data);
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.length)
        // console.log(json.data)
        // // const {text} = json?.data?.cards[0]?.card?.card; //restaurant name
        // // console.log(text)
        // json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title)
        setResInfo(json.data);
    }


    return [resInfo,setResInfo]
}