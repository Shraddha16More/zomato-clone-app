import { lazy, StrictMode, Suspense } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import { resDataContext } from "./utils/Context/resDataContext";
import useRestaurantsData from "./hooks/useRestaurantsData";
import Error from "./components/Error/Error.jsx";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu.jsx";
import Body from "./components/Body/Body.jsx";
import "./index.css";
import AboutClassBased from "./components/AboutClassBased/AboutClassBased.jsx";
import jsonData from "./animations/loading.json";
import Lottie from "react-lottie";
import { Checkout } from "./components/Checkout/Checkout.jsx";
import Shop from "./components/Shop/Shop.jsx";

const About = lazy(() => import("./components/About/About.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.jsx"));

function Main() {
  const [cartData, setCartData] = useState(null);
  const [
    restaurantsData,
    setRestaurantsData,
    filteredResData,
    setFilteredResData,
  ] = useRestaurantsData();
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <resDataContext.Provider
      value={{
        restaurantsData: restaurantsData,
        filteredResData: filteredResData,
        setFilteredResData: setFilteredResData,
        cartData: cartData,
        setCartData: setCartData,
        totalAmount: totalAmount,
        setTotalAmount: setTotalAmount,
      }}
    >
      <Navbar />
      <Outlet />
    </resDataContext.Provider>
  );
}

const defaultOption = {
  loop: true,
  autoplay: true,
  animationData: jsonData,
  rendererSettings: {
    preserveAspectRation: "xNudYMid slice",
  },
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <Lottie options={defaultOption} height={400} width={400} />
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <Lottie options={defaultOption} height={400} width={400} />
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/aboutclass",
        element: <AboutClassBased name="Saurav Satpute" />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
  // <App/>
);
