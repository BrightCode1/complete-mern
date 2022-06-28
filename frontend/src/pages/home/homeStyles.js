import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  margin-top: 55px;

  .leftSideBar {
    flex: 1;
    height: 100vh;
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

      &::-webkit-scrollbar {
        width: 7px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 5px;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #999;
      }
    }
    .rightSidebar {
      flex: 1.5;
      height: 100vh;
      overflow-y: auto;
      padding: 20px;
      background-color: red;
    }
  }

  @media (max-width: 830px) {
    margin-top: 50px;

    .leftSideBar {
      transform: translateX(${(props) => (props.openDrawer ? "0" : "-100")}%);
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 6;
    }
    .sidebarBgCover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 7;
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
