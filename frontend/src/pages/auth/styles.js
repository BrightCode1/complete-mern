import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;

    input {
      width: 100% !important;
      padding: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      margin-bottom: 10px;
      font-family: inherit;
      outline: none;
    }

    .upload {
      width: 100%;
      padding: 12px 20px;
      background-color: #000;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      display: flex;

      svg {
        font-size: 20px;
        color: white;
        margin-right: 15px;
      }
    }

    button {
      width: 100%;
      height: 40px;
      background-color: #0e0e0e;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 17px;
      font-weight: 600;
      font-family: inherit;
      transition: all 0.3s ease-in-out;
      transform: scale(1);

      &:hover {
        transform: scale(0.95);
      }
    }
  }
`;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 0 20px;
`;

export const StyledHeaderText = styled.p`
  font-size: 17px;
  color: #828282;
  margin-bottom: 20px;
`;

export const AuthButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(0.99);
  }

  img {
    margin-right: 20px;
    width: 18px;
    height: 18px;
  }
`;
