import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import {
  FcAdvertising,
  FcBookmark,
  FcSettings,
  FcConferenceCall,
  FcSms,
  FcOnlineSupport,
  FcRating,
} from "react-icons/fc";
import { ImUserPlus } from "react-icons/im";
import styled from "styled-components";

import SidebarItem from "./SidebarItem";

const SidebarContainer = styled.div`
  padding-top: 10px;
  @media (max-width: 830px) {
    z-index: 7;
    background-color: #fff;
    height: 100vh;
    width: 70%;
    box-shadow: 0px 2px 2px 3px rgb(0 0 0 / 20%);
  }
`;

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarItem
          isIcon={false}
          Icon="https://via.placeholder.com/150"
          text="kelechi Isaac"
        />
        <SidebarItem isIcon={true} Icon={RiHome5Fill} text="Home" />
        <SidebarItem isIcon={true} Icon={FcSms} text="Messages" />
        <SidebarItem isIcon={true} Icon={FcAdvertising} text="Annoucement" />
        <SidebarItem
          isIcon={true}
          Icon={IoNotificationsCircleSharp}
          text="Notifications"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcConferenceCall}
          text="School Group"
        />
        <SidebarItem isIcon={true} Icon={FcBookmark} text="Bookmark" />
        <SidebarItem isIcon={true} Icon={FcRating} text="Ranking" />
        <SidebarItem isIcon={true} Icon={FcSettings} text="Settings" />
        <SidebarItem
          isIcon={true}
          Icon={FcOnlineSupport}
          text="Help & Support"
        />
        <SidebarItem isIcon={true} Icon={ImUserPlus} text="Invite Friends" />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
