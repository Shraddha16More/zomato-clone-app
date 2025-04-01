import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import "./navbar.module.css";
import { resDataContext } from "../../utils/Context/resDataContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const {
    restaurantsData,
    filteredResData,
    setFilteredResData,
    cartData,
    setCartData,
    totalAmount,
    setTotalAmount,
  } = useContext(resDataContext);

  const [searchText, setSearchText] = useState("");
  const [showCartOpt, setShowCartOpt] = useState(false);
  // const [allRestaurants, setFilterData] = useState(restaurantsData);

  function filterRestaurants(searchText, filteredResData) {
    if (searchText.trim() === "") {
      setFilteredResData(restaurantsData);
      return;
    }
    const data = filteredResData.filter(
      (res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) ||
        res?.info?.cuisines
          ?.join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );

    setFilteredResData(data);
  }

  return (
    <div className="nav-container-width mx-auto">
      <nav className="w-full fixed bg-white shadow-md" style={{ zIndex: "9" }}>
        <ul className="w-5/6 flex flex-row justify-between m-auto items-center bg-white">
          <li>
            <a href="/">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato logo"
                className="w-40"
              />
              Clone
            </a>
          </li>
          <li>
            <input
              className="w-96 mx-2 px-5 py-2"
              value={searchText}
              placeholder="Search for restaurants / cuisines"
              type="text"
              name="searchText"
              id="searchText"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => filterRestaurants(searchText, filteredResData)}
            >
              Search
            </button>
          </li>
          <ul className="flex flex-row justify-between">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link href="">Log In</Link>
            </li>
            <li>
              <Link href="">Sign Up</Link>
            </li>
          </ul>
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShowCartOpt(!showCartOpt)}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                {`(${cartData === null ? 0 : cartData.length})`}
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              class={`${
                showCartOpt ? "" : "hidden"
              } absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div>
                <div>
                  <div
                    className="scroll-auto overflow-auto  max-h-60 bg-white"
                    style={{ zIndex: "8" }}
                  >
                    {cartData === null ? (
                      <h3>No Items Added</h3>
                    ) : (
                      cartData?.map((item) => {
                        return (
                          <div className="flex flex-row justify-between items-center ">
                            <img
                              className="w-24 my-1 mx-3"
                              src={item.dishImgURL}
                              alt=""
                            />
                            <p className="mx-3 my-1">{item.nameOfTheDish}</p>
                            <p className="mx-3 my-1">
                              {"₹" + item.costOfTheDish}
                            </p>
                          </div>
                        );
                      })
                    )}
                  </div>
                  <div className="cursor-pointer w-full bg-black text-center font-bold p-2">
                    <Link to={"/checkout"}>
                      Checkout - Total Rs. {totalAmount}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>

        {/* {showCartOpt && 
                    <div className={styles.cartItemWrapper}>
                        <div className={styles.cartItemDiv}>
                            <div className={styles.cartItems}>
                                {
                                    cartData === null ? (
                                        (<h3>No Items Added</h3>)
                                    ):
                                    cartData?.map((item) => {
                                        return (
                                            <div className={styles.cartItemDetail}>
                                                <img className={styles.cartImg}  src={item.dishImgURL} alt="" />
                                                <p>{item.nameOfTheDish}</p>
                                                <p>{"₹"+item.costOfTheDish}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        
                            <div className={styles.cartCloseBtn} onClick={()=> (setShowCartOpt(!showCartOpt))}>
                                X
                            </div>
                            <div className={styles.checkoutBtn}>
                            Checkout
                            </div>
                        </div>

                    </div>
                    
                } */}
      </nav>
    </div>
  );
}

// nameOfTheDish:nameofDish,
// costOfTheDish:costOfDish,
// description:description,
// dishImgURL:dishImgURL
