import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.5rem;
  cursor: pointer;
  padding-left: 15px;

  svg {
    margin-right: 1.1rem;
    font-size: 1.7rem;
  }

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 1.1rem;
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const SidebarItem = ({ isIcon, Icon, text }) => {
  return (
    <ItemContainer>
      {isIcon && <Icon />}
      {!isIcon && <img src={Icon} alt={text} />}
      <p>{text}</p>
    </ItemContainer>
  );
};

export default SidebarItem;
