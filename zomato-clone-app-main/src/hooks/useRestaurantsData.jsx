import { useState, useEffect } from 'react';
import { API_URL } from '../utils/Constants/constant';

function useRestaurantsData() {
    const [restaurantsData, setRestaurantsData] = useState(null);
    const [filteredResData, setFilteredResData] = useState(null);

    useEffect(()=>{
        getRestaurants(API_URL);
    },[])
    
    async function getRestaurants(API_URL) {
        try {
            let response = await fetch(API_URL);
            let json = await response.json();
            // console.log(json)
            function checkJsonData(jsonData) {
                // setRestaurantsData(json.data)  

                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                    // initialize checkData for Swiggy Restaurant data
                    let checkData =
                        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants;
            
                    // if checkData is not undefined then return it
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }

            
            const resData = checkJsonData(json);
            console.log(resData)

            setRestaurantsData(resData);
            setFilteredResData(resData)
        }
        catch(err) {
            console.log(err)
        }
    }


    return [restaurantsData,setRestaurantsData, filteredResData,setFilteredResData]
}

export default useRestaurantsData;

