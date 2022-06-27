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

  .leftNav {
    flex: 1;
  }

  .centerNav {
    display: flex;
    flex: 2;
    justify-content: space-around;
  }

  .rightNav {
    flex: 2;
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
        white-space: nowrap;
      }

      svg {
        color: #aaa;
      }
    }

    .user svg {
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
  }

  @media (max-width: 830px) {
    display: none;
  }
`;

export const MobileNavbarContainer = styled.div`
  display: none;

  .topNavbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 5;
    box-shadow: rgb(101 119 134 / 20%) 0px 0px 8px,
      rgb(101 119 134 / 25%) 0px 1px 3px 1px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;

    .avatarLogo {
      display: flex;

      .drawerProfileImage {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }

  .rightTopNav {
    cursor: pointer;

    svg {
      font-size: 20px;
    }
  }

  .bottomNavbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 5;
    box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;

    .bottomIconContainer {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .bottomIconContainer svg {
      font-size: 25px;
    }
  }

  @media (max-width: 830px) {
    display: flex;

    .leftNav {
      transform: translateX(-100%);
      transition: all 0.2s ease-in-out;
    }
  }
`;
