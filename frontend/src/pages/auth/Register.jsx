import React from "react";
import { FiCamera } from "react-icons/fi";

import { StyledContainer, StyledHeader, StyledHeaderText } from "./styles";

const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    image: null,
    password: "",
    cPassword: "",
  });
  const [fileName, setFileName] = React.useState("Upload Profile Picture");

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledContainer>
      <StyledHeader>Register</StyledHeader>
      <StyledHeaderText>Create an account with us</StyledHeaderText>
      <form>
        <input
          name="name"
          type="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={onChangeInput}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={onChangeInput}
        />
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          name="imageUpload"
          onChange={(e) => {
            setFormData({
              ...formData,
              image: e.target.files[0],
            });
            setFileName(e.target.files[0].name);
          }}
          style={{ display: "none" }}
        />
        <label htmlFor="icon-button-file">
          <div className="upload">
            <FiCamera /> {fileName}
          </div>
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={onChangeInput}
        />
        <input
          name="cPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.cPassword}
          onChange={onChangeInput}
        />
        <button type="submit" onClick={onSubmit}>
          Register
        </button>
      </form>
    </StyledContainer>
  );
};

export default Register;
