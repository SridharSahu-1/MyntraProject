import React, { createContext, useState } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "../styles/App.css";
import ProductModal from "./ProductModal/ProductModal";
import Home from "./Pages/HomePage/Home";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import Wrapper from "./Wrapper";
import PageTemplate from "./Pages/PageTemplate";
import Checkout from "./Pages/Checkout/Checkout";



let router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper><Home/></Wrapper>,
  },
  {
    path: "/mens",
    element: <PageTemplate path="/mens"/>,
  },
  {
    path:"/women",
    element:<PageTemplate path="/women"/>
  },
  {
    path:"/kids",
    element:<PageTemplate path="/kids"/>
  },
  {
    path:"productModal/:index",
    element:<Wrapper><ProductModal/></Wrapper>
  },
  {
    path :"/beauty",
    element: <Wrapper><UnderConstruction/></Wrapper> 
  },
  {
    path:'*',
    element:<Wrapper><UnderConstruction/></Wrapper>
  },
  {
    path:'/checkout',
    element:<Checkout/>
  }

]);
export const cartContext = createContext();
export const dataContext = createContext();
const App = () => {

  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  return (
    <dataContext.Provider value={{data, setData}}>
      <cartContext.Provider value={{cart,setCart}}>
      <RouterProvider router={router}/>
    </cartContext.Provider>
    </dataContext.Provider>
  );
};

export default App;
