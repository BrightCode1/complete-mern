import React, { useEffect, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import * as _email from "email-validator";

import { StyledContainer, StyledHeader, StyledHeaderText } from "./styles";
import authService from "../../features/auth/authService";
import { reset } from "../../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
    password: "",
    cPassword: "",
  });
  const { name, email, image, password, cPassword } = formData;
  const [fileName, setFileName] = useState("Upload Profile Picture");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, message, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const emailValidate = _email.validate(email);

    if (!name || !image || !password) {
      toast.error("Fill in all fields!");
      return;
    }

    if (!emailValidate) {
      toast.error("Invalid email address");
      return;
    }
    if (password !== cPassword) {
      toast.error("Password does not match");
      return;
    }

    const userData = {
      name: name,
      email: email,
      image: image.toString(),
      password: password,
      type: "email",
    };
    dispatch(authService.register(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && userInfo) {
      toast.success(message);
      navigate("/login");
    }
    dispatch(reset());
  }, [userInfo, dispatch, navigate, isSuccess, message, isError]);

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

        {!isLoading ? (
          <button type="submit" onClick={onSubmit}>
            Register
          </button>
        ) : (
          <PulseLoader size={15} />
        )}
      </form>
    </StyledContainer>
  );
};

export default Register;
