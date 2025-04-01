import { useEffect, useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import { resDataContext } from './utils/Context/resDataContext'
import useRestaurantsData from './hooks/useRestaurantsData'
import { API_URL } from './utils/Constants/constant'

function App() {
  // const [cartData, setCartData] = useState([]);
  // const [restaurantsData, setRestaurantsData,filteredResData, setFilteredResData] = useRestaurantsData();

  return (

    <div>

      {/* <resDataContext.Provider value={{restaurantsData: restaurantsData,filteredResData: filteredResData, setFilteredResData: setFilteredResData}}> */}
        <Navbar />
        <Body/>
      {/* </resDataContext.Provider> */}
    </div>
  )
}

export default App
