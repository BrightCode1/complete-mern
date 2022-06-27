import React from "react";
import { useDispatch } from "react-redux";
import { BsHouseFill, BsSearch, BsChat } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

import { searchBar } from "../../features/nav/navSlice";
import Logo from "../../img/logo.png";
import { NavbarContainer } from "./navStyles";
import IconNumberFloat from "../widget/IconNumberFloat";

const Navbar = () => {
  const dispatch = useDispatch();

  const openSearchModal = () => {
    dispatch(searchBar());
  };
  return (
    <>
      <NavbarContainer>
        <div className="leftNav">
          <Link to="/">
            <img src={Logo} width={100} alt="Quelib Logo" />
          </Link>
        </div>
        <div className="centerNav">
          <IconNumberFloat Icon={BsHouseFill} count={0} route="/" text="Home" />
          <IconNumberFloat Icon={BsChat} count={1} route="/" text="message" />
          <IconNumberFloat
            Icon={HiOutlineUserGroup}
            count={0}
            route="/"
            text="Group"
          />
          <IconNumberFloat
            Icon={IoNotificationsOutline}
            count={0}
            route="/"
            text="Notifications"
          />
        </div>
        <div className="rightNav">
          <div className="searchContainer" onClick={openSearchModal}>
            <div className="searchInputBtn">Search user, books, posts...</div>
            <BsSearch />
          </div>
          <div className="user">
            <BiUserCircle />
          </div>
          <IconNumberFloat
            Icon={MdOutlineShoppingCart}
            count={10}
            route="/cart"
          />
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
