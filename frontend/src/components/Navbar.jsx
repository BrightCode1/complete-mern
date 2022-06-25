import React from "react";
import { BsHouseFill, BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

import Logo from "../img/logo.png";
import { NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="leftNav">
        <Link to="/">
          <img src={Logo} width={100} alt="Quelib Logo" />
        </Link>
      </div>
      <div className="centerNav">
        <BsHouseFill />
      </div>
      <div className="rightNav">
        <div className="searchContainer">
          <div className="searchInputBtn">Search user, books, posts...</div>
          <BsSearch />
        </div>
        <div className="user">
          <BiUserCircle />
        </div>
        <div className="cart">
          <MdOutlineShoppingCart />
          <span className="cartCount">0</span>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
