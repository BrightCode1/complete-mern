import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;

  .leftSideBar {
    flex: 1;
    height: 100vh;
    //box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .mainContent {
    flex: 4;
    display: flex;
    width: 100%;
    //margin-left: 250px;
    background-color: mistyrose;
    height: 100vh;

    .centerContent {
      flex: 4;
      height: 100vh;
      overflow-y: auto;
      padding: 20px;
      background-color: cornsilk;
    }
    .rightSidebar {
      flex: 1.5;
      height: 100vh;
      overflow-y: auto;
      padding: 20px;
      background-color: red;
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;

    .leftSideBar {
      transform: translateX(${(props) => (props.openDrawer ? "0" : "-100")}%);
      transition: transform 0.3s ease-in-out;
      width: 50%;
      box-shadow: 0px 2px 2px 3px rgb(0 0 0 / 20%);
      position: fixed;
    }
  }

  @media (max-width: 600px) {
    .rightSidebar {
      transform: translateX(300px);
      transition: transform 0.3s ease-in-out;
      width: 50%;
      box-shadow: 0px 2px 2px 3px rgb(0 0 0 / 20%);
      position: fixed;
      right: 0;
    }
  }
`;
