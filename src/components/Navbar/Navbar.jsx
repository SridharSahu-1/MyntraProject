import React,{useContext ,useState,useEffect} from "react";
import {useLocation} from "react-router-dom"
import logo from "../images/icon.jpeg"
import "./css/Navbar.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
import {FiUser} from "react-icons/fi"

import { Link } from "react-router-dom";
import  {cartContext} from "../App"
export default function Navbar() {
  const {cart} = useContext(cartContext);
  const [showMenu,setShowMenu] = useState(true)
  const path = useLocation().pathname
  useEffect(()=>{
    setShowMenu(true);
  },[path,setShowMenu])
  return (
      <nav className="navbar">
        <div className="leftNavGroup">
          <span className="closeBtn" onClick={()=>{setShowMenu(true)}}> <RxCross2/></span>
          
          <div className="logo">
            <Link to={"/"}>
            <img src={logo} alt="myntra" />
            </Link>
          </div>
          <ul className="list">
          <li className="user__container" >
            <p className="user__icon__box"><FiUser/></p>
            <h4 className="user__name">Sridhar</h4>
          </li>
            <Link className="list-item" to={"/mens"}>MEN</Link>
            <Link className="list-item" to={"/women"}>WOMEN</Link>
            <Link className="list-item" to={"/kids"}>KIDS</Link> 
            <Link className="list-item" to={"/home&living"}>HOME & LIVING</Link>
            <Link className="list-item" to={"/beauty"}>BEAUTY</Link>
           
            <li className="list-item">
              STUDIO
              <sup>NEW</sup>
            </li>
          </ul>
        </div>

        <div className="rightNavGroup">
          <div className="navSearch ">
          
            <BiSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>

          <div className="NavIcons">
            <a className="profile user">
              <AiOutlineUser className="profileIcons "/>
              <span>Profile</span>
            </a>
            <a className="profile">
              <AiOutlineHeart className="profileIcons"/>
              <span>Wishlist</span>
            </a>
            <a className="profile">
              <BiShoppingBag className="profileIcons"/>
              <span>Bag</span>
             { cart.length !==0 && <div className="cart-holder">
                {cart.length === 0 ? "" : cart.length}
          
          </div>}
            </a>
          </div>
        </div>
        <div className={showMenu?"sm":"sm-active"}>
          <span className="menu" onClick={()=>setShowMenu(false)}>
          <GiHamburgerMenu className="menu-icon"/>
          </span>
          <Link to={"/"} className="logo_sm"> Myntra</Link>
        </div>
      </nav>
  );
}
