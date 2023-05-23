import React, { createContext, useState ,useEffect } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "../styles/App.css";
import ProductModal from "./ProductModal/ProductModal";
import Home from "./Pages/HomePage/Home";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import Wrapper from "./Wrapper";
import PageTemplate from "./Pages/PageTemplate";
// import Checkout from "./Pages/Checkout/Checkout";
import Cart from "../components/Cart/Cart";
import { auth } from "../firebase";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import Signup from './Signup/Signup'
import Payment from "./Pages/Payment";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper><Home/></Wrapper>,
  },
  {
    path: "/login",
    element: <><Navbar/> <Login/></>,
  },
  {
    path: "/signup",
    element: <> <Navbar/> <Signup/> </>,
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
    path:'/cart',
    element:<Cart />
  },
  {
    path:'/payment',
    element:<Payment/>
  }

]);
export const cartContext = createContext();
export const dataContext = createContext();
const App = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    brand:"",
    color:""
  });
  const [userName, setUserName] = useState("");


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        setUserName(user.displayName);
      } else{ 
      setUserName("");
    }
    });
  }, []);


  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])
  return (
    <dataContext.Provider value={{data, setData,filter,setFilter}}>
      <cartContext.Provider value={{cart,setCart,userName}}>
      <RouterProvider router={router}/>
    </cartContext.Provider>
    </dataContext.Provider>
  );
};

export default App;
