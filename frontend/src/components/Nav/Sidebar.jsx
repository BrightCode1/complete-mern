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
          Icon="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          text="kelechi Isaac"
          route="/profile"
        />
        <SidebarItem isIcon={true} Icon={RiHome5Fill} text="Home" route="/" />
        <SidebarItem
          isIcon={true}
          Icon={FcSms}
          text="Messages"
          route="/message"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcAdvertising}
          text="Announcement"
          route="/announcement"
        />
        <SidebarItem
          isIcon={true}
          Icon={IoNotificationsCircleSharp}
          text="Notifications"
          route="/notifications"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcConferenceCall}
          text="School Group"
          route="/group"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcBookmark}
          text="Bookmark"
          route="/bookmark"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcRating}
          text="Ranking"
          route="/ranks"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcSettings}
          text="Settings"
          route="/settings"
        />
        <SidebarItem
          isIcon={true}
          Icon={FcOnlineSupport}
          text="Help & Support"
          route="/support"
        />
        <SidebarItem
          isIcon={true}
          Icon={ImUserPlus}
          text="Invite Friends"
          route=""
        />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
