import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const IconNumberFloatContainer = styled.div`
  position: relative;
  font-size: 25px;
  color: #444;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop : "0"} !important;

  &:hover {
    color: #000;
    transform: scale(1.05);
  }

  .text {
    font-size: 11px;
    margin-top: 2px;
    font-weight: 500;
  }

  .iconNumber {
    position: absolute;
    top: -5px;
    right: -7px;
    background-color: #cc002f;
    color: #fff;
    font-size: 11px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
  }
`;

const IconNumberFloat = ({ Icon, count, route, text }) => {
  return (
    <>
      <Link to={route}>
        <IconNumberFloatContainer marginTop={text ? 2 : 0}>
          <Icon />
          {text && <p className="text">{text}</p>}
          {count > 0 && <div className="iconNumber">{count}</div>}
        </IconNumberFloatContainer>
      </Link>
    </>
  );
};

export default IconNumberFloat;
