import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 55px;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  position: sticky;

  .centerNav {
    display: flex;
  }

  .rightNav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .searchContainer {
      display: flex;
      border-radius: 20px;
      border: 1px solid #d2d1d2;
      padding: 5px 20px;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;

      .searchInputBtn {
        margin-right: 20px;
        font-size: 14px;
        color: #aaa;
        font-weight: 300;
      }

      svg {
        color: #aaa;
      }
    }

    .user svg,
    .cart svg {
      font-size: 27px;
      color: #444;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #000;
        transform: scale(1.05);
      }
    }

    .user {
      margin-right: 20px;
    }
    .cart {
      position: relative;

      .cartCount {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: #cc002f;
        color: #fff;
        font-size: 12px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: bold;
      }
    }
  }
`;
