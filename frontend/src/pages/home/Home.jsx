import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import MobileNavbar from "../../components/Nav/MobileNavbar";
import Navbar from "../../components/Nav/Navbar";
import Sidebar from "../../components/Nav/Sidebar";
import SearchModal from "../../components/Modal/SearchModal";

import { ContentContainer } from "./homeStyles";
import Posts from "../Posts/Posts";

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchBarOpen = useSelector((state) => state.nav.isSearchModalOpen);

  useEffect(() => {
    setIsModalOpen(searchBarOpen);
  }, [searchBarOpen]);
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = await JSON.parse(localStorage.getItem("user"));
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       navigate("/login");
  //     }
  //   };

  //   fetchData();
  // }, [navigate]);

  const closeSidebar = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Navbar />
      <MobileNavbar setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <ContentContainer openDrawer={openDrawer}>
        <div className="leftSideBar">
          <Sidebar />
          <div className="sidebarBgCover" onClick={closeSidebar}></div>
        </div>
        <div className="mainContent">
          <div className="centerContent">
            <Routes>
              <Route path="/" element={<Posts />} />
            </Routes>
          </div>
          <div className="rightSidebar">Right center</div>
        </div>
      </ContentContainer>
      <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Home;
