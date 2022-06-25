import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HomeContent from "./HomeContent";

import { ContentContainer } from "./styles";

const Home = () => {
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
  return (
    <>
      <Navbar />
      <ContentContainer>
        <div className="leftSideBar">
          <Sidebar />
        </div>
        <div className="mainContent">
          <div className="centerContent">
            <HomeContent />
          </div>
          <div className="rightSidebar">Right center</div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
