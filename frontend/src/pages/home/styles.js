import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;

  .leftSideBar {
    flex: 1;
    background-color: lightgray;
    height: 100vh;
    //box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
  }

  .mainContent {
    flex: 4;
    display: flex;
    width: 100%;
    max-width: calc(100% - 250px);
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
      flex: 1;
      height: 100vh;
      overflow-y: auto;
      padding: 20px;
      background-color: red;
    }
  }
`;
