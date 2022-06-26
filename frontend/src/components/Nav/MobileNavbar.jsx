import React from "react";
import { BsSearch } from "react-icons/bs";
import Logo from "../../img/logo.png";

import { MobileNavbarContainer } from "./styles";

const MobileNavbar = ({ openDrawer, setOpenDrawer }) => {
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
          <img src={Logo} width={80} alt="Quelib Logo" />
        </div>
        <div className="rightTopNav">
          <BsSearch />
        </div>
      </div>
      <div className="bottomNavbar"></div>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
