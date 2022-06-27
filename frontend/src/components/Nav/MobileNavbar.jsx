import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { GoBook } from "react-icons/go";
import {
  IoNotificationsOutline,
  IoAddCircleOutline,
  IoMailOutline,
} from "react-icons/io5";

import { searchBar } from "../../features/nav/navSlice";
import Logo from "../../img/logo.png";

import { MobileNavbarContainer } from "./navStyles";

const MobileNavbar = ({ openDrawer, setOpenDrawer }) => {
  const dispatch = useDispatch();

  const openSearchModal = () => {
    dispatch(searchBar());
  };
  return (
    <MobileNavbarContainer>
      <div className="topNavbar">
        <div className="avatarLogo">
          <img
            src="https://via.placeholder.com/150"
            alt="avatar"
            className="drawerProfileImage"
            onClick={() => setOpenDrawer(!openDrawer)}
          />
          <Link to="/">
            <img src={Logo} width={80} alt="Quelib Logo" />
          </Link>
        </div>
        <div className="rightTopNav" onClick={openSearchModal}>
          <BsSearch />
        </div>
      </div>
      <div className="bottomNavbar">
        <div className="bottomIconContainer">
          <RiHome5Fill />
        </div>
        <div className="bottomIconContainer">
          <GoBook />
        </div>
        <div className="bottomIconContainer">
          <IoAddCircleOutline />
        </div>
        <div className="bottomIconContainer">
          <IoNotificationsOutline />
        </div>
        <div className="bottomIconContainer">
          <IoMailOutline />
        </div>
      </div>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
